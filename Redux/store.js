import { configureStore } from '@reduxjs/toolkit'
import  FilterBlockSlice  from './FilterBlockSlice/filterBlock'
import TodoListSlice from "./ListTodoSlice/listTodo"
export const store = configureStore({
  reducer: {
    TodoList: TodoListSlice,
    FilterBlock:FilterBlockSlice
  },
})