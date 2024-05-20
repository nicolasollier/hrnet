import { configureStore } from '@reduxjs/toolkit'
import employees from './reducers/employeesReducer'

export default configureStore({
  reducer: {
    employees,
  }
})