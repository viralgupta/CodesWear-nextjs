import React from 'react'

const Order = ({ subTotal }) => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">CODESWEAR</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Your Order is On The Way!</h1>
              <div className="flex mb-4 w-3/4">
                <a className="flex-grow text-pink-500 border-b-2 border-pink-500 py-2 text-lg px-1">Order id #8977</a>

              </div>
              <p className="leading-relaxed mb-4">Your order details:</p>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Wear the Code (XL)</span>
                <span className="ml-auto text-gray-900">1</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Wear the Code (XL)</span>
                <span className="ml-auto text-gray-900">1</span>
              </div>
              <div className="flex border-t border-gray-200 py-2 mb-6">
                <span className="text-gray-500">Wear the Code (XL)</span>
                <span className="ml-auto text-gray-900">1</span>
              </div>
              <div className="flex">
                <div className='flex justify-between'>
                  <div className='text-lg font-bold py-2'>Sub Total:</div>
                  <div className='text-lg font-bold p-2'>₹{subTotal}</div>
                </div>
                <button className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Track Order</button>
              </div>
            </div>
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Order