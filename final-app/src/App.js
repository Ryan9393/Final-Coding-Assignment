
import "./App.css";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import About from "./Pages/About";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {


  return (
    <Router>
          <Navbar className="m-1" bg="light" expand="lg">
        <Navbar.Brand href="#home"><h3>NavBar</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
          <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
          <Nav.Link as={Link} to={"/profile"}>Houses</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;




