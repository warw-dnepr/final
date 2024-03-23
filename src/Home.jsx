
import {useSelector,useDispatch} from 'react-redux'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';
import { useState } from 'react';

export default function Home(){

   const [search,setSearch]=useState('');
   const users= useSelector((state)=>state.users);
   const dispatch= useDispatch();

   const handleDelete=(id)=>{
      dispatch(deleteUser({id:id}))
   }


   return (
      <div className="container">
         <h2 >Users</h2>
        <Link to='/create'> <Button className='my-3' variant="success">Create User</Button></Link>
        <input className='ms-3 search' placeholder='Search...' onChange={(e)=>setSearch(e.target.value)}/>
         <table className="table">
   <thead  className='table-dark'>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Info</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   {users.filter((user)=>{
       if(search.toLowerCase() === '') {
         return user
      } else{return user.name.toLowerCase().includes(search) 
         || user.email.toLowerCase().includes(search) 
         || user.phone.toLowerCase().includes(search)
         || user.info.toLowerCase().includes(search)}
   }).map((user, index)=>(
      <tr key ={index}>
         <td>{user.id}</td>
         <td>{user.name}</td>
         <td>{user.email}</td>
         <td>{user.phone}</td>
         <td>{user.info}</td>
         <td>
         <Link to={`/update/${user.id}`}><Button className='me-4' variant="primary">Edit</Button></Link>
         <Button onClick={()=> handleDelete(user.id)} variant="danger">Delete</Button>
         </td>
      </tr>
   ))}
  </tbody>
  </table>
      </div>
   )
}