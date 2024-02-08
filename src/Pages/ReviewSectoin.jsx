import React from 'react'
import ReviewsCard from '../components/Reviews/Reviews'
import p1 from "./../assets/p1.png"
import p2 from "./../assets/p2.png"
import p3 from "./../assets/p3.png"
const ReviewSectoin = () => {
  const reviews=[
    {
        id:0,
        title:"“The best restaurant”",
        desc:"Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
        img:p1,
        name:"Sophire Robson",
        city:"Los Angeles, CA"
    },
    {
        id:1,
        title:"“Simply delicious”",
        desc:"Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
        img:p2,
        name:"Matt Cannon",
        city:"San Diego, CA"
    },
    {
        id:2,
        title:"“One of a kind restaurant”",
        desc:"The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
        img:p3,
        name:"Andy Smith",
        city:"San Francisco, CA"
    }
  ]
    return (
    <div className='w-full h-full flex-col px-5 mx-auto'>
        <h1 className='my-4 text-3xl italic flex  justify-center'>What Our Customers Say</h1>
    <section className='max-container mt-5 flex flex-wrap justify-between items-center w-full mx-auto'>
        {reviews.map((rev)=>(
 <div key={rev.id} className='boxCard w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 px-2 mb-4'>
 <ReviewsCard
   img={rev.img}
   title={rev.title}
   desc={rev.desc}
   name={rev.name}
   city={rev.city}
 />
</div>
        ))
             
        }
    </section>
    </div>
  )
}

export default ReviewSectoin
