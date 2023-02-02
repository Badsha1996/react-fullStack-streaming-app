import { useState } from "react";
import "./newUser.scss";
import {useHistory} from "react-router-dom"
import axios from "axios";

export default function NewUser() {
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(null);
  const history = useHistory()
  
  const handleRegister = async(e) =>{
    e.preventDefault();
    try {
      await axios.post(process.env.REACT_APP_API + "/auth/register", {username,email,password,isAdmin})
      history.push('/users')
  } catch (error) {
      console.log(error)
  }
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
          
          <input type="checkbox" className="newUserSelect checkbox" name="isAdmin" id="isAdmin" onChange={(e)=>{e.target.value==="on" ? setIsAdmin(true):setIsAdmin(false)}}/>
          <label >Admin</label>
        </div>
        <button className="newUserButton" onClick={handleRegister}
            >Create</button>
      </form>
    </div>
  );
}
