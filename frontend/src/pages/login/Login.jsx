import React, { useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'; // For outline version


const Login = () => {
  const [visible, setVisible] = useState(false);


  function changeClickHandler() {
    setVisible(!visible)
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Login  <span className='text-blue-500'>Chat App</span></h1>

        <form >
          <div>
            <label className='label p-2'>
              <span className='text-base label-text' >Username</span>
            </label>
            <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' />
          </div>


          <div>
            <label className='label '>
              <span className='text-base label-text' >Password</span>
            </label>
            <div className='flex  items-center justify-center'>
              <input type={visible ? "text" : "password"} placeholder='Enter password' className='w-full input input-bordered h-10' />
              <button type='btn' onClick={changeClickHandler}>
                {
                  visible ? <EyeSlashIcon className="w-6 h-6 text-gray-500" /> :
                    <EyeIcon className="w-6 h-6 text-gray-500" />

                }
              </button>


            </div>

          </div>
          <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            {"Don't"} have an account?
          </a>

          <div>
            <button className='btn btn-block btn-sm mt-2 '>Login</button>
          </div>

        </form>


      </div>

    </div>
  )
}

export default Login
