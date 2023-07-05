import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function NavBar({ BasketOnClick, itemsCount }) {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container fluid>
        <Navbar.Brand
          style={{ fontWeight: 700 }}
          className="text-success"
          href="#"
        >
          Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 w-100 justify-content-center my-nav"
            navbarScroll
          >
            <Nav.Link className="text-light mx-2 nav-link" href="#action1">
              Home
            </Nav.Link>
            <Nav.Link className="text-light mx-2 nav-link" href="#action2">
              Catalog
            </Nav.Link>
            <Nav.Link className="text-light mx-2 nav-link" href="#">
              About
            </Nav.Link>
          </Nav>
          <Button
            onClick={BasketOnClick}
            className="btn-success basket-btn mx-4 position-relative"
          >
            <FontAwesomeIcon icon={faShoppingCart} style={{ color: "white" }} />

            <div
              className="items-count bg-danger"
              style={{
                borderRadius: "50%",
                padding: "1px",
                width: "22px",
                height: "22px",
                display: "grid",
                placeItems: "center",
                position: "absolute",
                top: "-10px",
                fontSize: "12px",
                right: "-10px",
              }}
            >
              {itemsCount}
            </div>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
