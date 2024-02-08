import food from "./../../assets/food.png"
import { LuPhone } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import "./DetailStyle.css"
const Details = () => {
 const listServ=[
    {id:0,
    name:"(414) 857 - 0107",
icon:<LuPhone className="w-7 h-7 pr-3"/>}, {id:1,
    name:"happytummy@restaurant.com",
icon:<MdOutlineMailOutline className="w-7 h-7 pr-3"/>}, {id:2,
    name:"837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles",
icon:<MdOutlineLocationOn className="w-7 h-7 pr-3"/>}
 ]
    return (
        <div className='max-container mx-auto flex justify-between items-center flex-wrap'>
        <div className='w-full md:w-1/2 md:px-8 sm:my-6 my-10 relative'>
          <img src={food} alt="food" className="w-full h-full px-8 py-8" />
          <div className="card rounded-lg px-2 my-4 bg-[#474747] text-white absolute sm:top-[70%] top-[60%] right-0">
            <h1 className="pl-8 sm:my-6 my-4 text-[24px]">Come and visit us</h1>
            <ul className="pl-4 sm:my-4 my-2 text-wrap overflow-hidden">
              {listServ.map((e) => (
                <li className="md:flex  justify-start items-start text-wrap" key={e.id}>
                  <span className="w-8 h-8">{e.icon}</span>
                  <span className="text-[14px]">{e.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='w-full md:w-1/2 md:ml-auto px-5'>
          <h1 className="text-5xl pt-12 mt-4 font-playfairMedium mb-6">We provide healthy food <br /> for your family.</h1>
          <p className="text-2xl mb-6">Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in the city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
          <p className="text-1xl mb-6">At Place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
          <button className="ml-2 border-2 border-black px-3 py-1 mb-2 rounded-full font-playfairMedium hover:bg-red-700 hover:text-white">More About Us</button>
        </div>
      </div>
  )
}

export default Details
