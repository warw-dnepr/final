import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addUser } from './UserReducer';
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

function Create() {


   const [name,setName]=useState('')
   const [email,setEmail]=useState('')
   const [phone,setPhone]=useState('')
   const [info,setInfo]=useState('none')


   function handleCancel() {
      navigate('/')   
   }

   const users= useSelector((state)=>state.users);
   const dispath= useDispatch();
   const navigate= useNavigate();

   function handleSubmit(e){
      e.preventDefault();
      { users.length == 0 && dispath(addUser({id: 1, name, email,phone,info}))}
      { users.length > 0 && dispath(addUser({id: users[users.length-1].id + 1, name, email,phone,info}))}
      // dispath(addUser({id: users[users.length-1].id + 1, name, email}))
      navigate('/')   
   }

  return (
   <div className='create-main'>
      <h3>Add new User</h3>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter name" required 
        onChange={e=>setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="email" placeholder="Enter email"  required
        onChange={e=>setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="number" placeholder="Enter phone"  required
        onChange={e=>setPhone(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="tel" placeholder="Enter info" 
        onChange={e=>setInfo(e.target.value)} />
      </Form.Group>
      <Form.Group className='create-btn'>
      <Button variant="success" type="submit">Submit</Button>
      <Button onClick={handleCancel} variant="danger">Cancel</Button>
      </Form.Group>
    </Form>
    </div>
  );
}

export default Create;