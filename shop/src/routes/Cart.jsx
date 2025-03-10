import {Form, Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeName,increase } from "./../store/userSlice.jsx"

function Cart(){


  let state = useSelector((state)=> state)
  let dispatch = useDispatch()
  

    return(
        <div>
          <h6>{state.user.name} {state.user.age}의 장바구니</h6>
          <button onClick={()=>{
            dispatch(increase(1))
            
          }}>버튼</button>
            <Table>
  <thead>
    <tr>
      <th>#</th>
      <th>상품명</th>
      <th>수량</th>
      <th>변경하기</th>
    </tr>
  </thead>
  <tbody>
  {
    state.cart.map(function(a,i){
    return <List state={state} i={i} dispatch={dispatch}/>
    })}

  </tbody>
</Table> 
        </div>
    )
}
import { formToJSON } from 'axios'

function List(props){
  return(
  <tr>
      <td>{props.i + 1}</td>
      <td>{props.state.cart[props.i].name}</td>
      <td>{props.state.cart[props.i].count}</td>
      <td>
        <button onClick={()=>{
          props.dispatch(changeName())
        }} >+</button>
      </td>
    </tr>
  )
}

export default Cart