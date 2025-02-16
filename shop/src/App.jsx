
import {Container,Nav,Navbar} from 'react-bootstrap';
import './App.css'
import bg from './img/bg.png';
import {useState} from "react";
import data from './data.js'
import {Routes, Route,Link} from 'react-router-dom'

function App() {

  let [shoes] = useState(data)

  return (
    <div className='App'>
      
  



        <Navbar bg="dark" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="#home">쇼핑몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Link to="/">home</Link>
    <Link to="/detail">상세페이지</Link>

      <Routes>
      <Route path='/' element={
        <div> <div className='main-bg' style={{ backgroundImage : 'url(' + bg + ')'}}></div>
      <div className="container">
        <div className="row">
      {
      shoes.map(function(a,i){
        return(
        <Card shoes={shoes} i={i}/>
        )
      })
      }
        </div>
      </div> 
      </div>}/>
      <Route path='/detail' element={
        <div className="container">
        <div className="row">
      
          <Product />
     
    </div>
    </div> 
        }/>
      </Routes>

     


    


      </div>
  );
}

function Product(){
  return(
    <div className="container">
    <div className="row">
      <div className="col-md-6">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">상품명</h4>
        <p>상품설명</p>
        <p>120000원</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>
  </div> 
  )
}


function Card(props){
  return(
    <div className="col-md-4">
    <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width={"80%"}/>
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].price}</p>
    </div>
    
  
  )
}


export default App
