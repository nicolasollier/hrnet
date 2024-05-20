import { createSlice } from '@reduxjs/toolkit'

export const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: []
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload)
    }
  }
})

export const { addEmployee } = employeesSlice.actions
export default employeesSlice.reducer