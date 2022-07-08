import Navbar from '../components/Navbar'
import '../styles/globals.css'
import react, {useState} from 'react'
import Footer from '../components/footer';
function MyApp({ Component, pageProps }) {
  const [cart, setcart] = useState([]);
  const [keyreload, setkeyreload] = useState();
 
  console.log()

  const addToCart = (item, qty,price)=>{
    console.log("This is item", item)
    console.log("Add to cart")
    console.log("Type of item is:", typeof(item))
    let  b = [2]
    b.push(item)
    console.log("b is", b)
    let newCart = cart
    for (let index = 0; index < qty; index++) {
      newCart.push([item,qty,price])
    }
    setcart(newCart)
    setkeyreload(Math.random())
    console.log("This is item after setcart", cart)
  }
  const clearCart =()=>{
    setcart([])
  }
  const removeFromCart =()=>{
    let newCart = cart
    let index = newCart.indexOf(item)
    newCart.splice(index)
    setcart(newCart)
  }
  return <>
  <Navbar key ={keyreload} cart= {cart} />
  <Component cart= {cart}  removeFromCart ={removeFromCart}clearCart={clearCart}  addToCart = {addToCart} {...pageProps} />
  <Footer/>
  </>
  
}

export default MyApp
