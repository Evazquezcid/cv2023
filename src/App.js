import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Conctact from "./pages/Conctact";
import Footer from "./static.components/Footer";
import Nav from "./static.components/Nav";



function App() {
  return (
    
    <Router>
      <div className="App">
        <Nav></Nav>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>

          <Route path="/AboutMe" element={<AboutMe></AboutMe>}></Route>

          <Route path="/Conctact" element={<Conctact></Conctact>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
   
  );
}

export default App;
