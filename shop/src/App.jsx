
import {Container,Nav,Navbar} from 'react-bootstrap';
import './App.css'
import bg from './img/bg.png';
import {useEffect,useState} from "react";
import data from './data.js'
import {Routes, Route, useNavigate, Outlet} from 'react-router-dom'
import Detail  from './routes/Detail.jsx';
import axios from 'axios';
let a = 0;

function App() {

  let [shoes,setShoes] = useState(data)
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
      <Route path='/detail/:id' element={<Detail  shoes={shoes}/> }/>


      <Route path='/about' element={<About />}>
        <Route path='member' element={<>멤버임</>}/>
        <Route path='location' element={<>위치임</> }/>  
      </Route>

      <Route path='/event' element={<Event />}>
        <Route path='one' element={<p>첫 주문시 양배추즙 서비스</p>}/>
        <Route path='two' element={<>생일기념 쿠폰받기</> }/>  
      </Route>

      </Routes>
       
       <button onClick={()=>{
        
        if (a == 0) {
          axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((결과)=>{ 
          let copy=[
            ...shoes,
            ...결과.data
           ]
           setShoes(copy)
           a++;
        })
        }else if (a == 1) {
          axios.get('https://codingapple1.github.io/shop/data3.json')
        .then((결과)=>{ 
          let copy=[
            ...shoes,
            ...결과.data
           ]
           a++;
           setShoes(copy)
        })
        document.querySelector('#asd').innerHTML = ''

        }
        
        

        // json을 array 또는 object로 고치기 어려움
        // fetch('https://codingapple1.github.io/shop/data2.json')
        // .then(결과=>결과.json())
        // .then(data=>{})

        // 둘다 성공하면 ㄱㄱ
        // Promise.all([axios.get('/url1'),axios.get('/url2') ])
        // .then(()=>{

        // })
 

       }} id='asd'>더보기</button>

     


    


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
