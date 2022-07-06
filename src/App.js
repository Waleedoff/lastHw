import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Cards from "./Components/Cards";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Link to={"/About"}>hj<Link/> */}
        {/* <Link to="/About">About</Link>  */}
        <Header />

        <Routes>
          <Route path="/"></Route>
          <Route path="/Cards" element={<Cards/>}></Route>
          <Route path="/About" element={<About/> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
