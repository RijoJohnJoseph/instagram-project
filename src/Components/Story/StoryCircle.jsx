import React from 'react'
import { useNavigate } from 'react-router-dom'

const StoryCircle = () => {

  const navigate=useNavigate();

  const handleNavigate=()=>{
    navigate("/story")
  }
  return (
    <div onClick={handleNavigate} className='cursor-pointer flex flex-col items-center'>
        <img className='h-16 w-16 rounded-full' src="https://cdn.pixabay.com/photo/2017/05/25/15/08/jogging-2343558_640.jpg" alt="" />
        <p>username</p>
    </div>
  )
}

export default StoryCircle