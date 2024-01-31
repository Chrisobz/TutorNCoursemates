import React, { useReducer, useState } from 'react'
import './Add.scss'
import { courseReducer, INITIAL_STATE } from '../../reducers/courseReducer'
import upload from '../../utils/upload'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'
import { useNavigate } from 'react-router-dom'

const Add = () => {
  const [singleFile, setSingleFile] = useState(undefined)
  const [files, setFiles] = useState([])
  const [uploading, setUploading] = useState(false)

  const [state, dispatch] = useReducer(courseReducer, INITIAL_STATE)

  const handleChange = (e) => {
    dispatch({
      type: 'CHANGE_INPUT',
      payload: { name: e.target.name, value: e.target.value },
    })
  }
  const handleFeature = (e) => {
    e.preventDefault()
    dispatch({
      type: 'ADD_FEATURE',
      payload: e.target[0].value,
    })
    e.target[0].value = ''
  }

  const handleUpload = async () => {
    setUploading(true)
    try {
      const cover = await upload(singleFile)

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file)
          return url
        })
      )
      setUploading(false)
      dispatch({ type: 'ADD_IMAGES', payload: { cover, images } })
    } catch (err) {
      console.log(err)
    }
  }

  const navigate = useNavigate()

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (course) => {
      return newRequest.post('/courses', course)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['myCourses'])
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    mutation.mutate(state)
    navigate('/mycourses')
  }

  return (
    <div className='add'>
      <div className='container'>
        <h1>Add New Course</h1>
        <div className='sections'>
          <div className='info'>
            <label htmlFor=''>Title</label>
            <input
              type='text'
              name='title'
              placeholder="Title"
              onChange={handleChange}
            />
            <label htmlFor=''>Category</label>
            <select name='cat' id='cat' onChange={handleChange}>
            <option value=''></option>
              <option value='medicine'>Medicine and Health Sciences</option>
              <option value='law'>Law</option>
              <option value='engineering'>Engineering</option>
              <option value='mathematics'>Mathematics</option>
              <option value='humanities'>Humanities</option>
              <option value='computing'>Computing</option>
              <option value='arts'>Arts and Design</option>
              <option value='sciences'>Natural Sciences</option>
              <option value='business'>Business</option>
              <option value='skills'>Skills</option>
            </select>
            <div className='images'>
              <div className='imagesInputs'>
                <label htmlFor=''>Cover Image</label>
                <input
                  type='file'
                  onChange={(e) => setSingleFile(e.target.files[0])}
                />
                <label htmlFor=''>Upload Images</label>
                <input
                  type='file'
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
              <button onClick={handleUpload}>
                {uploading ? 'uploading' : 'Upload'}
              </button>
            </div>
            <label htmlFor=''>Description</label>
            <textarea
              name='desc'
              id=''
              placeholder='Brief descriptions to introduce your course to customers'
              cols='0'
              rows='16'
              onChange={handleChange}
            ></textarea>
            <button onClick={handleSubmit}>Create</button>
          </div>
          <div className='details'>
            <label htmlFor=''>Short Title</label>
            <input
              type='text'
              name='shortTitle'
              placeholder='e.g. One-page web design'
              onChange={handleChange}
            />
            <label htmlFor=''>Short Description</label>
            <textarea
              name='shortDesc'
              onChange={handleChange}
              id=''
              placeholder='Short description of your course'
              cols='30'
              rows='10'
            ></textarea>
            <label htmlFor=''>Delivery Time (e.g. 3 days)</label>
            <input type='number' name='deliveryTime' onChange={handleChange} />
            <label htmlFor=''>Feedback </label>
            <input
              type='number'
              name='revisionNumber'
              onChange={handleChange}
            />
            <label htmlFor=''>Add Features</label>
            <form action='' className='add' onSubmit={handleFeature}>
              <input type='text' placeholder='e.g. Advanced learning' />
              <button type='submit'>add</button>
            </form>
            <div className='addedFeatures'>
              {state?.features?.map((f) => (
                <div className='item' key={f}>
                  <button
                    onClick={() =>
                      dispatch({ type: 'REMOVE_FEATURE', payload: f })
                    }
                  >
                    {f}
                    <span>X</span>
                  </button>
                </div>
              ))}
            </div>
            <label htmlFor=''>Price</label>
            <input type='number' onChange={handleChange} name='price' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add