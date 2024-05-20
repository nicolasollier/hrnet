import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    formIsValid: true,
  },
  reducers: {
    validateForm: (state, action) => {
      state.formIsValid = action.payload
    }
  }
})

export const { validateForm } = formSlice.actions
export default formSlice.reducer