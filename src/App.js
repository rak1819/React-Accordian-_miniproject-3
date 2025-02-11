
import { useState } from 'react';
import './App.css';

function App() {
  const [select,setselect] =useState(null)
  const toggle =(i) =>{
    if(select===i){
      return setselect(null)
    }
    setselect(i)
  }
  return (
    <div className='wrapper'>
      <div className="accordian">
        {data.map((item,i)=>(
          <div className="item">
            <div className="title" onClick={() =>toggle(i)}>
              <h2>{item.question}</h2>
              <span>{select===i?"-":"+"}</span>
            </div>
            <div className={select===i?"show":"content"}>{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

const data = [
  {
    question: 'Question 1',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    question: 'Question 2',
    answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    question: 'Question 3',
    answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    question: 'Question 4',
    answer: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];

