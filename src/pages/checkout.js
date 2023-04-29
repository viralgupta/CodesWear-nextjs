import React, { useState, useRef } from 'react'
import Head from 'next/head'

const Checkout = ({ cart, removeFromCart, addToCart, subTotal }) => {
  const [button, setbutton] = useState(true)
  const [fvp, setfvp] = useState('(Fill Valid Pincode)')
  const name = useRef()
  const email = useRef()
  const address = useRef()
  const phone = useRef()
  const pincode = useRef()
  const city = useRef()
  const state = useRef()
  const checkforfields = async () => {
    if (name.current.value && email.current.value && address.current.value && phone.current.value && pincode.current.value && city.current.value && state.current.value) {
      setbutton(false)
    }
    if (pincode.current.value.length == 6) {
      let data = await fetch(`https://api.postalpincode.in/pincode/${pincode.current.value}`)
      let parsed = await data.json()
      if (parsed[0].Status !== 'Error') {
        let { District, State } = parsed[0].PostOffice[0]
        city.current.value = District
        state.current.value = State
        setfvp('')
      }
      else if (parsed[0].Status === 'Error') {
        console.log('running')
        city.current.value = ''
        state.current.value = ''
        setfvp('(Fill Valid Pincode)')
      }
    }
    else {
      setbutton(true)
      city.current.value = ''
      state.current.value = ''
      setfvp('(Fill Valid Pincode)')
    }
  }

  const initiatePayment = async () => {
    // let orderid = Math.floor(Math.random()*Date.now());
    // const data = { orderid, cart, subTotal, email:"email"}
    // let res = await fetch(`${NEXT_PUBLIC_HOST}/api/prepayment`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
    // let txntoken = res.json()
    // console.log(response)
    // let defaultMerchantConfiguration = {
    //   "root": "",
    //   "style": {
    //     "bodyColor": "",
    //     "themeBackgroundColor": "",
    //     "themeColor": "",
    //     "headerBackgroundColor": "",
    //     "headerColor": "",
    //     "errorColor": "",
    //     "successColor": ""
    //   },
    //   "flow": "DEFAULT",
    //   "data": {
    //     "orderId": orderid,
    //     "token": txntoken,
    //     "tokenType": "TXN_TOKEN",
    //     "amount": subTotal,
    //     "userDetail": {
    //       "mobileNumber": "",
    //       "name": ""
    //     }
    //   },
    //   "merchant": {
    //     "mid": process.env.PAYTM_MID,
    //     "name": "",
    //     "redirect": true
    //   },
    //   "labels": {},
    //   "payMode": {
    //     "labels": {},
    //     "filter": [],
    //     "order": []
    //   },
    //   "handler": {}
    // };
  }
  return (
    <>
      <Head><meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" /></Head>
      <div className='w-fit m-auto'>
        <div className=' text-3xl font-bold m-5'>
          Check Out
        </div>
      </div>
      <div className="flex md:flex-row flex-col">
        <div className='md:w-2/3'>
          <div className='m-auto w-full p-5 font-bold text-xl'>Delivery Details</div>
          <div className='flex full m-auto px-5 space-x-2 py-2'>
            <div className=" w-1/2">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" ref={name} onChange={checkforfields} id="name" name="name" className="w-full bg-white rounded border px-2 border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1  leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className=" w-1/2">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" ref={email} onChange={checkforfields} id="email" name="email" className="w-full px-2 bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1  leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="m-auto w-full px-5">
            <label htmlFor="Address" className="leading-7 text-sm text-gray-600">Address</label>
            <textarea id="Address" ref={address} onChange={checkforfields} name="Address" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <div className='flex full m-auto px-5 space-x-2 py-2'>
            <div className=" w-1/2">
              <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone Number</label>
              <input type="phone" ref={phone} onChange={checkforfields} id="phone" name="phone" className="w-full px-2 bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1  leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className=" w-1/2">
              <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
              <input type="pincode" ref={pincode} onChange={checkforfields} id="pincode" name="pincode" className="w-full px-2 bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1  leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className='flex full m-auto px-5 space-x-2 py-2'>
            <div className=" w-1/2">
              <label htmlFor="city" className="leading-7 text-sm text-gray-400">City {fvp}</label>
              <input disabled type="city" ref={city} onChange={checkforfields} id="city" name="city" className="w-full px-2 bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1  leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className=" w-1/2">
              <label htmlFor="state" className="leading-7 text-sm text-gray-400">State {fvp}</label>
              <input disabled type="state" ref={state} onChange={checkforfields} id="state" name="state" className="w-full px-2 bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1  leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className='mx-5 text-xl'>Review Cart</div>
          <ol className='m-5 bg-orange-100 p-2 rounded-xl'>
            {Object.keys(cart).length == 0 && <div className='text-center'>No Items in The Cart :/</div>}
            {Object.keys(cart).map((k) => {
              return <li key={k} className=''>
                <div className='flex justify-between space-x-10 space-y-1'>
                  <div className='overflow-hidden text-xl'>{`${cart[k].name} (${cart[k].size}/${cart[k].variant})`}</div>
                  <div className='  flex items-center justify-center text-xl'>
                    <i onClick={() => { removeFromCart(k, 1) }} className="fa-solid fa-minus bg-pink-300 p-1 text-white cursor-pointer rounded-md"></i>
                    &nbsp;{cart[k].qty}&nbsp;
                    <i onClick={() => { addToCart(k, 1) }} className="fa-solid fa-plus bg-pink-300 p-1 text-white cursor-pointer rounded-md"></i>
                  </div>
                </div>
              </li>
            }
            )}
          </ol>
          <div className='flex justify-between mx-5'>
            <div className='text-lg font-bold p-2'>Sub Total:</div>
            <div className='text-lg font-bold p-2'>₹{subTotal}</div>
          </div>
          <div className='w-1/2 m-auto'>
            <button onClick={initiatePayment} disabled={button} className='disabled:bg-pink-100 mx-2 p-1 w-full disabled:text-opacity-50 bg-pink-300 rounded border hover:bg-pink-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700  leading-8 transition-colors duration-200 ease-in-out'><i className="fa-solid fa-credit-card"></i> Pay ₹{subTotal}</button>
          </div>
        </div>
        <div className="md:w-1/3 h-full m-5 flex flex-col md:mt-24">
          <img src="https://www.weareteachers.com/wp-content/uploads/vangogh.jpg" alt="https://www.weareteachers.com/wp-content/uploads/vangogh.jpg" className=' border-8 rounded-xl border-black' />
          <div className='text-end w-2/3 ml-auto text-sm'>If you truly love nature, you will find beauty everywhere. ~Vincent van Gogh</div>
        </div>
      </div>

    </>
  )
}

export default Checkout