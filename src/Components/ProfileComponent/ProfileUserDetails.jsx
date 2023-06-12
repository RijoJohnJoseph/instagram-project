import React from 'react'
import {TbCircleDashed} from "react-icons/tb"

const ProfileUserDetails = () => {
  return (
    <div className='py-10'>
        <div className='flex items-center'>
            <div className='w-[15%]'>
                <img className='w-32 h-32 rounded-full' src="https://cdn.pixabay.com/photo/2023/05/29/17/01/hamburger-8026582__340.jpg" alt="" />
            </div>

            <div className='space-y-5'>
                <div className='flex space-x-10 items-center'>
                    <p>
                        username
                    </p>
                    <button>Edit Profile</button>
                    <TbCircleDashed></TbCircleDashed>
                </div>
                <div className='flex space-x-10'>
                    <div>
                        <span className='font-semibold mr-2'>10</span>
                        <span>posts</span>
                    </div>
                    <div>
                        <span className='font-semibold mr-2'>5</span>
                        <span>followers</span>
                    </div>
                    <div>
                        <span className='font-semibold mr-2'>10</span>
                        <span>Following</span>
                    </div>
                </div>
                <p className='font-semibold'>Full Name</p>
                <p className='font-thin text-sm'>And when all else fails, being quippy and somewhat vague is also a good source of comedy. If chaos is your brand, embrace it.</p>
            </div>
        </div>
    </div>
  )
}

export default ProfileUserDetails