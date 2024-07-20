import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import TodoList from "../components/TodoList"
import TodoForm from "../components/TodoForm";
import { Navbar } from "react-bootstrap";
const Others = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
      axios.get("/api/todos/")
        .then((res) => {
          setTodos(res.data)
        }).catch(() => {
          alert("Something went wrong");
        })
    }, [])
  
  return (
    <Container>
              <Navbar bg="light" style={{ marginBottom: "20px" }}>
        <Container>
          <Navbar.Brand href="#">
            Todo App
          </Navbar.Brand>
        </Container>
      </Navbar>
        <TodoForm todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </Container>
  )
}

export default Others