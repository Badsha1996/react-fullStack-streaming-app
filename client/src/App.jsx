import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./App.scss"

import React,{Suspense} from 'react';
import { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { AuthContext } from "./authContext/AuthContext";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

import Watch from "./pages/watch/Watch";
import Setting from './pages/setting/Setting';
import Info from './pages/info/Info';



// const Login = React.lazy(() => import("./pages/login/Login"));
// const Watch = React.lazy(() => import("./pages/watch/Watch"));
// const Setting = React.lazy(() => import('./pages/setting/Setting'));
// const Info = React.lazy(() => import('./pages/info/Info'));

const App = () => {
  const {user} = useContext(AuthContext)
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={user ? <Home type="" /> : <Register/>} />
          <Route path="/register" element={!user ? <Register /> : <Home type="" />} />
          <Route path="/login" element={!user ? <Login /> : <Home type="" />} />

          {
            user && (
              <>
                <Route path="/movies" element={<Home type="movie" />} />
                <Route path="/series" element={<Home type="series" />} />
                <Route path="/watch" element={<Watch />}></Route>
                <Route path="/setting" element={<Setting/>}></Route>
                <Route path="/info" element={<Info/>}></Route>
                
              </>

            )
          }


        </Routes>
      </div>
    </Router>

  )
}



export default App;
