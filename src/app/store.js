import { configureStore } from '@reduxjs/toolkit'
import tokenSlice from '../components/layout/tokenSlice'

export default configureStore({
  reducer: {
    token: tokenSlice
  }
})