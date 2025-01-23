"use client"
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

const mysessionSlice = createSlice({
  name: 'mysession',
  initialState,
  reducers: {
    sign_In: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { sign_In, sign_Out } = mysessionSlice.actions

export default mysessionSlice.reducer