import "./App.scss";
import React,{Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import Loading from "./components/loading/Loading";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

// CODE splitting 
// const Home = React.lazy(() => import("./pages/home/Home"));
const UserList = React.lazy(() => import("./pages/userList/UserList"));
const User = React.lazy(() => import("./pages/user/User"));
const NewUser = React.lazy(() => import("./pages/newUser/NewUser"));

const Anime = React.lazy(() => import("./pages/anime/Anime"));
const NewAnime = React.lazy(() => import("./pages/newAnime/NewAnime"));
const Lists = React.lazy(() => import("./pages/lists/Lists"));
const NewList = React.lazy(() => import("./pages/newList/NewList"));
const List = React.lazy(() => import("./pages/list/List"));
const AnimeList = React.lazy(() => import("./pages/animeList/AnimeList"));



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
                    <Suspense fallback={<Loading className="svg"/>}>
                    <Route path="/users">
                        <UserList/>
                    </Route>
                    </Suspense>

                    <Suspense fallback={<Loading className="svg"/>}>
                    <Route path="/user/:userId">
                        <User/>
                    </Route>
                    </Suspense>
                    <Suspense fallback={<Loading className="svg"/>}>
                    <Route path="/newuser">
                        <NewUser/>
                    </Route>
                    </Suspense>
                        {/* Anime routes */}
                        <Suspense fallback={<Loading className="svg"/>}>
                    <Route path="/animes">
                        <AnimeList/>
                    </Route>
                    </Suspense>

                    <Suspense fallback={<Loading className="svg"/>}>
                    <Route path="/anime/:animeId">
                        <Anime/>
                    </Route>
                    </Suspense>

                    <Suspense fallback={<Loading className="svg"/>}>
                    <Route path="/newanime">
                        <NewAnime/>
                    </Route>
                    </Suspense>

                    <Suspense fallback={<Loading className="svg"/>}>
                    <Route path="/lists">
                        <Lists/>
                    </Route>
                    </Suspense>

                    <Suspense fallback={<Loading className="svg"/>}>
                    <Route path="/list/:listId">
                        <List/>
                    </Route>
                    </Suspense>

                    <Suspense fallback={<Loading className="svg"/>}>
                    <Route path="/newlist">
                        <NewList/>
                    </Route>
                    </Suspense>

                    
                    </div>
                    </>}
                
                </Switch>
            
        </Router>
    );
}

export default App;
