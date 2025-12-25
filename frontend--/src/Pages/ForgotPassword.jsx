import React from 'react'

const ForgotPassword = () => {
  return (
    <div className='flex mx-auto p-1 justify-center mt-5 bg-gradient-to-br from-fuchsia-600 to-blue-600 w-fit'>
      <div className='bg-black px-5 py-10 rounded-lg'>
        <div className='flex justify-center mb-10 text-purple-500 text-xl underline'>
          <p>Reset Password</p>
        </div>
        <div>
          <div className='mb-2'>
            <input type='email' src='' placeholder='Enter Email' className='w-72 h-8 p-0.5 rounded-sm border border-fuchsia-600 bg-gray-700' />
          </div>
          <div className='flex justify-center'>
            <button className='bg-sky-600 w-full rounded-full max-w-fit mx-auto px-10 py-2 mt-5'>Send Reset Link</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
