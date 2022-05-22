import { configureStore } from '@reduxjs/toolkit'
import tokenSlice from '../feature/tokenSlice'

export default configureStore({
  reducer: {
    token: tokenSlice
  }
})