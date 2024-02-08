
import "./MenuStyle.css"
const MenuCard = ({icon, title,description,more}) => {
  return (
    <div className='box w-full px-5 sm:w-auto sm:flex-shrink-0 flex flex-col justify-center items-center border-2 rounded-md border-[#DBDFD0] mb-4 sm:mb-0 sm:mr-4'>
    <div className='w-12 h-12 mt-3 flex justify-center items-center rounded-full bg-[#4747477b]'>
      <img className='w-6 h-6' src={icon} alt="icon" />
    </div>
    <h1 className="text-2xl mt-3">{title}</h1>
    <p className="px-4 mt-4">{description}</p>
    <span className="text-red-400 mt-3 mb-3"><a href="">{more}</a></span>
  </div>
  )
}

export default MenuCard
