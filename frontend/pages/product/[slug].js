import React from 'react'
import { useRouter } from 'next/router'
const Slug = ({product, addToCart}) => {
  console.log("This is slug product1")
  console.log(product)
  let pro= product.data[0]
  // let p =[];
  // for (let i = 0; i < pro.length; i++) {
  //   console.log("This is element")
  //   const element = pro[i]
  //   p = p.push(element)
  //   console.log(p.attributes.title)
  //   console.log(element.attributes.title)
    
  // }
  // console.log(product.data[0].attributes.title)
  console.log("this is p1")
  // console.log(p.title)
  console.log("this is p2")
  const router = useRouter()
  const { slug } = router.query
  return (
  <div>
  <section className="text-gray-600 body-font overflow-hidden " style={{userSelect: 'auto'}}>
    <div className="container px-5 py-0 md:py-24 mx-auto" style={{userSelect: 'auto'}}>
      <div className="lg:w-4/5 mx-auto flex flex-wrap" style={{userSelect: 'auto'}}>
        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src='https://dummyimage.com/400X400' style={{userSelect: 'auto'}} />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style={{userSelect: 'auto'}}>
          <h2 className="text-sm title-font text-gray-500 tracking-widest" style={{userSelect: 'auto'}}>myShop</h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1" style={{userSelect: 'auto'}}>
        {pro.attributes.title}
          </h1>
          <div className="flex mb-4" style={{userSelect: 'auto'}}>
            <span className="flex items-center" style={{userSelect: 'auto'}}>
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" style={{userSelect: 'auto'}} />
              </svg>
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" style={{userSelect: 'auto'}} />
              </svg>
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" style={{userSelect: 'auto'}} />
              </svg>
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" style={{userSelect: 'auto'}} />
              </svg>
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" style={{userSelect: 'auto'}} />
              </svg>
              <span className="text-gray-600 ml-3" style={{userSelect: 'auto'}}>4 Reviews</span>
            </span>
            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s" style={{userSelect: 'auto'}}>
              <a className="text-gray-500" style={{userSelect: 'auto'}}>
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" style={{userSelect: 'auto'}} />
                </svg>
              </a>
              <a className="text-gray-500" style={{userSelect: 'auto'}}>
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" style={{userSelect: 'auto'}} />
                </svg>
              </a>
              <a className="text-gray-500" style={{userSelect: 'auto'}}>
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" style={{userSelect: 'auto'}} />
                </svg>
              </a>
            </span>
          </div>
          <p className="leading-relaxed" style={{userSelect: 'auto'}}>{pro.attributes.description}</p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5" style={{userSelect: 'auto'}}>
            <div className="flex" style={{userSelect: 'auto'}}>
              <span className="mr-3" style={{userSelect: 'auto'}}>Color</span>
              <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" style={{userSelect: 'auto'}} />
              <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" style={{userSelect: 'auto'}} />
              <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" style={{userSelect: 'auto'}} />
            </div>
            <div className="flex ml-6 items-center" style={{userSelect: 'auto'}}>
              <span className="mr-3" style={{userSelect: 'auto'}}>Size</span>
              <div className="relative" style={{userSelect: 'auto'}}>
                <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10" style={{userSelect: 'auto'}}>
                  <option style={{userSelect: 'auto'}}>SM</option>
                  <option style={{userSelect: 'auto'}}>M</option>
                  <option style={{userSelect: 'auto'}}>L</option>
                  <option style={{userSelect: 'auto'}}>XL</option>
                </select>
                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center" style={{userSelect: 'auto'}}>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                    <path d="M6 9l6 6 6-6" style={{userSelect: 'auto'}} />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="flex" style={{userSelect: 'auto'}}>
            <span className="title-font font-medium text-2xl text-gray-900" style={{userSelect: 'auto'}}>Rs.  {pro.attributes.price}.00</span>
            <div className='flex ml-2'>

            
            <button onClick={()=>{router.push('/checkout')}} className="flex ml-auto text-white bg-indigo-500 border-0  md:py-1 text-center md:px-3 mx-2 px-2 focus:outline-none hover:bg-indigo-600 rounded" style={{userSelect: 'auto'}}>Checkout</button>
            <button onClick={()=>addToCart(pro.attributes.slug,1, pro.attributes.price)} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 mx-2 px-2 focus:outline-none hover:bg-indigo-600 rounded" style={{userSelect: 'auto'}}>Add to Cart</button>
            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4" style={{userSelect: 'auto'}}>
         
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24" style={{userSelect: 'auto'}}>
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" style={{userSelect: 'auto'}} />
              </svg>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}





export async function getServerSideProps(context) {
  let {slug} = context.query
  let products =  await fetch(`http://localhost:1337/api/products?filters[slug]=${slug}`,{
    method: 'GET', // or 'PUT'
    headers: {
      Authorization: "Bearer 9353495ed75ea05210c002aef468ef9caa1e8aac710ec506e0cd15d082d3abb11d5c20aee5b830f8affd39c8874002cd416a9834d1487692be91563bffe932244d8522b182a4c6ea095dee1a5837b8373c4c825655c78d76bafdc263e1953b3886e41443f34678c2099914c9b2a79ee4048a8871622347282d610288d41565e3"

      // 'Content-Type': 'application/json',
    }})
  let product = await products.json()
  console.log("Products in slug")
  // console.log(product.data.attributes.image.name)
  console.log(product)
  return {
    props: {product}, // will be passed to the page component as props
  }
}

export default Slug
