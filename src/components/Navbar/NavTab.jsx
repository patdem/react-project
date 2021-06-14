import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";
import Image from "react-bootstrap/Image";
import shop from "../../img/shop.svg";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import cart from "../../img/cart.svg";
import {useCookies} from "react-cookie";
import {useEffect, useState} from "react";

export const NavTab = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["email"]);
  const [btn, setBtn] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    if (cookies.email === undefined) {
      setBtn("Log in");
    } else {
      setBtn("Log out");
    }

  }, [cookies.email]);

  const handleClick = (e) => {
    e.preventDefault();
    if (btn === "Log in") {
      setLink("/login");
    } else {
      removeCookie("email");
      removeCookie("authenticator");
      removeCookie("csrfToken");
      removeCookie("OAuth2State");
      setLink("/");
    }
  }



  return (
    <Navbar className="navbar-dark bg-dark" expand="lg">
      <Navbar.Brand><Link className="nav-link" to="/"><Image src={shop}/></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll"/>
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{maxHeight: '100px'}}
          navbarScroll
        >
          <Link className="nav-link" to="/product/list">Products</Link>
        </Nav>
        <Button variant="outline-light" style={{marginRight: 10}}><Link to="/cart"><Image src={cart}/></Link></Button>
        <Button variant="outline-light" onClick={handleClick}><Link to={link}>{btn}</Link></Button>
      </Navbar.Collapse>
    </Navbar>
  );
}