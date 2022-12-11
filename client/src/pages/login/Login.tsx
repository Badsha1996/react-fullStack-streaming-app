import "./login.scss"
import logo from "../../assets/logo.png"


const Login = () => {
  return (
    <div className="Login">
        <div className="Login__top">
            <div className="wrapper">
                <img src={logo} className="logo" alt="big logo" />
            </div>   
        </div>

        <div className="Login__bottom">
            <div className="wrapper">
                <form>
                    <h1>Log In</h1>
                    <input type="email" placeholder="email or phone number"/>
                    <input type="password" placeholder="password" />
                    <button className="btn-login">Log In</button>
                    <span>New here ? <b>Register to access unlimited Anime</b></span>
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