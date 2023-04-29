import React, { useEffect } from 'react'

const account = ({logout}) => {
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      window.location = '/login'
    }
  }, [])
  return (
    <div className='container lg:max-w-screen-xl mx-auto'>
      <div className='text-center text-2xl font-bold m-3 my-6'>Your Account</div>
      <button onClick={()=>{logout()}} className=" text-white bg-red-500 ml-10 md:ml-0 border-0 py-2 px-3 focus:outline-none hover:bg-red-600 rounded">Logout<i className="fa-solid fa-right-from-bracket pl-2 mt-1"></i></button>
    </div>
  )
}

export default account