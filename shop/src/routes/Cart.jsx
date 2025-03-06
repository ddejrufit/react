import {Table} from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Cart(){


  let listData = useSelector((state)=>{ return state})
  console.log(listData.user[0])
  

    return(
        <div>
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
    listData.user.map(function(a,i){
    return <List listData={listData} i={i}/>
    })}

  </tbody>
</Table> 
        </div>
    )
}

function List(props){
  return(
  <tr>
      <td>{props.listData.user[props.i].id}</td>
      <td>{props.listData.user[props.i].name}</td>
      <td>{props.listData.user[props.i].count}</td>
      <td>0</td>
    </tr>
  )
}

export default Cart