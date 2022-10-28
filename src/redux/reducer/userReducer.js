import { createSlice } from '@reduxjs/toolkit'
const initialState = {users:[]}

export const userSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        userData:(state,action)=>{
            const {payload} = action
            state.users = payload
        }
    }
})

export const {userData} = userSlice.actions;
export default userSlice.reducer
