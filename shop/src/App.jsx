
import {Container,Nav,Navbar} from 'react-bootstrap';
import './App.css'
import bg from './img/bg.png';
import {useState} from "react";
import data from './data.js'
import {Routes, Route,Link, useNavigate, Outlet} from 'react-router-dom'
import Detail  from './routes/Detail.jsx';

function App() {

  let [shoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className='App'>
      
  



        <Navbar bg="dark" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="#home">쇼핑몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
      <Route path='/' element={
        <div>
         <div className='main-bg' style={{ backgroundImage : 'url(' + bg + ')'}}></div>
      <div className="container">
        <div className="row">
      {
      shoes.map(function(a,i){
        return <Card shoes={shoes} i={i}/>
       })}
        </div>
      </div> 
      </div>}/>
      <Route path='/detail' element={<Detail /> }/>

      <Route path='/about' element={<About />}>
        <Route path='member' element={<>멤버임</>}/>
        <Route path='location' element={<>위치임</> }/>  
      </Route>

      <Route path='/event' element={<Event />}>
        <Route path='one' element={<p>첫 주문시 양배추즙 서비스</p>}/>
        <Route path='two' element={<>생일기념 쿠폰받기</> }/>  
      </Route>

      </Routes>

     


    


      </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event(){
  return(
  <div>
    <h4>오늘의 이벤트</h4>
    <Outlet></Outlet>

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
