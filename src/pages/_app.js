import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Script from 'next/script'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const [user, setuser] = useState({value: null})
  const [key, setKey] = useState(0)
  const logout = () => {
    localStorage.clear()
    window.location = '/'
  }
  const calSubt = (x) => {
    let subt = 0;
    let keys = Object.keys(x)
    for (let i = 0; i < keys.length; i++) {
      subt += x[keys[i]].price * x[keys[i]].qty
    }
    setSubTotal(subt)
  }
  const saveCart = (myCart) => {
    localStorage.setItem('cart', JSON.stringify(myCart))
    calSubt(myCart)
  }
  useEffect(() => {
    try {
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')))
        calSubt(JSON.parse(localStorage.getItem('cart')))
      }
    } catch (error) {
      console.log(error)
      localStorage.clear()
      window.location.reload();
    }
    const token = localStorage.getItem('token')
    if(token){
      setuser({value: token})
      setKey(Math.random())
    }
  }, [])
  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    }
    else {
      newCart[itemCode] = { qty, price, name, size, variant }
    }
    setCart(newCart)
    saveCart(newCart)
  }
  const removeFromCart = async (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = await cart[itemCode].qty - qty;
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
  }
  const clearCart = () => {
    setCart({})
    saveCart({})
  }
  const process = async (itemCode, qty, price, name, size, variant) => {
    let newCart = { itemCode: { qty: 1, price, name, size, variant } };
    setCart(newCart)
    saveCart(newCart)
    window.location = '/checkout'
  }
  return <>
    <Script src="https://kit.fontawesome.com/b4c877daa2.js" crossorigin="anonymous" />
    <Navbar logout={logout} cart={cart} key={key} user={user} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
    <Component logout={logout} cart={cart} addToCart={addToCart} buyNow={process} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    <Footer />
  </>
}
