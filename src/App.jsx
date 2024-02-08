
import './App.css'
import Article from './Pages/Article'
import DeliverySection from './Pages/DeliverySection'
import DetailsSection from './Pages/DetailsSection'
import Footer from './Pages/Footer'
import MenuSection from './Pages/MenuSection'
import ReviewSectoin from './Pages/ReviewSectoin'
import Services from './Pages/Services'
import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'

function App() {
  return (
    <>
 <Nav/>
 <Hero/>
 <MenuSection/>
 <DetailsSection/>
 <Services/>
 <DeliverySection/>
 <ReviewSectoin/>
 <Article/>
 <Footer/>
    </>
  )
}

export default App
