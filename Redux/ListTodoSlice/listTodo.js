import { createSlice } from '@reduxjs/toolkit'

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
    completedTodo: (state, action) => {
      state.data.forEach((el) => {
        if (action.payload.includes(el.name)) {
          el.status = "Completed"
        }
      });
    },
    deleteTodo: (state, action) => {
      action.payload.forEach((el) => {
        let index = state.data.findIndex((e) => e.name === el)
        state.data.splice(index, 1)
      })
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, completedTodo, deleteTodo } = TodoListSlice.actions

export default TodoListSlice.reducer