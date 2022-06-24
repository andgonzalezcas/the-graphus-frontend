import { configureStore } from '@reduxjs/toolkit'
import tokenSlice from '../components/layout/tokenSlice'
import userSlice from '../components/layout/userSlice'

export default configureStore({
  reducer: {
    token: tokenSlice,
    user: userSlice
  }
})