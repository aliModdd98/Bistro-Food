import logo from "./../assets/logoF.png"
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import f1 from "./../assets/footer1.png"
import f2 from "./../assets/footer2.png"
import f3 from "./../assets/footer3.png"
import f4 from "./../assets/footer4.png"
const Footer = () => {
    const links=[
        "Home","About","Menu","Pages","Blog","Pricing","Contact","Delivery",
     ]
     const gallery=[f1,f2,f3,f4]
     const utility=[
        "Start Here","Styleguide","Password Protected","404 Not Found","Licenses","Changelog","View More"]
    return (
    <section className="w-full text-white bg-[#474747]">
      <div className=" max-container  px-6 pt-12 flex flex-wrap justify-between items-start w-full mx-auto">
<div className="flex justify-between sm:w-4/6 w-full">
<div className="w-2/4 flex-col ">
    <div className="flex justify-start items-center sm:px-10 px-4">
        <img src={logo} alt="logo" className="w-11 h-11" /><span className="text-2xl italic font-playfairMedium pl-4">Bistro Bliss</span>
    </div>
    <p className="sm:px-10 px-4 py-4">In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
    <div className=" flex justify-center items-center">
      <span className=" w-8 h-8 flex mr-3 items-center justify-center bg-[#AD343E] rounded-full"><FaTwitter className="  w-5 h-5 text-white"/></span>
      <span className="mr-3  w-8 h-8 flex items-center justify-center bg-[#AD343E] rounded-full "><FaFacebookF className="w-5 h-5 text-white"/></span>
      <span className="mr-3  w-8 h-8 flex items-center justify-center bg-[#AD343E] rounded-full"><FaInstagram className=" w-5 h-5 text-white"/></span>
      <span className="mr-3 w-8 h-8 flex items-center justify-center bg-[#AD343E] rounded-full"><FaGithub className=" w-5 h-5 text-white "/></span>
      </div>
</div>
<div className="w-1/4 flex-col items-start justify-center pl-4">
<h1 className="text-[18px] pb-4">pages</h1>
<ul className="flex flex-col">{
links.map((e,index)=>(
    <li key={index} className="cursor-pointer hover:text-black">{e}</li>
))
}</ul>
</div>
<div className="w-1/4 flex-col items-start justify-center">
    <h1 className="text-[18px] pb-4">Utility Pages</h1>
    <ul >
        {utility.map((e,index)=>(
            <li key={index} className="cursor-pointer hover:text-black">{e}</li>
        ))}
    </ul>
</div>
</div>
<div className="sm:w-2/6 w-full flex-col items-start justify-center">
    <h1 className="py-4">Follow Us On Instahram</h1>
   <div className="grid grid-cols-2 gap-4">{
    gallery.map((e,index)=>(
        <img key={index} src={e} className="rounded-lg"/>
    ))
}</div>
</div> </div>
<h1 className="text-1xl flex justify-center py-10">Copyright © 2023 Hashtag Developer. All Rights Reserved</h1>
    </section>
  )
}

export default Footer
