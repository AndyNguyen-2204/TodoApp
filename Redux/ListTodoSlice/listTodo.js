import { createSlice } from '@reduxjs/toolkit'
import { data } from '../../Screen/TodoAddnew/dataStatusTodo';

const initialState = {
  data: []
}

export const TodoListSlice = createSlice({
  name: 'TodoList',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.data.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo } = TodoListSlice.actions

export default TodoListSlice.reducer