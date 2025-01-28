"use client"
import { configureStore } from '@reduxjs/toolkit'
import mysessionReducer from './custom_session.js'
import mongodataReducer from './mongodata.js'

export const store = configureStore({
    reducer: {
        mysession: mysessionReducer,
        mongodata: mongodataReducer,
      },
})