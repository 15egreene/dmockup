import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import axios from "axios";
import {Routes, Route} from 'react-router-dom'
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm";
import Home from "./Pages/Home";
import Others from "./Pages/Others";

function App() {
  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   axios.get("/api/todos/")
  //     .then((res) => {
  //       setTodos(res.data)
  //     }).catch(() => {
  //       alert("Something went wrong");
  //     })
  // }, [])

  return (
    <div>
      {/* <Container>
        <TodoForm todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </Container> */}
      <Routes>
        <Route children path="/" element={<Home /> } />
        <Route children path="/todos" element={<Others /> } />
      </Routes>
    </div>
  );
}

export default App;
