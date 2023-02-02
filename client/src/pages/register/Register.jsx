import "./register.scss"
import logo from "../../assets/logo.png"
import {  useState} from "react"
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () =>{
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    let navigate = useNavigate()
    
    const handleRegister = async () => {
        if (username===null || password===null || email===null){
            console.log("wrog")
            return `<p>Please Enter correct value</p>`
        }else{
            try {
            await axios.post(import.meta.env.VITE_API + "auth/register", {username, email, password})
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
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
                    
                        <div className="input">
                            <input type="email" placeholder="Enter email"
                                 onChange={
                                    e => setEmail(e.target.value)
                                }/> 
                            <input type="text" placeholder="Enter Username" 
                                onChange={
                                    e => setUsername(e.target.value)
                                }/>
                            <input type="password" placeholder="password"
                                onChange={
                                    e => setPassword(e.target.value)
                                }/>
                                
                            <button className="btn-register" onClick={handleRegister}>sign up</button>
                            
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
