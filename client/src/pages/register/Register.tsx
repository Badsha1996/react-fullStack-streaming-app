import "./register.scss"
import logo from "../../assets/logo.png"
import { MutableRefObject, useRef, useState } from "react"

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const emailReference = useRef<HTMLInputElement>(null)
  const passwordReference = useRef<HTMLInputElement>(null)

  
  const handleEmail = () =>{
    setEmail((emailReference as MutableRefObject<HTMLInputElement>).current.value)
    
  }

  const handleRegister = () =>{
    setPassword((passwordReference as MutableRefObject<HTMLInputElement>).current.value)
    
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