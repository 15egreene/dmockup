import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default function TodoForm({ todos, setTodos }) {
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handlePicChange = (e) => {
    const file = e.target.files[0];
    setPic(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please provide a valid value for todo");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    if (pic) {
      formData.append("profile_pic", pic); // Append image file to form data
    }

    axios
      .post("api/todos/", formData)
      .then((res) => {
        setName("");
        setPic(""); // Reset image state
        const { data } = res;
        setTodos([...todos, data]);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setName("");
        setPic(""); // Reset image state
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-4">
        <FormControl
          placeholder="New Todo"
          onChange={handleChange}
          value={name}
        />
        <Form.Control type="file" onChange={handlePicChange} />
        <Button type="submit">Add</Button>
      </InputGroup>
    </Form>
  );
}
