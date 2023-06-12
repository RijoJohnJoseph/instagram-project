import React from 'react'
import ProfileUserDetails from '../../Components/ProfileComponent/ProfileUserDetails'
import ReqUsePostPart from '../../Components/ProfileComponent/ReqUsePostPart'

export const Profile = () => {
  return (
    <div className='px-20'>
        <div>
            <ProfileUserDetails/>
        </div>
        <div>
            <ReqUsePostPart/>
        </div>
    </div>
  )
}

export default Profile