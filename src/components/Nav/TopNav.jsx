import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const TopNav = () => {
  return (
    <section className="bg-[#474747] w-full h-[55px]">
        <section className="md:py-7  max-container h-[15%] w-full md:flex mx-auto md:justify-between md:items-center">
      <div className="flex text-white items-center justify-between"><span className="flex justify-start items-center px-4"><BsTelephone className="px-2 w-8 h-8"/>(123) 456 789</span><span  className="flex justify-start items-center"><MdOutlineMailOutline className="px-2 w-8 h-8"/>Yammy@website.com</span></div>
      <div className=" sm:flex hidden justify-between items-center">
      <span className="mr-1 w-8 h-8 flex items-center justify-center bg-gray-600 rounded-full"><FaTwitter className="  w-5 h-5 text-white"/></span>
      <span className="mr-1  w-8 h-8 flex items-center justify-center bg-gray-600 rounded-full "><FaFacebookF className="w-5 h-5 text-white"/></span>
      <span className="mr-1  w-8 h-8 flex items-center justify-center bg-gray-600 rounded-full"><FaInstagram className=" w-5 h-5 text-white"/></span>
      <span className="mr-1 w-8 h-8 flex items-center justify-center bg-gray-600 rounded-full"><FaGithub className=" w-5 h-5 text-white "/></span>
      </div>

    </section>
    </section>
  )
}

export default TopNav
