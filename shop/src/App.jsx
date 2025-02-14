
import {Container,Nav,Navbar} from 'react-bootstrap';
import './App.css'
import bg from './img/bg.png';
import {useState} from "react";
import data from './data.js'

function App() {

  let [shoes] = useState(data)

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
      {
      shoes.map(function(a,i){
        return(
        <List shoes={shoes} i={i}/>
        )
      })
      }
        </div>
      </div> 
      


    


      </div>
  );
}


function List(props){
  return(
    <div className="col-md-4">
    <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width={"80%"}/>
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].price}</p>
    </div>
    
  
  )
}


export default App
