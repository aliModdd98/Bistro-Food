import ACard from "../components/ArticleCard/ACard"
import brger from "./../assets/brgr.png"
import cake from "./../assets/cake.png"
import chicken from "./../assets/chicken.png"
import pizza from "./../assets/pizza.png"
import pta from "./../assets/pta.png"
const Article = () => {
 const articles=[
    {id:0,
    title:"How to prepare the perfect french fries in an air fryer",
dateA:"January 3, 2023",
img:pta},
{id:1,
    title:"How to prepare delicious chicken tenders",
dateA:"January 3, 2023",
img:chicken},
{id:2,
    title:"7 delicious cheesecake recipes you can prepare",
dateA:"January 3, 2023",
img:cake},
{id:3,
    title:"5 great pizza restaurants you should visit this city",
dateA:"January 3, 2023",
img:pizza} ]
    return (
    <div className='w-full h-full px-5 min-h-screen bg-[#F9F9F7]'>
      <section className='max-container mx-auto '>
<div className='flex justify-between pt-10 '>
    <h1 className='text-2xl italic'>Our Blog & Articles</h1>
    <button className="ml-2 px-4 py-2 mb-2 rounded-full font-playfairMedium bg-[#AD343E] text-white hover:text-black">Book A Table </button>
 </div>
 <div className="w-full flex flex-wrap justify-between mt-3 h-full">
  <div className='md:w-1/2 w-full px-2 bg-white grid grid-col-1 flex-col mb-4 items-start h-full rounded-lg' >
    <img src={brger} alt="brger" className="w-full h-full rounded-lg" />
    <div className="px-4 pt-2 flex flex-col items-start" >
      <p className="text-gray text-[12px]">January 3, 2023</p>
      <h1 className="text-2xl pt-4 ">The secret tips & tricks to prepare a perfect burger & pizza for our customers</h1>
      <p className="text-[14px] py-3 ">Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.</p>
    </div>
  </div>
  <div className="md:w-1/2 w-full flex h-full" >
    <div className='grid grid-cols-2 gap-8 px-4' >
      {articles.map((a) => (
        <ACard key={a.id} title={a.title} dateA={a.dateA} img={a.img} />
      ))}
    </div>
  </div>
</div>
      </section>
    </div>
  )
}

export default Article
