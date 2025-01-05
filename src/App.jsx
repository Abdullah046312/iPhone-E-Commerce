import BannerPart from "./components/BannerPart"
import BestSellingProducts from "./components/BestSellingProducts"
import Category from "./components/Category"
import ExploreOurProducts from "./components/ExploreOurProducts"
import FlashSales from "./components/FlashSales"
import Footer from "./components/Footer"
import Header from "./components/Header"
import NavBer from "./components/NavBer"
import NewArrival from "./components/NewArrival"


function App() {
 
  return (
    <>
    <Header/>
    <NavBer/>
    <BannerPart/>
    <FlashSales/>
    <Category/>
    <BestSellingProducts/>
    <ExploreOurProducts/>
    <NewArrival/>
    <Footer/>
   
    </>
  )
}

export default App
