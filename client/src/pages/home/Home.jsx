import Footer from "../../components/footer/Footer"
import Hero from "../../components/hero/Hero"
import List from "../../components/list/List"
import Navbar from "../../components/navbar/Navbar"
import News from "../../components/newAnime/NewAnime"
import { useEffect, useState } from "react"
import "./home.scss"
import AnimatedCard from "../../components/animated-card/AnimatedCard"
import axios from "axios"


const Home = ({type}) => {
  const [animeData, setAnimeData] = useState([])
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState("")
  const getAnimes = async(_url) =>{
      try {
          const res  =  await fetch(_url);
          const data =  await res.json();
          setAnimeData(data.data)
      } catch (error) {
          console.log(error);
      }
  }

  const getRandomLists = async() =>{
    try {
        const res = await axios.get(import.meta.env.VITE_API + `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
        {
            headers : {
                token: "king " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        }
        )
        setLists(res.data)
        getAnimes(import.meta.env.VITE_SECRET_NAME)
    } catch (error) {
        console.log(error);
    }
}
  useEffect(()=>{
    getRandomLists()  
  },[type, genre]) 
  return (
    <div className="Home">
        <Navbar/>
        <Hero type={type} setGenre={setGenre}/> 
        {
            lists.map((list, index)=>{
                return(
                    <List key={index}  list={list}/>
                )
            })
        }
        <News animeData={animeData}/>
        <AnimatedCard animeData={animeData}/>
        <Footer/>
    </div>
  )
}

export default Home