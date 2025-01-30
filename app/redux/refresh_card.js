"use client"
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

const refresh_cartSlice = createSlice({
  name: 'refresh_cart',
  initialState,
  reducers: {
    refresh_data: (state) => {
      state.value = !(state.value)
    },
  },
})

export const { refresh_data } = refresh_cartSlice.actions

export default refresh_cartSlice.reducer