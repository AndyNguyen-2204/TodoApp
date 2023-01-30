import { configureStore } from '@reduxjs/toolkit'
import TodoListSlice from "./ListTodoSlice/listTodo"
export const store = configureStore({
  reducer: {
    TodoList: TodoListSlice,
  },
})