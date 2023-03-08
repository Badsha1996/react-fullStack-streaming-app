import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import "./navbar.scss"
import logo from "../../assets/logo3.png"
import { useState, useContext } from "react"
import HumburgerMenu from "../humburgerMenu/HumburgerMenu"
import { AuthContext } from "../../authContext/AuthContext"
import { logOut } from "../../authContext/apiCalls"
import {Link } from "react-router-dom"
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Navbar = () => {
  const [scrolledStatus, setScrollStatus] = useState(false)
  const {user, dispatch}= useContext(AuthContext)
  const [search, setSearch] = useState("")
  const [allMovie, setAllMovie] = useState("")
  
  const getMovies = async() =>{
    try{
      const res = await axios.get(import.meta.env.VITE_API + `movies`,{
        Headers:{
          token: "king " + JSON.parse(localStorage.getItem("user")).accessToken

        }
      })

      console.log(res.data)
      return res.data

    }catch(err){
      console.log(err)
    }
    return res.data
  }
 
 
  // const {status, error, data:movies} = useQuery({
  //   queryKey:["movies"],
  //   queryFn:()=>getMovies()
  // })

  // if(status==="loading") return <>Loading...</>
  // if(status==="error") return <>{JSON.stringify(error)}</>
  
  window.onscroll = () => {
    setScrollStatus(window.scrollY === 0 ? false : true)
    return ()=> (window.onscroll = null );
  }

  const handleLogout = () =>{
    logOut(dispatch)
  }

  const handleSearch = () =>{

  }
 
  return (
    <div className={scrolledStatus ? "Navbar activeScroll" : "Navbar"}>
        <div className="container">
            <div className="container__left">
              <HumburgerMenu/>
               <img src={logo} alt="logo" className={scrolledStatus ? "container__left--logo activeScroll" : "container__left--logo"} />
            </div>
{user && (


            <div className="container__right">
              <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search your favourite shows" className={scrolledStatus ? "search-input activeScroll" : "search-input"}/>
                <Search className="icon"/>
                <span>{user.username}</span>
                <Notifications className="icon" onClick={handleSearch}/>
                <img src={user.profilePic} alt="profile pic" />

                <div className="profile">
                     <ArrowDropDown className="icon"/>
                     <div className="options">
                      <span><Link to={"/setting"}>settings</Link></span>
                        <hr />
                        <span onClick={handleLogout}><Link to={"/login"}>logout</Link> </span>
                        {user.isAdmin && (
                        <><hr />
                        <span ><a href="https://all-anime-admin.netlify.app/">Admin</a> </span></>)}

                     </div>
                </div>
               
            </div>
            )}
        </div>
    </div>
  )
}

export default Navbar