import chef from "./../../assets/chef.png"
import food1 from "./../../assets/food1.png"
import food2 from "./../../assets/food2.png"
import { GoClock } from "react-icons/go";
import { BiSolidOffer } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
const Delivery = () => {
 const delivery=[
    {id:0,
    serv:"Delivery within 30 minutes",
icon:<GoClock className="w-5 h-5 text-white"/>},
{id:1,
    serv:"Best Offer & Prices",
icon:<BiSolidOffer className="w-5 h-5 text-white"/>},
{id:2,
    serv:"Online Services Available",
icon:<FiShoppingCart className="w-5 h-5 text-white"/>},

 ]
    return (
    <div className='px-5 max-container mx-auto flex flex-wrap justify-between items-center py-12'>
    <div className="flex md:w-3/5 w-full">
    <div className="w-2/3">
        <img src={chef} alt="chef" className="px-3" />
      </div>
      <div className="w-1/3 flex-col justify-center items-center mt-20 pt-20">
        <img src={food1} alt="food1"  />
        <br/>
        <img src={food2} alt="food2" />
      </div>
    </div>
      <div className="md:w-2/5 w-full flex-col px-4 py-3">
<h1 className="text-5xl italic">Fastest Food Delivery in City</h1>
<p  className="py-4">
Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop.</p>
     <ul>{
        delivery.map((e)=>(
            <li className="flex justify-start items-center pb-2 " key={e.id}><span className="w-7 h-7 flex justify-center items-center bg-red-800 rounded-full mr-2">{e.icon}</span><span>{e.serv}</span></li>
        ))
}
</ul>
      </div>
    </div>
  )
}

export default Delivery
