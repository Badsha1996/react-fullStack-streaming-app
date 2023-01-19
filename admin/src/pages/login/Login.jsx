import { useContext, useState } from "react"
import "./login.scss"
import { AuthContext } from "../../context/authContext/AuthContext";
import { login } from "../../context/authContext/apiCalls";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isFetching, dispatch} = useContext(AuthContext)

    const handleLogin = (e) =>{
        e.preventDefault();
        const user = {email, password}
        try {
           login(user, dispatch)
        } catch (error) {
          console.error(error)
          
        }
    }

   
  return (
    <div className="Login">
        <form className="loginForm">
            <input type="text" placeholder="email" className="loginInput" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="password" className="loginInput" onChange={(e) => setPassword(e.target.value)}/>
            <button className="loginButton" 
            onClick={handleLogin}
            disabled={isFetching}
            >Login</button>
        </form>
    </div>
  )
}

export default Login