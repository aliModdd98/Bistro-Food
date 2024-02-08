import React from 'react'

const ACard = ({img,title,dateA}) => {
  return (
    <div className='w-full bg-white flex-col rounded-lg'>
      <img src={img} alt="img"  className='rounded-lg'/>
     <div className='px-3 py-2 '>
     <p className="text-gray text-[12px] ">{dateA}</p>
      <h1 className='text-1xl '>{title}</h1>
     </div>
    </div>
  )
}

export default ACard
