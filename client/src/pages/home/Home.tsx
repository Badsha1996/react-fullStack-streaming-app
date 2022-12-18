import Footer from "../../components/footer/Footer"
import Hero from "../../components/hero/Hero"
import List from "../../components/list/List"
import Navbar from "../../components/navbar/Navbar"
import News from "../../components/news/News"
import { useEffect, useState } from "react"
import "./home.scss"

const API_URL = `https://api.jikan.moe/v4/seasons/upcoming`;


const Home = () => {
  const [animeData, setAnimeData] = useState([])
  const getAnimes = async(_url: any) =>{
      try {
          const res  =  await fetch(_url);
          const data =  await res.json();
          console.log(data.data);
          setAnimeData(data.data)
      } catch (error) {
          console.log(error);
      }
  }
  useEffect(()=>{
      getAnimes(API_URL)
  },[]) 
  return (
    <div className="Home">
        <Navbar/>
        <Hero type="movie"/> 
        <List/>
        <News animeData={animeData}/>
        <Footer/>
    </div>
  )
}

export default Home