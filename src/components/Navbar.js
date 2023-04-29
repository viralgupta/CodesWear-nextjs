import React, { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = ({ user, cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const cart1 = useRef()
  const [dropdown, setdropdown] = useState(false)
  const togglecart = () => {
    if (cart1.current.className.includes('translate-x-full')) {
      cart1.current.className = cart1.current.className.replace('translate-x-full', 'translate-x-0');
    } else if (cart1.current.className.includes('translate-x-0')) {
      cart1.current.className = cart1.current.className.replace('translate-x-0', 'translate-x-full');
    }
  }
  return (
    <header className="text-gray-600 body-font shadow-lg shadow-pink-100 top-0 sticky z-10 bg-white w-full">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row justify-center items-center">
        <Link href={'/'}>
          <Image src="/logo.png" alt="/logo.png" width={200} height={40} className='' />
        </Link>
        <nav className="md:mr-auto md:ml-4 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap flex-row text-center md:font-semibold">
          <div></div>
          <Link href={'/tshirt'}>
            <div className="mr-3 md:mr-5 font-semibold hover:text-pink-600 transition duration-100 hover:scale-125">Tshirts</div>
          </Link>
          <Link href={'/hoddie'}>
            <div className="mr-3 md:mr-5 font-semibold hover:text-pink-600 transition duration-100 hover:scale-125">Hoodies</div>
          </Link>
          <Link href={'/sticker'}>
            <div className="mr-3 md:mr-5 font-semibold hover:text-pink-600 transition duration-100 hover:scale-125">Stickers</div>
          </Link>
          <Link href={'/mug'}>
            <div className="mr-3 md:mr-5 font-semibold hover:text-pink-600 transition duration-100 hover:scale-125">Mugs</div>
          </Link>
        </nav>
        <div onMouseLeave={() => { setdropdown(false) }} onMouseOver={() => { setdropdown(true) }}>
          <div className='absolute right-2 top-3 md:top-0 m-2 cursor-pointer text-pink-400'>
            <i className="fa-solid fa-cart-shopping md:translate-x-1" onClick={togglecart}></i>
            <div className='hidden md:block '>Cart</div>
          </div>
          {dropdown && <div className="absolute md:right-16 left-6 top-14 md:left-auto bg-gray-100 text-center rounded-md text-pink-400">
            <ul>
              <Link href={'/account'}><li className='m-4 hover:text-pink-600 cursor-pointer'>Account Details</li></Link>
              <div className='border-b border-black'></div>
              <Link href={'/orders'}><li className='m-4 hover:text-pink-600 cursor-pointer'>Orders</li></Link>
            </ul>
          </div>}
          {user.value &&
            <div>
              <div className='absolute left-0 block md:hidden top-3 md:top-0 m-2 cursor-pointer text-pink-400'>
                <i className="fa-solid fa-circle-user translate-x-2"></i>
              </div>
              <div className='absolute right-14 hidden md:block top-3 md:top-0 m-2 cursor-pointer text-pink-400'>
                <i className="fa-solid fa-circle-user md:translate-x-5"></i>
                <div className='hidden md:block '>Account</div>
              </div>
            </div>}
        </div>
        {!user.value &&
          <Link href={'/login'}>
            <div className='absolute left-0 block md:hidden top-3 md:top-0 m-2 cursor-pointer text-pink-400'>
              <i className="fa-solid fa-user-plus translate-x-2"></i>
              <div className='hidden md:block '>Login</div>
            </div>
            <div className='absolute right-14 hidden md:block top-3 md:top-0 m-2 cursor-pointer text-pink-400'>
              <i className="fa-solid fa-user-plus translate-x-10"></i>
              <div className='hidden md:block '>Login/Signup</div>
            </div>
          </Link>}
      </div>
      <div className="sidebar absolute overflow-y-scroll top-0 right-0 bg-pink-100 p-5 flex-col w-full md:w-1/5 h-[100vh] z-10 transform transition-transform translate-x-full flex" ref={cart1}>
        <div className="cart text-center text-2xl text-pink-300 font-semibold">Shopping Cart</div>
        <i onClick={togglecart} className="fa-solid fa-x absolute top-0 right-0 p-5 cursor-pointer text-pink-500"></i>
        <br />
        <ol className='list-disc bg-pink-100'>
          {Object.keys(cart).length == 0 && <div className='text-center'>No Items in The Cart :/</div>}
          {Object.keys(cart).map((k) => {
            return <li key={k} className=''>
              <div className='flex justify-between'>
                <div className='overflow-hidden mr-3'>{`${cart[k].name} (${cart[k].size}/${cart[k].variant})`}</div>
                <div className='  flex items-center justify-end'>
                  <i onClick={() => { removeFromCart(k, 1) }} className="fa-solid fa-minus bg-pink-300 p-1 text-white cursor-pointer rounded-md"></i>
                  &nbsp;{cart[k].qty}&nbsp;
                  <i onClick={() => { addToCart(k, 1) }} className="fa-solid fa-plus bg-pink-300 p-1 text-white cursor-pointer rounded-md"></i>
                </div>
              </div>
            </li>
          }
          )}
        </ol>
        <div className='flex justify-between'>
          <div className='text-lg font-bold p-2'>Sub Total:</div>
          <div className='text-lg font-bold p-2'>₹{subTotal}</div>
        </div>
        <div className='flex flex-row justify-end'>
          <button onClick={clearCart} className="flex justify-center p-1 w-1/2 mr-1 text-white items-center bg-pink-500 border-0] focus:outline-none disabled:bg-pink-200 hover:bg-pink-600 rounded text-lg" >
            Clear Cart
          </button>
          <Link href={'/checkout'} className='w-1/2  flex flex-row justify-end'>
            <button className="justify-center p-1 text-white items-center bg-pink-500 border-0 focus:outline-none disabled:bg-pink-200 hover:bg-pink-600 rounded text-lg"><i className="fa-solid fa-bag-shopping mx-1"></i>Check Out</button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar