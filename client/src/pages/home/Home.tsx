import Footer from "../../components/footer/Footer"
import Hero from "../../components/hero/Hero"
import List from "../../components/list/List"
import Navbar from "../../components/navbar/Navbar"
import News from "../../components/news/News"
import { useEffect, useState } from "react"
import "./home.scss"
import AnimatedCard from "../../components/animated-card/AnimatedCard"
import axios from "axios"


const Home = ({type} : {type: string}) => {
  const [animeData, setAnimeData] = useState([])
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState("")
  const getAnimes = async(_url: any) =>{
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
        const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
        {
            headers : {
                token : "king eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTY5NzVjOTY2MTM4MDQ1NDgyYTYyMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzA1NjQ4MywiZXhwIjoxNjczMzE1NjgzfQ.mBBIBUQqr0hx6p9dKFhC45jbVD2x320D0fI8OdPXyw0"
            }
        }
        )
        setLists(res.data)
        getAnimes(process.env.REACT_APP_SECRET_NAME)
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
        <Hero type={type}/> 
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