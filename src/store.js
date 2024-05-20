import { configureStore } from '@reduxjs/toolkit'
import employees from './reducers/employeesReducer'
import form from './reducers/formReducer'

export default configureStore({
  reducer: {
    employees,
    form
  }
})