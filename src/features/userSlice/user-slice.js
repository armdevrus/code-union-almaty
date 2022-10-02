import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: '@@user',
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state = state.push(action.payload)
        }
    }
})


export const {addUser} = userSlice.actions

export const userReducer = userSlice.reducer