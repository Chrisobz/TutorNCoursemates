import React, { useEffect, useRef, useState } from 'react'
import '../courses/Courses.scss'
import CourseCard from '../../components/courseCard/CourseCard'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'
import { useLocation } from 'react-router-dom'

function Courses() {
  const [sort, setSort] = useState('sales')
  const [open, setOpen] = useState(false)
  const minRef = useRef()
  const maxRef = useRef()

  const { search } = useLocation()

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['courses', search, sort],
    queryFn: () => {
      const queryParams = new URLSearchParams(search)
      queryParams.set('min', minRef.current.value)
      queryParams.set('max', maxRef.current.value)
      queryParams.set('sort', sort)
      queryParams.set('cat', 'sciences') // Add filter by category
      return newRequest
        .get(`/courses?${queryParams.toString()}`)
        .then((res) => res.data)
    
    },
  })

  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }

  useEffect(() => {
    refetch()
  }, [sort])

  const apply = () => {
    refetch()
  }

  return (
    <div className='courses'>
      <div className='container'>
        
        <h1>Science courses</h1>
        <p>
          Explore the science courses offered
        </p>
        <div className='menu'>
          <div className='left'>
            <span>Budget</span>
            <input ref={minRef} type='number' placeholder='min' />
            <input ref={maxRef} type='number' placeholder='max' />
            <button onClick={apply}>Apply</button>
          </div>
          <div className='right'>
            <span className='sortBy'>Sort by</span>
            <span className='sortType'>
              {sort === 'sales' ? 'Best Selling' : 'Newest'}
            </span>
            <img src='./img/down.png' alt='' onClick={() => setOpen(!open)} />
            {open && (
              <div className='rightMenu'>
                {sort === 'sales' ? (
                  <span onClick={() => reSort('createdAt')}>Newest</span>
                ) : (
                  <span onClick={() => reSort('sales')}>Best Selling</span>
                )}
                <span onClick={() => reSort('sales')}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className='cards'>
          {isLoading
            ? 'loading'
            : error
            ? 'Something went wrong!'
            : data.map((course) => <CourseCard key={course._id} item={course} />)}
        </div>
      </div>
    </div>
  )
}

export default Courses