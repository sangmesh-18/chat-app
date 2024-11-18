import React from 'react'
import {BiLogOut} from 'react-icons/bi'
import useLogOut from '../../hooks/useLogOut'

const LogoutButton = () => {
  const {loading,logOut}=useLogOut();
  return (
    <div className='mt-auto'>
        {
          !loading ?
          (<BiLogOut onClick={logOut} className='w-6 h-6 text-white cursor-pointer'/> )
          :(<span className='loading loading-spinner'></span>

          )
        }
      
    </div>
  )
}

export default LogoutButton
