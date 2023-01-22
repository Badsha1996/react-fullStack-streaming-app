import "./register.scss"
import logo from "../../assets/logo.png"
import {useRef, useState} from "react"
import axios from "axios";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailReference = useRef()

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            await axios.post("auth/register", {username, email, password})

        } catch (error) {
            console.log(error)
        }

    }
    console.log(username)
    return (
        <div className="Register">
            <div className="Register__top">
                <div className="wrapper">
                    <img src={logo}
                        className="logo"
                        alt="big logo"/>
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
                            <input type="email" placeholder="Enter email"
                                ref={emailReference}/>
                            <button className="btn-register"
                                onClick={
                                    () => setEmail(emailReference.current.value)
                            }>Get Started</button>
                        </div>
                    ) : (
                        <div className="input">
                            <input type="text" placeholder="username"
                                onChange={
                                    e => setUsername(e.target.value)
                                }/>
                            <input type="password" placeholder="password"
                                onChange={
                                    e => setPassword(e.target.value)
                                }/>
                            <button className="btn-register"
                                onClick={handleRegister}>sign up</button>
                        </div>

                    )
                } </div>
            </div>
        </div>
    )
}

export default Register
