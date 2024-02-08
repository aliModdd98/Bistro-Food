import React from 'react'
import MenuCard from '../components/Menu/Menu'
import coffe from"./../assets/coffe.png"
import dish from "./../assets/dishes.png"
import drink from "./../assets/drink.png"
import dessert from "./../assets/ice.png"

const MenuSection = () => {
  const menu=[
    {id:0,
    title:"Breakfast",
    desc:"In the new era of technology we look in the future with certainty and pride for our life.",
     more:"Explore Menu",
     icon:coffe},
     {id:1,
        title:"Main Dishes",
        desc:"In the new era of technology we look in the future with certainty and pride for our life.",
         more:"Explore Menu",
         icon:dish},
         {id:2,
            title:"Drinks",
            desc:"In the new era of technology we look in the future with certainty and pride for our life.",
             more:"Explore Menu",
             icon:drink},
             {id:3,
                title:"Desserts",
                desc:"In the new era of technology we look in the future with certainty and pride for our life.",
                 more:"Explore Menu",
                 icon:dessert},
  ]
    return (
    <section className='h-full  '>
        <h1 className='flex justify-center text-[55px] italic my-8 pt-5 text-4xl'>Browse Our Menu</h1>
        <section className='max-container mt-5 px-5 flex flex-wrap justify-between  items-center w-full mx-auto'>
  {menu.map((e) => (
    <div key={e.id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2'>
      <MenuCard icon={e.icon} title={e.title} description={e.desc} more={e.more}/>
    </div>
  ))}
</section>

    
    </section>
  )
}

export default MenuSection
