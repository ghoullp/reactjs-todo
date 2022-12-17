import React, { useState, useCallback, useEffect, useMemo, useRef } from "react";
import Form from '../common/Form'
import Layout from '../layout';
import Lists from '../common/Lists'
import Footer from '../layout/Footer';

const Homepage = () => {
  const [error, setError] = useState(null)
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const inputEl = useRef(null);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();
      
      if (todo.length < 1) {
        inputEl.current.focus();
        setError("Please add a task description.");
        return false;
      }

      setTodos((oldTodos) => {
        const set = [
          { id: Date.now(), title: todo, done: false },
          ...oldTodos,
        ]
        localStorage.setItem('todos', JSON.stringify(set));
        return set;
      });

      setTodo("");
      setError(null);
    }, [todo]
  );


  const delHandler = useCallback(
    (todoId) => {
      if (window.confirm('Are you sure Delete?')) {
        const updatedTodos = todos.filter((item) => item.id !== todoId)
        setTodos(updatedTodos)
      }
    },[todos]
  );

  const doneHandler = useCallback(
    (todoId) => {
    const index = todos.findIndex((emp) => emp.id === todoId)
    const newTodo = [...todos]

    newTodo[index] = {
      id: todos[index].id,
      title: todos[index].title,
      done: !todos[index].done,
    }

    setTodos(newTodo)
  },[todos]
  );

  const TaskStatus = useMemo(() => {
    const taskLenght = todos.length;
    const donetaskLength = todos.filter((todo) => todo.done).length;
    return {
      taskLenght,
      donetaskLength,
      openLength: taskLenght - donetaskLength,
    };
  }, [todos]);

  return (
    <Layout>
      <Form
        error={error}
        value={todo}
        ref={inputEl}
        submit={submitHandler}
        onChange={setTodo}
      />
      <hr className='border-primary' />
      <Lists todos={todos} delHandler={delHandler} doneHandler={doneHandler} />
      <Footer TaskStatus={TaskStatus}/>
    </Layout>
  )
}

export default Homepage;