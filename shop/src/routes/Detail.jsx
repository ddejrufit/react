import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled  from "styled-components";

let YellowBtn = styled.button`
  background : ${props => props.bg };
  color : ${ props => props.bg == 'blue' ? 'white' : 'black'};
  padding : 10px;
`
let Box  = styled.div`
  background : grey;
  padding : 20px;
`



function Detail(props){



  let [count , setCount] = useState(0)
  let [sale , setSale] = useState(true)
  let [type, setType] = useState('')

  let {id} = useParams();

  useEffect(()=>{
   let a = setTimeout(()=>{ setSale(false)},2000)
    console.log(2)

    return ()=>{
      console.log(1)
      clearTimeout(a)
    }
  },[])


  useEffect(()=>{     
    if (isNaN(type) == true ) {
      alert('그러지마세요.');
      
    }
   
   }, [type])

    // useEffect(()=>{ }) 재랜더링마다 코드 실행
    // useEffect(()=>{ }, []) mount시 1회 코드 실행
    // useEffect(()=>{ }, [a]) a 변경시 코드 실행

    // useEffect(()=>{
    //  return ()=>{

    //  }
    //  }, []) unmount시 1회 코드 실행

 
    const onChangeType =(e)=>{
      setType(e.target.value) 
    }

    return(
      <div className="container">
        <Box>
        <YellowBtn bg="blue" onClick={()=>{setCount(count+1)}}>버튼</YellowBtn>
        <YellowBtn bg="orange">버튼</YellowBtn>
        </Box>{
          sale == true
        ? <div className="alert alert-warning" id="sale">
            2초 이내 구매시 할인
          </div> 
        : null
        }

        <input type="text" value={type} onChange={onChangeType}/>

      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes1.jpg`} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
    )
  }

  export default Detail;