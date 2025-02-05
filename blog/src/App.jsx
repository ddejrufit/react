
import { useState } from 'react';
import './App.css'

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천','맛집추천','파이썬독학'])

  let [추천수, 개추] = useState(0);

  // state = 자주변경되는 html 자동으로 재랜더링 해줘서




  return (
  <div className='App'>
    <div className='black-nav'>
    <h4>ReactBlog</h4>
    </div>

      <button onClick={()=>{
        let abc = [...글제목]
        abc.sort()
        글제목변경(abc)
      }}>가나다순정렬</button>

      <button onClick={()=>{

        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>글수정</button>
    <div className='list'>
    <h4>{글제목[0]} <span onClick={()=>{ 개추(추천수 + 1) }}>👍</span> {추천수} </h4>
    <p>2월 17일 발행</p>
    </div>
    <div className='list'>
    <h4>{글제목[1]}</h4>
    <p>2월 17일 발행</p>
    </div>
    <div className='list'>
    <h4>{글제목[2]}</h4>
    <p>2월 17일 발행</p>
    </div>
    
  </div>
  );
}

export default App
