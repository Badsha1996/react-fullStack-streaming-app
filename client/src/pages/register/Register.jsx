import "./register.scss"
import logo from "../../assets/logo.png"
import { useRef, useState} from "react"
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () =>{
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef("")

    const handleRegister = async () => {

        try {
            await axios.post(import.meta.env.VITE_API + "auth/register", {username, email, password})

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className="Register">
            <div className="Register__top">
                <div className="wrapper">
                    <Link to={"/"}>
                    <img src={logo}
                        className="logo"
                        alt="big logo"/></Link>
                    <Link to={"/login"}>
                        <button className="btn-login">Log In</button>
                    </Link>
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
                            <input type="email" placeholder="Enter email"
                                 ref={emailRef}/>
                            <button className="btn-register"
                                onClick={(e)=>{setEmail(emailRef.current.value)}}
                            >Get Started</button>
                        </div>
                    ) : (
                        <div className="input">
        
                            <input type="text" placeholder="Enter Username" 
                                onChange={
                                    e => setUsername(e.target.value)
                                }/>
                            <input type="password" placeholder="password"
                                onChange={
                                    e => setPassword(e.target.value)
                                }/>
                                <Link to={"/login"}><button className="btn-register" onClick={handleRegister}>sign up</button></Link>
                        </div>
                    )
                } </div>
            </div>
        </div>
    )
}

export default Register
