import { useContext } from "react";
import "./App.scss"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {
  const {user} = useContext(AuthContext)
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={user ? <Home type="" /> : <Register />} />
          <Route path="/register" element={!user ? <Register /> : <Home type="" />} />
          <Route path="/login" element={!user ? <Login /> : <Home type="" />} />

          {
            user && (
              <>
                <Route path="/movies" element={<Home type="movie" />} />
                <Route path="/series" element={<Home type="series" />} />
                <Route path="/watch" element={<Watch />} />
              </>

            )
          }


        </Routes>
      </div>
    </Router>

  )
}



export default App;
