import React from 'react'

const Contact = () => {
  return (
    <div  className=' container mx-auto'>
     <section className="text-gray-600 body-font relative" style={{userSelect: 'auto'}}>
  <div className="absolute inset-0 bg-gray-300" style={{userSelect: 'auto'}}>
    <iframe width="100%" height="100%" frameBorder={0} marginHeight={0} marginWidth={0} title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{filter: 'grayscale(1) contrast(1.2) opacity(0.4)', userSelect: 'auto'}} />
  </div>
  <div className="container px-5 py-24 mx-auto flex" style={{userSelect: 'auto'}}>
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md" style={{userSelect: 'auto'}}>
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font" style={{userSelect: 'auto'}}>Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600" style={{userSelect: 'auto'}}>Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      <div className="relative mb-4" style={{userSelect: 'auto'}}>
        <label htmlFor="email" className="leading-7 text-sm text-gray-600" style={{userSelect: 'auto'}}>Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" style={{userSelect: 'auto'}} />
      </div>
      <div className="relative mb-4" style={{userSelect: 'auto'}}>
        <label htmlFor="message" className="leading-7 text-sm text-gray-600" style={{userSelect: 'auto'}}>Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" style={{userSelect: 'auto'}} defaultValue={""} />
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" style={{userSelect: 'auto'}}>Button</button>
      <p className="text-xs text-gray-500 mt-3" style={{userSelect: 'auto'}}>Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
  </div>
</section>

    </div>
  )
}

export default Contact
