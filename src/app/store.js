import { configureStore } from '@reduxjs/toolkit'
import idiomaSlice from '../features/counter/idiomaSlice'

export const store = configureStore({
    reducer: {
        idioma: idiomaSlice
    }
})