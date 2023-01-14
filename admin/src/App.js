import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.scss";
import Home from "./pages/home/Home";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/animeList/AnimeList";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import Anime from "./pages/anime/Anime";
import NewAnime from "./pages/newAnime/NewAnime";


function App() {
    const {user} = useContext(AuthContext)
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    {user ? <Redirect to="/"/> : <Login/>} 
                </Route>
                    {user && <>
                        <Topbar/>
            <div className="container">
                <Sidebar/>
                
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    
                    <Route path="/users">
                        <UserList/>
                    </Route>
                    <Route path="/user/:userId">
                        <User/>
                    </Route>
                    <Route path="/newUser">
                        <NewUser/>
                    </Route>
                    <Route path="/movies">
                        <ProductList/>
                    </Route>
                    <Route path="/product/:productId">
                        <Anime/>
                    </Route>
                    <Route path="/newproduct">
                        <NewAnime/>
                    </Route>
                    </div>
                    </>}
            
                </Switch>
            
        </Router>
    );
}

export default App;
