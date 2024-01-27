// import axios from "axios";
import React, { useEffect} from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../redux/action/userAction";
import {EditUser} from '../components/EditUser';


const UserList = () => {
  
const dispatch=useDispatch()
useEffect(() => {
    dispatch(getUsers());}
, [])

const {users}=useSelector(state=>state)
console.log(users)

  return (
    <div style={{display:"flex",flexWrap:"wrap", gap:"10px",alignItems:"center"}}>
      {
       users.map((el)=>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/8053/8053058.png" />
    <Card.Body>
      <Card.Title> {el.name}</Card.Title>
      <Card.Text> {el.username}</Card.Text>
      <Card.Text>{el.email}</Card.Text>
      <Card.Text>{el.website}</Card.Text>
      <Card.Text>{el.phone}</Card.Text>
      <Button variant="primary" onClick={()=>dispatch(deleteUser(el.id))}>Delete User</Button>
      <EditUser el={users} />
    </Card.Body>
  </Card>
       )
}
  </div>
)
}
export default UserList