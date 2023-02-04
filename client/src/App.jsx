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
import Loading from './components/loading/Loading';

const Home = React.lazy(() => import("./pages/home/Home"));
const Login = React.lazy(() => import("./pages/login/Login"));
const Watch = React.lazy(() => import("./pages/watch/Watch"));
const Setting = React.lazy(() => import('./pages/setting/Setting'));
const Info = React.lazy(() => import('./pages/info/Info'));

const App = () => {
  const {user} = useContext(AuthContext)
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={!user ? <Register /> : <Home type="" />} />
        </Routes>

        <Routes>
          <Route path="/" element={user ? <Home type="" /> : <Register/>} />
        </Routes>

        <Suspense fallback={<Loading/>}>
        <section>
        <Routes>
          <Route path="/login" element={!user ? <Login /> : <Home type="" />} />
        </Routes>
        </section>
        </Suspense>


        <Suspense fallback={<Loading/>}>
        <Routes>
          

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
        </Suspense>
      </div>
    </Router>

  )
}



export default App;
