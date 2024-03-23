import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import { upUser } from './UserReducer';

function Update() {

   const {id} = useParams()
   const users= useSelector((state)=>state.users);
   const existingUser = users.filter(f => f.id == id);

   const {name,email,phone,info}= existingUser[0];

   const [uname,setName]=useState(name)
   const [uemail,setEmail]=useState(email)
   const [uphone,setPhone]=useState(phone)
   const [uinfo,setInfo]=useState(info)

   const dispath= useDispatch();
   const navigate= useNavigate()

   function handleUpdate(e){
      e.preventDefault();
      dispath(upUser({
         id:id,
         name:uname,
         email:uemail,
         phone:uphone,
         info:uinfo,
      }))
      navigate('/')   
   }

   function handleCancel() {
      navigate('/')   
   }

  return (
   <div className='create-main'>
      <h3>Edit User</h3>
    <Form onSubmit={handleUpdate}>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter name" required 
        value={uname} onChange={e=>setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="email" placeholder="Enter email"  required
        value={uemail} onChange={e=>setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="number" placeholder="Enter phone"  required
        value={uphone} onChange={e=>setPhone(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter info" 
        value={uinfo} onChange={e=>setInfo(e.target.value)} />
      </Form.Group>
      <Form.Group className='create-btn'>
      <Button variant="success" type="submit">Update</Button>
      <Button onClick={handleCancel} variant="danger">Cancel</Button>
      </Form.Group>
    </Form>
    </div>
  );
}

export default Update;