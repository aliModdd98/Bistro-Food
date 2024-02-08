import React from 'react'
import ServiceCard from '../components/ServiceCard/ServiceCard'
import img1 from "./../assets/img1.png"
import img2 from "./../assets/img2.png"
import img3 from "./../assets/img3.png"
import img4 from "./../assets/img4.png"
const Services = () => {
    const services=[
        {id:0,
        img:img1,
        title:"Caterings",
        desc:"In the new era of technology we look in the future with certainty for life."
    }, {id:1,
            img:img2,
            title:"Birthdays",
            desc:"In the new era of technology we look in the future with certainty for life."
        }, 
        {id:2,
                img:img3,
                title:"Weddings",
                desc:"In the new era of technology we look in the future with certainty for life."
            },
     {id:3,
        img:img4,
        title:"Events",
       desc:"In the new era of technology we look in the future with certainty for life."}
    ]
    return (
    <section className='mt-8 max-container mx-auto px-5'>
        <h1 className='text-4xl pt-8 flex justify-center mt-8'>We also offer unique services for your events</h1>
     <div className='max-container mt-5  flex flex-wrap justify-between  items-center w-full mx-auto'>
     {services.map((e)=>(
        <ServiceCard key={e.id} img={e.img} title={e.title} desc={e.desc}/>
      ))}
     </div>
    </section>
  )
}

export default Services
