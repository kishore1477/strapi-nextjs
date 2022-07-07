import React from 'react'
import Link from 'next/link'
const Products = (props) => {
  console.log(props.products)
  return (
    <div className="container mx-auto">
  <section className="text-gray-600 body-font" style={{userSelect: 'auto'}}>
    <div className="container px-5 py-0 md:py-24 mx-auto" style={{userSelect: 'auto'}}>
      <div className="flex flex-wrap w-full mb-20" style={{userSelect: 'auto'}}>
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0" style={{userSelect: 'auto'}}>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{userSelect: 'auto'}}>Welcome to MyShop {props.name}</h1>
          <div className="h-1 w-20 bg-indigo-500 rounded" style={{userSelect: 'auto'}} />
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500" style={{userSelect: 'auto'}}>Whatever you want to purchase check it below it is most selling and most favourite products as you can see...</p>
      </div>
      <div className="flex flex-wrap -m-4" style={{userSelect: 'auto'}}>

        {props.products.data.map((item)=>{

  return <div key= {item.attributes.slug} className="xl:w-1/4 md:w-1/2 m-4" style={{userSelect: 'auto'}}>
 <div className="bg-gray-100 md:p-3 rounded-lg" style={{userSelect: 'auto'}}>
   <img className=" rounded w-full mb-6" src={item.attributes.image.data && item.attributes.image.data.attributes.name} alt="content" style={{userSelect: 'auto'}} />
   <h3 className="tracking-widest text-indigo-500 text-xl font-medium title-font " style={{userSelect: 'auto'}}>{item.attributes.title}</h3>
   <h2 className="text-lg text-gray-900 font-medium title-font mb-4" style={{userSelect: 'auto'}}>{item.attributes.category}</h2>
   <div className='hidden bg-green-800 bg-blue-800 bg-red-800'></div>
   <button className={"border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none " + `bg-${item.attributes.color}-800`} style={{userSelect: 'auto'}}> </button>



  
   <p className="leading-relaxed text-base" style={{userSelect: 'auto'}}>{item.attributes.description.substr(0,40)}..</p>
  <Link href ={`/product/${item.attributes.slug}`}> 
  <button className=" inline-flex items-center bg-blue-400 border-0 px-2 py-1 md:px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" style={{userSelect: 'auto'}}>Buy Now
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
        <path d="M5 12h14M12 5l7 7-7 7" style={{userSelect: 'auto'}} />
      </svg>
    </button>
    </Link>
 </div>
</div>
        })}
       
      








































      
      </div>
    </div>
  </section>
</div>

  )
}


export async function getServerSideProps(context) {
  let product =  await fetch("http://localhost:1337/api/products?populate=*",{
    method: 'GET', // or 'PUT'
    headers: {
      Authorization: "Bearer 9353495ed75ea05210c002aef468ef9caa1e8aac710ec506e0cd15d082d3abb11d5c20aee5b830f8affd39c8874002cd416a9834d1487692be91563bffe932244d8522b182a4c6ea095dee1a5837b8373c4c825655c78d76bafdc263e1953b3886e41443f34678c2099914c9b2a79ee4048a8871622347282d610288d41565e3"

      // 'Content-Type': 'application/json',
    }})
  let products = await product.json()
  console.log(products)
  return {
    props: {products}, // will be passed to the page component as props
  }
}

export default Products
