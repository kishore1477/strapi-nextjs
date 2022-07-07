import Link from 'next/link'
import React from 'react'
import { FcShop } from 'react-icons/fc';

const Navbar = ({cart}) => {
    return (
  <header className="text-gray-600 body-font md:shadow-lg" style={{userSelect: 'auto'}}>
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" style={{userSelect: 'auto'}}>
    <Link href='/' width ={400}> 
    <div className='flex'>
        <a href="" className='flex font-bold'><FcShop className='text-xl mx-4 md:text-3xl' />MyShop</a> 
    </div>
    </Link>
  {/* <Link href='/h'> <div> <a  className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"> kk</a></div></Link> */}
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center" style={{userSelect: 'auto'}}>
      <Link href='/'><a className="mr-5 hover:text-gray-900">Home</a></Link>
      <Link href='/products'><a className="mr-5 hover:text-gray-900">Products</a></Link>
      <Link href='/about'><a className="mr-5 hover:text-gray-900">About</a></Link>
      <Link href='/contact'><a className="mr-5 hover:text-gray-900">Contact</a></Link>
      <Link href='/checkout'><a className="mr-5 hover:text-gray-900">cart({cart.length})</a></Link>
     
    </nav>
    <button className=" inline-flex items-center bg-blue-400 border-0 px-2 py-1 md:px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" style={{userSelect: 'auto'}}>Login
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
        <path d="M5 12h14M12 5l7 7-7 7" style={{userSelect: 'auto'}} />
      </svg>
    </button>
  </div>
</header>

    )
}

export default Navbar
