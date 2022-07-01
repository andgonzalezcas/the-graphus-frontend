import { createSlice } from "@reduxjs/toolkit";

export const academicHistorySlice = createSlice({
  name: 'academicHistory',
  initialState: { value: '' },
  reducers: {
    setAcademicHistory: (state, action) => { state.value = action.payload }
  }
})

export const { setAcademicHistory } = academicHistorySlice.actions
export default academicHistorySlice.reducer 