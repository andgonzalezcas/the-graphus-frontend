import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: { value: {name: '', googleId: '', image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACHElEQVRoge3Zz4uNURzH8dcME1HqXkmKDWo2sp4SSfIjsfJjr1gp/wHFQin/gI2VsmQjy1FIWRmWJmykaUxRI2O4Y/G4pen+OPc53+c+k+6nvrvz/ZzP+z73PJ3zHEYaaaReGqvQezcOYBIN/MIcpvECKxXOHaJjeKkI2q2eoVlXwBTdQktviHZ9xF3sryVpD12RBrC6fuJiDXk7qoGvyoGsYBn7cgKM5zT/o1PYktG/HldzAkSBnAzwOJjTHAWyN8hjQ9nmKJBGgMc6TJRtjgKJ8mnVHWAuwOMbvpdtjgL5HOAxm9McBfImwON5TnMUyKsAj6c5zVEgnwI83gd4ZOuJ8tuTdj3OCRD1RHYGeOzKaY4CmQnweB3gka2j0s8hnaqFI0NP3UUnlAc5XkPenpo1OMS7iImj1khbD0v0PArOEKI9WDLYyXCylqQJuikd5E5NGZM0hrf6Q3xQnEFCFL1GKEIuJoxbxO+oSasAIe0LZujcVYFsThizKXLCKkAmsC1hXBMbK5g/TNelv7Vu15Sxp5q4Z/A9131pT7Bybcc1xQeIsnutedzAjiFnB4cUv+aPxLAptYQHOKzauxvjOKs4O0SF71YzOK+CF9LUkAA6AU1FQVxSbPCGDdGu5b8ZsnRB3ukvqlo4VxaigS9rAKJdC9jaKWi/hXTZ2rq0bOhyTdcP5Ex8lmydLtO0oP6/0+qaLwMy0kgj/Sf6A6ZhsRVpv88MAAAAAElFTkSuQmCC'}},
  reducers: {
    setUser: (state, action) => { state.value = action.payload }
  }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer 