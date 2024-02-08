import React from 'react'

const ServiceCard = ({img,title,desc}) => {
  return (
    <div className='width-[23%] mx-auto rounded-lg flex-col text-wrap overflow-hidden'>
     <img src={img} alt="image" className='h-[50%] w-full rounded-lg' />
      <h1 className='text-4xl text-bold pt-4'>{title}</h1>
      <p className='pt-4'>{desc}</p>
    </div>
  )
}

export default ServiceCard
