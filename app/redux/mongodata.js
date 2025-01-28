"use client"
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

const mongodataSlice = createSlice({
  name: 'mongodata',
  initialState,
  reducers: {
    get_data: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { get_data } = mongodataSlice.actions

export default mongodataSlice.reducer