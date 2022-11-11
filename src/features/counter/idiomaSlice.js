import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: "español",
  }

  export const idiomaSlice = createSlice({
    name: 'idioma',
    initialState,
    reducers: {
      change: (state, action) => {
        state.value = action.payload
        localStorage.setItem('idioma',action.payload)
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const {  change } = idiomaSlice.actions
  
  export default idiomaSlice.reducer