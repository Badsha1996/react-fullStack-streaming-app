import Footer from "../../components/footer/Footer"
import Hero from "../../components/hero/Hero"
import List from "../../components/list/List"
import Navbar from "../../components/navbar/Navbar"
import News from "../../components/news/News"
import "./home.scss"

const Home = () => {
  return (
    <div className="Home">
        <Navbar/>
        <Hero type="movie"/> 
        <List/>
        <News/>
        <Footer/>
    </div>
  )
}

export default Home