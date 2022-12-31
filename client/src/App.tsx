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

const App = () => {
  const user = true;
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
                <Route path="/movies" element={<Home type="movies" />} />
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
