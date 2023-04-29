import React from 'react'
import Link from 'next/link'
import Product from '../../models/Product'
const mongoose = require('mongoose')


const Tshirt = ({products}) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto z-0">
          <div className="flex flex-wrap -m-4 justify-center">
          {Object.keys(products).length ===0 && <p>sorry all the T-Shirts are currently out of stock. New stock coming soon!</p>}
            {Object.keys(products).map((item)=>{
              return <Link href={`/product/${products[item].slug}`} key={products[item]._id} className='lg:w-1/4 md:w-1/2 p-2 w-full'>
              <div className="block relative shadow-md rounded cursor-pointer overflow-hidden">
                <img alt="ecommerce" className="object-cover object-top w-full h-full block" src={products[item].img} />
              </div>
              <div className="mt-2">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{products[item].category}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                <div className="flex flex-row space-x-2">
                  <p className="mt-1">₹{products[item].price}</p>
                  <p className="mt-1 text-sm border-2 px-2">{products[item].size.map((size)=>{return `${size} `})}</p>
                  <p className="mt-1 text-sm border-2 px-2 space-x-1">
                  {products[item].color.includes('Red') &&  <span className="bg-red-500 rounded-full w-3 h-3 inline-block"></span>}
                  {products[item].color.includes('Yellow') &&  <span className="bg-yellow-500 rounded-full w-3 h-3 inline-block"></span>}
                  {products[item].color.includes('Green') &&  <span className="bg-green-500 rounded-full w-3 h-3 inline-block"></span>}
                  {products[item].color.includes('Green') &&  <span className="bg-blue-500 rounded-full w-3 h-3 inline-block"></span>}
                  {products[item].color.includes('Orange') &&  <span className="bg-orange-500 rounded-full w-3 h-3 inline-block"></span>}
                  </p>
                </div>
              </div>
            </Link>
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({category: 'T - Shirt'})
  let tshirts = {}
  for (let item of products) {
      if (item.title in tshirts) {
          if (!tshirts[item.title].color.includes(item.color) && item.availableQty > 0) {
              tshirts[item.title].color.push(item.color)
          }
          if (!tshirts[item.title].size.includes(item.size) && item.availableQty > 0) {
              tshirts[item.title].size.push(item.size)
          }
      }
      else {
          tshirts[item.title] = JSON.parse(JSON.stringify(item))
          if (item.availableQty > 0) {
              tshirts[item.title].color = [item.color]
              tshirts[item.title].size = [item.size]
          }
      }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(tshirts)) }, // will be passed to the page component as props
  }
}
export default Tshirt