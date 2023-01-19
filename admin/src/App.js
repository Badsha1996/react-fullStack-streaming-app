import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.scss";
import Home from "./pages/home/Home";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import Anime from "./pages/anime/Anime";
import NewAnime from "./pages/newAnime/NewAnime";
import Lists from "./pages/lists/Lists";

import NewList from "./pages/newList/NewList";
import List from "./pages/list/List";
import AnimeList from "./pages/animeList/AnimeList";


function App() {
    const {user} = useContext(AuthContext)
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    {user ?  <Redirect to="/" /> : <Login/>} 
                </Route>
                {!user && <>
                    <Route exact path="/">
                        <Login/>
                    </Route>
                </>}
                    {user && <>
                        <Topbar/>
            <div className="container">
                <Sidebar/>
                
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    
                    {/* user routes */}
                    <Route path="/users">
                        <UserList/>
                    </Route>
                    <Route path="/user/:userId">
                        <User/>
                    </Route>
                    <Route path="/newuser">
                        <NewUser/>
                    </Route>

                        {/* Anime routes */}
                    <Route path="/animes">
                        <AnimeList/>
                    </Route>
                    <Route path="/anime/:animeId">
                        <Anime/>
                    </Route>
                    <Route path="/newanime">
                        <NewAnime/>
                    </Route>

                    <Route path="/lists">
                        <Lists/>
                    </Route>
                    <Route path="/list/:listId">
                        <List/>
                    </Route>
                    <Route path="/newlist">
                        <NewList/>
                    </Route>
                    </div>
                    </>}
                
                </Switch>
            
        </Router>
    );
}

export default App;
