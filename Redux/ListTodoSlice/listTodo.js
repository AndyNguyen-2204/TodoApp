import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data:[]
}

export const TodoListSlice = createSlice({
  name: 'TodoList',
  initialState,
  reducers: {
    addTodo: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data =state.data.push(action.payload) 
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo } = TodoListSlice.actions

export default TodoListSlice.reducer