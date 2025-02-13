
import {Container,Nav,Navbar} from 'react-bootstrap';
import './App.css'
import bg from './img/bg.png';

function App() {
  return (
    <div className='bar'>
        <Navbar bg="dark" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="#home">쇼핑몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <br />
      <div className='main-bg' style={{ backgroundImage : 'url(' + bg + ')'}}></div>
      <div className="container">
        <div className="row">
        <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width={"80%"}/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
        <div className="col-md-4">
        <img src="https://codingapple1.github.io/shop/shoes2.jpg" width={"80%"}/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
        <div className="col-md-4">
        <img src="https://codingapple1.github.io/shop/shoes3.jpg" width={"80%"}/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
        </div>
      </div> 
      
      </div>
  );
}

export default App
