import React from 'react'

const SuggestionCard = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex'>
            <img className='h-9 w-9 rounded-full' src="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg" alt="" />
            <div className='ml-5'>
                <p className='text-sm font-semibold'>username</p>
                <p className='text-sm font-semibold opacity-70'>Follows you</p>
            </div>
        </div>
        <div>
            <p className='text-blue-700 text-sm font-semibold'>Follow </p>
        </div>
    </div>
  )
}

export default SuggestionCard