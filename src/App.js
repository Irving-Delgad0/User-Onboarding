import './App.css';
import React, {useState} from "react"
import Form from "./Components/Form"

import schema from "./Validation/formSchema"
import * as yup from "yup";

import axios from "axios"

const initialFormValues = {
  username: "",
  password: "",
  email: "",
  checked: false
}

const initialFormErrors = {
  username: "",
  password: "",
  email: "",
  tos: ""
}


function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [users, setUsers] = useState([])

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  }

  const formSubmit = () => {
    axios.post("https://reqres.in/api/users", formValues)
    .then(res => {
      setUsers([res.data, ...users])
      setFormValues(initialFormValues)
    }).catch(err => console.error(err))
  }

    const validate = (name, value) => {
      yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]:""}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
    }
  
  return (
    <div className="App">
      <Form values={formValues} change={inputChange} errors={formErrors} submit={formSubmit}/>
      {users.map(user => (
        <div>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
