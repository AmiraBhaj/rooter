import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Home from "./Components/Home";
import Trailer from "./Components/Trailer";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/search"}>
              Movies
            </Nav.Link>
            <Nav.Link href="Login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <h1>Welcome to our website </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/trailer/:id" element={<Trailer />} />
      </Routes>
    </div>
  );
}

export default App;
