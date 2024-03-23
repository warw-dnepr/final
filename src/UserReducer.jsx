

import {createSlice} from '@reduxjs/toolkit'
import { userList } from './Data'

const userSlice = createSlice({
   name:'user',
   initialState: userList,
   reducers:{
      addUser: (state,action)=>{
         state.push(action.payload)
      },
      upUser:(state,action)=>{
      const {id,name,email,phone,info} = action.payload;
      const uu = state.find(user=> user.id==id);
      if(uu) {
         uu.name=name;
         uu.email=email;
         uu.phone=phone;
         uu.info=info;
      }
   },
   deleteUser:(state,action)=>{
      const {id} = action.payload;
      const uu = state.find(user=> user.id==id);
      if(uu) {
        return state.filter(f=> f.id !== id);
      }
   }
   }
})

export const {addUser,upUser,deleteUser} = userSlice.actions;
export default userSlice.reducer;
