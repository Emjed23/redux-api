import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {addUser}from '../redux/action/userAction'


const AddUser = () => {
  const [name, setName] = useState("")
  const getName=(e)=>{
      setName(e.target.value)
  }
  const dispatch=useDispatch()
  const addNewUser=()=>{
     let newUser={
          id:Math.random(),
          name
      }
      dispatch(addUser(newUser))
    }
  
  return(
  <div className="addsection ">
     <Form.Label >create new user</Form.Label>
      <Form.Control
        type="text"
        autoFocus
        onChange={getName}
      />
 <Button onClick={addNewUser} >Add</Button>
    </div>
    )

}

export default AddUser