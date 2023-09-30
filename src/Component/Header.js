import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Style/Header.css';


function Header()
{
    const Navigate = useNavigate();
    const handleImageClick = () =>
    {
        Navigate('/Component/Concept');
    }
  return (
    <div>
      {/* Navigation Bar*/}
      <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
        <Container fluid>
           <Navbar.Brand id='Brand' onClick={handleImageClick}>Lariat Fine Jewelry</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="basic-navbar-nav ml-auto">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
              <Nav className="justify-content-end navbar">
                <Link className='navbar' id='navbar' to="/Component/Concept" >Concept</Link>
                <NavDropdown title="Catogories" id="navbarScrollingDropdown">
                  <NavDropdown.Item id='List'><Link className='navbr' to="/Component/Gold">Gold</Link></NavDropdown.Item>
                  <NavDropdown.Item id='List'><Link className='navbr' to="/Component/Ring">Ring</Link></NavDropdown.Item>
                  <NavDropdown.Item id='List'><Link className='navbr' to="/Component/ContentPage">Diamond</Link></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Enter Data" id="navbarScrollingDropdown">
                  <NavDropdown.Item id='List'><Link className='navbr' to="/Component/GoldData">Gold</Link></NavDropdown.Item>
                  <NavDropdown.Item id='List'><Link className='navbr' to="/Component/RingData">Ring</Link></NavDropdown.Item>
                  <NavDropdown.Item id='List'><Link className='navbr' to="/Component/DiamondData">Diamond</Link></NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav className="justify-content-end navbar">
              <NavDropdown title="Account" id="navbarScrollingDropdown">
                <NavDropdown.Item id='List'><Link className='navbr' to="/Component/Account_Creation">Create Account</Link></NavDropdown.Item>
                <NavDropdown.Item id='List'><Link className='navbr' to="/Component/Login_Page">Login</Link></NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Nav>
            <Form className="d-flex" id='search-bar'>
              <Form.Control id='form'
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="Marquee">
        <marquee direction="right">
          <p className="mq">Free cotton pouch for each order</p>
        </marquee>
      </div>
    </div>
  );
}
export default Header;