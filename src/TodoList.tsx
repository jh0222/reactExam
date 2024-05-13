import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import TodoModal from './TodoModal';

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
}

const TodoList : React.FC = () => {
  const title: string= "오늘 할일"
  const [todos, setTodos] = useState<Todo[]>([{id: 1, text: '할일', isChecked: false}])
  const [newTodo, setNewTodo] = useState<string>('')
  const [showDetail, setShowDetail] = useState<boolean>(false)
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null)
  
  const handleChecked = (itemId: number) => {
    setTodos((prevItems) => 
      prevItems.map(item => {
        if (item.id === itemId) {
          return {...item, isChecked:!item.isChecked }
        }
        return item
      })
    )
  }

  const addTodo = () => {
    if(newTodo.trim() !== '') {
       setTodos([...todos, {id: Date.now(), text: newTodo, isChecked: false}])
       setNewTodo('')
    }
  }

  const removeTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const handleTodoClick = (todo: Todo) => {
    setShowDetail(true)
    setSelectedTodo(todo)
  }

  const handleCloseDetail = () => {
    setShowDetail(false)
    setSelectedTodo(null)
  }

  return ( 
    <div className='container'>
      <h1>{title}</h1>
      <p></p>
      <div style={{marginBottom: '10px'}}>
        <input 
          type='text' 
          placeholder='할일 입력'
          style={{marginRight: '10px', writingMode: 'horizontal-tb'}}  
          onChange={(e) => {setNewTodo(e.target.value)}}
        />
        <Button variant='success' onClick={() => {addTodo()}}>추가</Button>
      </div>
      <div className='board'>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <input type='checkbox' checked={todo.isChecked} onChange={() => handleChecked(todo.id)} />&nbsp;
              {
                todo.isChecked?
                  <del>{todo.text}</del> :
                  <span onClick={() => handleTodoClick(todo)}>{todo.text}</span>
              }
              <button
                onClick={() => {
                  removeTodo(todo.id)
                }}
                className='del_button'
              >삭제</button>
            </li>
          ))}
        </ul>
      </div>
      <TodoModal show={showDetail} todo={selectedTodo} handelClose={handleCloseDetail}></TodoModal>
    </div>
  )
}

export default TodoList