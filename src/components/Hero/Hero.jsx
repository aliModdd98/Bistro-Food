import React from 'react'
import bgImage from "./../../assets/hero.png"
const Hero = () => {
  return (
    <section className='w-full flex relative bg-fluid bg-center bg-no-repeat bg-fixed min-h-screen' style={{ backgroundImage: `url(${bgImage})` }}>
      <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center sm:mt-4 w-full'>
        <h1 className='text-playfair font-playfairMedium italic text-7xl'>
        Best food for
</h1>
        <h1 className='text-playfair font-playfairMedium  text-7xl'>your taste</h1>
        <p className='mt-4'>Discover delectable cuisine and unforgettable moments </p>
        <p className='mb-4'>in our welcoming, culinary haven.</p>
        <div className="flex justify-center">
        <button className="ml-2   px-4 py-2 mb-2 rounded-full font-playfairMedium bg-red-700 hover:text-white">Book A Table </button>
        <button className="ml-2  border-2 border-black px-3 py-1 mb-2 rounded-full font-playfairMedium hover:bg-red-700 hover:text-white">Book A Table </button>

        </div>
      </div>
    </section>
  )
}

export default Hero
