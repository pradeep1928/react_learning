import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [file, setFile] = useState()

  const baseurl = 'http://localhost:3000/api/upload'

  const handleChange = (e) => {
    setFile(e.target.files[0])
  }

  const upload = (e) => {
    e.preventDefault()
    const formdata = new FormData()
    formdata.append('file', file)
    formdata.append('filename', file.name)
    axios.post(baseurl, formdata)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <>
      <h3>File upload in React</h3>
      <input type="file" onChange={handleChange} />
      <button type='button' onClick={upload}>Upload</button>
    </>
  )
}

export default App
