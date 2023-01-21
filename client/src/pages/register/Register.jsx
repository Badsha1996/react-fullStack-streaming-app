import "./register.scss"
import logo from "../../assets/logo.png"
import {useRef, useState } from "react"
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const emailReference = useRef(null)
  const passwordReference = useRef(null)
  const usernameReference = useRef(null)
  
  const handleEmail = () =>{
    setEmail(emailReference.current.value )
  }

  const handleRegister = async(e) =>{
    e.preventDefault()
    setUsername(usernameReference.current.value)

    setPassword(passwordReference.current.value)
    try {
        await axios.post("auth/register", {email,username,password})
        window.location.href = "/login"
    } catch (error) {
        console.log(error)
    }
    
  }
  return (
    <div className="Register">
        <div className="Register__top">
            <div className="wrapper">
                <img src={logo} className="logo" alt="big logo" />
                <button className="btn-login">Log In</button>
            </div>   
        </div>

        <div className="Register__bottom">
            <div className="wrapper">
                <h1>Anime Movies, series and much more !</h1>
                <h2>Watch anytime, anywhere without Ads</h2>
                <p>
                    Register to watch unlimited Animes
                </p>
                {
                    !email ? (
                        <div className="input">
                            <input type="email" placeholder="Enter email" ref={emailReference}/>
                            <button className="btn-register" onClick={handleEmail}>Get Started</button>
                        </div>
                    ) : (
                        <form className="input">
                           <input type="text" placeholder="username" ref={usernameReference}/>
                            <input type="password" placeholder="password" ref={passwordReference}/>
                            <button className="btn-register" onClick={handleRegister}>sign up</button>
                        </form>
                    )
                }
               
            </div> 
        </div>
    </div>
  )
}

export default Register