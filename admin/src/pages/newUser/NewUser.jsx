import { useState } from "react";
import "./newUser.scss";
import { RegisterContext } from "../../context/authContext/AuthContext";
import { useContext } from "react";
import { register } from "../../context/authContext/apiCalls";

export default function NewUser() {
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const {isFetching, dispatch} = useContext(RegisterContext)
  
  
  const handleLogin = (e) =>{
    e.preventDefault();
    const user = {username, email, password, isAdmin}
    register(user, dispatch)
    window.location.href = '/users'
}
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="username" onChange={(e) => setUserName(e.target.value)}/>
        </div>
        
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        
      
      
        <div className="newUserItem checkboxModel">
          
          <input type="checkbox" className="newUserSelect checkbox" name="isAdmin" id="isAdmin" onChange={(e)=>e.target.value==="on" ? setIsAdmin(true):setIsAdmin(false)}/>
          <label >Admin</label>
        </div>
        <button className="newUserButton" onClick={handleLogin}
            disabled={isFetching}>Create</button>
      </form>
    </div>
  );
}
