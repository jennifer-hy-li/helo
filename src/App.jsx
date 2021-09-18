// The four user inputs:
// 1. The users name
// 2. The start time and end time of their day (amount of time spent working)
// ** #1 and #2 are only inputed once 
// 2. The activity 
// 3. The amount of time (eg. 15 mins, 30 mins, 45 mins, 60 mins, etc)
// 4. The time of day (9:00am, 10:00am, etc)

import React, { useState } from 'react'
import styled from 'styled-components'
import './App.css';

const AppContainer = styled.div`
  margin: 40vh 30vw;
`

const TodoItemContainer = styled.div`
  &:hover > p{
    text-decoration: line-through;
  }
`

function TodoItem(props) {
  return(
    <TodoItemContainer>
      <p>{props.name}</p>

    </TodoItemContainer>
  )
}

function App() {
  const [todos, setTodos] = useState(["finish this workshop", "be able to check things off"])//inside usestate are the initial params
  return (
    <main>
      <h1>todos</h1>
      {todos.map((item, i)=> <TodoItem 
        key={i}
        name={item}
      />)}
      React⚛️ + Vite⚡ + Replit🌀
    </main>
  );
}

export default App;

