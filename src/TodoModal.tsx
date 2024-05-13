import React from 'react'
import { Button, Modal } from 'react-bootstrap'

type Todo = {
  text: string
  isChecked: boolean
}

type TodoModalProps = {
  show: boolean
  todo: Todo | null
  handelClose: () => void
}

const TodoModal : React.FC<TodoModalProps> = ({show, todo, handelClose}) => {
  return (
    <div>
      <Modal show={show} onHide={handelClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Todo 상세 정보</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{todo?.text}</p>
        </Modal.Body>
      </Modal>
    </div>
  )
}


export default TodoModal