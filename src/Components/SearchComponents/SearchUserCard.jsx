import React from 'react'

const SearchUserCard = () => {
  return (
    <div className='cursor-pointer py-2'>
        <div className='flex item-center ml-3'>
            <img className='w-10 h-10 flex rounded-full' src="https://cdn.pixabay.com/photo/2023/05/31/17/54/cat-8031947_640.jpg" alt="" />
            <div className='ml-3'>
                <p>Full name</p>
                <p className='opacity-70'>username</p>
            </div>
        </div>
    </div>
  )
}

export default SearchUserCard