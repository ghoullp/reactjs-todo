import React, { useState } from 'react'
import Form from '../common/Form'
import Layout from '../layout';
import Lists from '../common/Lists'
import Footer from '../layout/Footer';

const Homepage = () => {
  const [error, setError] = useState(null)
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    if (todo.length < 1) {
      setError('Please add a task description.')
      return false
    }

    setTodos([{ id: Date.now(), title: todo, done: false }, ...todos])

    setTodo('')
    setError(null)
  }

  const delHandler = (todoId) => {
    if (window.confirm('Are you sure Delete?')) {
      const updatedTodos = todos.filter((item) => item.id !== todoId)
      setTodos(updatedTodos)
    }
  }

  const doneHandler = (todoId) => {
    const index = todos.findIndex((emp) => emp.id === todoId)
    const newTodo = [...todos]

    newTodo[index] = {
      id: todos[index].id,
      title: todos[index].title,
      done: !todos[index].done,
    }

    setTodos(newTodo)
  }

  return (
    <Layout>
      <Form
        error={error}
        value={todo}
        submit={submitHandler}
        onChange={(e) => setTodo(e.target.value)}
      />
      <hr className='border-primary' />
      <Lists todos={todos} delHandler={delHandler} doneHandler={doneHandler} />
      <Footer
        todos={todos.length}
        doneTask={todos.filter((todo) => todo.done).length}
      />
    </Layout>
  )
}

export default Homepage;