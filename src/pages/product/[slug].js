import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import Product from '../../../models/Product'
const mongoose = require('mongoose')
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Slug = (props) => {
  const router = useRouter()
  const { slug } = router.query
  const pininput = useRef()
  const [pinres, setpinres] = useState('')
  const checkservice = async () => {
    let json = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
    let result = await json.json()
    if (result.includes(pininput.current.value)) {
      // setpinres('YaY! Pincode is Serviceable')
      toast.success('YaY! Pincode is Serviceable', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    else if (pininput.current.value == '') {
      // setpinres('Please enter a pincode to check!')
      toast.warn('Please enter a pincode to check!', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    else {
      // setpinres('Sorry, Pincode is Not Serviceable :(')
      toast.error('Sorry, Pincode is Not Serviceable', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  }
  let currentc = Object.keys(props.current)

  const process = async () => {
    let optionval = document.getElementById('optionval')
    props.buyNow(props.current[currentc][optionval.value].slug, 1, props.products.price, props.products.title, optionval.value, Object.keys(props.current)[0])
  }
  const togglecart = () => {
    let optionval = document.getElementById('optionval')
    props.addToCart(props.current[currentc][optionval.value].slug, 1, props.products.price, props.products.title, optionval.value, Object.keys(props.current)[0])
  }

  return <>
    <section className="text-gray-600 body-font overflow-hidden">
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container px-5 py-10 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-top rounded" src="https://www.mydesignation.com/wp-content/uploads/2022/12/gojo-tshirt-main-image.jpg" />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">CodesWear</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{props.products.title}</h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed">{props.products.desc}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                {Object.keys(props.current).includes('Red') ? (
                  <button className="rounded-full mr-1 w-4 h-6 cursor-pointer border-2 border-black bg-red-700 focus:outline-none"></button>
                ) : Object.keys(props.colors).includes('Red') && (
                  <a href={`/product/${props.colors.Red.slug}`} className="rounded-full mr-1 w-4 h-6 cursor-pointer bg-red-700 focus:outline-none"></a>
                )}
                {Object.keys(props.current).includes('Green') ? (
                  <button className="rounded-full mr-1 w-4 h-6 cursor-pointer border-2 border-black bg-green-700 focus:outline-none"></button>
                ) : Object.keys(props.colors).includes('Green') && (
                  <a href={`/product/${props.colors.Green.slug}`} className="rounded-full mr-1 w-4 h-6 cursor-pointer bg-green-700 focus:outline-none"></a>
                )}
                {Object.keys(props.current).includes('Yellow') ? (
                  <button className="rounded-full mr-1 w-4 h-6 cursor-pointer border-2 border-black bg-yellow-700 focus:outline-none"></button>
                ) : Object.keys(props.colors).includes('Yellow') && (
                  <a href={`/product/${props.colors.Yellow.slug}`} className="rounded-full mr-1 w-4 h-6 cursor-pointer bg-yellow-700 focus:outline-none"></a>
                )}
                {Object.keys(props.current).includes('Blue') ? (
                  <button className="rounded-full mr-1 w-4 h-6 cursor-pointer border-2 border-black bg-blue-700 focus:outline-none"></button>
                ) : Object.keys(props.colors).includes('Blue') && (
                  <a href={`/product/${props.colors.Blue.slug}`} className="rounded-full mr-1 w-4 h-6 cursor-pointer bg-blue-700 focus:outline-none"></a>
                )}
                {Object.keys(props.current).includes('Orange') ? (
                  <button className="rounded-full mr-1 w-4 h-6 cursor-pointer border-2 border-black bg-orange-700 focus:outline-none"></button>
                ) : Object.keys(props.colors).includes('Orange') && (
                  <a href={`/product/${props.colors.Orange.slug}`} className="rounded-full mr-1 w-4 h-6 cursor-pointer bg-orange-700 focus:outline-none"></a>
                )}
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select id='optionval' className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                    {Object.keys(props.current[currentc]).map((sizee) => { return <option key={sizee} >{sizee}</option> })}
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">₹{props.products.price}</span>
              <button onClick={togglecart} className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Add to Cart</button>
              <button onClick={process} className="flex ml-4 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Buy Now</button>
            </div>
            <div className='mt-5 font-bold'>Check Pincode</div>
            <div className='flex space-x-2'>
              <input type="number" ref={pininput} className='bg-red-100 mt-1 rounded-md p-2' placeholder='110003' />
              <button onClick={checkservice} className='bg-pink-200 p-2 rounded-md font-semibold cursor-pointer hover:bg-pink-300'>Check</button>
            </div>
            <div className='block'>{pinres}</div>
          </div>
        </div>
      </div>
    </section>
  </>
}



export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({ slug: context.query.slug })
  let variants = await Product.find({ title: products[0].title, category: products[0].category })
  let tshirts = {}

  let current = {}
  for (let item of variants) {
    if (item.color == products[0].color) {
      if (Object.keys(current).includes(products[0].color)) {
        if (!Object.keys(current[products[0].color]).includes(item.size)) {
          current[item.color][item.size] = { slug: item.slug }
        }
      }
      else {
        current[products[0].color] = {}
        current[item.color][item.size] = { slug: item.slug }
      }
    }
  }
  let colors = {}
  for (let item of variants) {
    colors[item.color] = { slug: item.slug }
  }
  let key = Object.keys(tshirts)
  return {
    props: { products: JSON.parse(JSON.stringify(products[0])), current: JSON.parse(JSON.stringify(current)), colors }, // will be passed to the page component as props
  }
}

export default Slug