import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NavBar from "./NavBar";
import CreatePost from "./pages/CreatePost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Router>
      <NavBar isLogin={isLogin} />
      <Routes>
        <Route exact path={"/"} element={<Home />}></Route>
        <Route path="/create" element={<CreatePost />}></Route>
        <Route
          path="/login"
          element={<Login setIsLogin={setIsLogin} />}
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
