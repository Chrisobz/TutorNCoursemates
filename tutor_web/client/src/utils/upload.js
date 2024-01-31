import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "tutoring");

  // Use axios to make a POST request to the Cloudinary API and pass in the data

  try {
    const res = await axios.post("https://api.cloudinary.com/v1_1/dmavxgepy/image/upload", data);

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;
