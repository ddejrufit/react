
import { useState } from 'react';
import './App.css'

function App() {

  let post = '강남 우동 맛집';
  let [글제목, b] = useState(['남자 코드 추천','맛집추천','파이썬독학'])

  // state = 자주변경되는 html 자동으로 재랜더링 해줘서


  


  return (
  <div className='App'>
    <div className='black-nav'>
    <h4>ReactBlog</h4>
    </div>
    <div className='list'></div>
    <h4>{글제목[0]}</h4>
    <p>2월 17일 발행</p><hr />
    <h4>{글제목[1]}</h4>
    <p>2월 17일 발행</p><hr />
    <h4>{글제목[2]}</h4>
    <p>2월 17일 발행</p><hr />
    
  </div>
  );
}

export default App
