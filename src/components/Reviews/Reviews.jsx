import React from 'react'
import "./ReviewStyle.css"
const ReviewsCard = ({img, city, name, title , desc }) => {
    const containerWidth = 1293; 
    const cardWidth = containerWidth * 0.322; 
    
    
    return (
    <div className=' shadow-lg  flex-col items-center justify-center my-10 rounded-lg bg-[#F9F9F7] w-full px-4 py-4' >
    <h1 className='text-red-800 text-2xl pt-8'>{title}</h1>
    <p className='text-1x py-4'>{desc}</p>
    <hr className='border-1 w-[75%] border-black'/>
    <div className='flex py-6 items-center'>
      <img src={img} alt="img Reviewer" />
      <div className='px-4'>
        <h1 className='text-2xl'>{name}</h1>
        <p>{city}</p>
      </div>
    </div>
  </div>
  )
}

export default ReviewsCard
