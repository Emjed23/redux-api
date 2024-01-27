import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editUser} from '../redux/action/userAction'
import  { useState } from 'react'


export const EditUser = ({el}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [newUser, setNewUser] = useState("")
    const handleInput=(e)=>{
        setNewUser(e.target.value)
    }
    const dispatch=useDispatch()

    const send=()=>{
        dispatch(
            editUser({id:el.id})
            )
    }

  return (
    <div>
          <Button  onClick={handleShow}>
       EDIT
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>EDIT USER INFORMATION
          </Modal.Title>
        </Modal.Header>
        <h1>name</h1>
        <Form.Control  className='box2' size="lg" type="text"  value={newUser} onChange={handleInput} />
        <h1>username </h1>
        <Form.Control  className='box2' size="lg" type="text"  value={newUser} onChange={handleInput} /> 
        <Modal.Footer>
          <Button  onClick={handleClose}>
            Close
          </Button>
          <Button  onClick={send} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default EditUser;