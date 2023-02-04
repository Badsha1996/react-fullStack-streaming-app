import "./login.scss"
import logo from "../../assets/logo3.png"
import {useContext, useState} from "react"
import {login} from "../../authContext/apiCalls"
import {AuthContext} from "../../authContext/AuthContext"
import { Link,useNavigate } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {dispatch} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        login({
            email,
            password
        }, dispatch)
        navigate("/")
    }
    return (
        <div className="Login">
            <div className="Login__top">
                <div className="wrapper">
                
                    <img src={logo}
                        className="logo"
                        alt="big logo"/>
                </div>
            </div>

            <div className="Login__bottom">
                <div className="wrapper">
                    <form>
                        <h1>Log In</h1>
                        <input type="email" placeholder="email address"
                            onChange={
                                e => setEmail(e.target.value)
                            }/>
                        <input type="password" placeholder="password"
                            onChange={
                                e => setPassword(e.target.value)
                            }/>
                        <button className="btn-login"
                            onClick={handleLogin}>
                                Log In</button>
                        <span>New here? <Link to={"/register"}><b>Register to access unlimited Anime</b>
                            </Link>
                        </span>
                        <small>
                            The site is protected <b>Learn More</b>
                        </small>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
