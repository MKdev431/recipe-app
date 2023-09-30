import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>Deliciousss</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </Router>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-size: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
    cursor: pointer;
  }
`;

export default App;
