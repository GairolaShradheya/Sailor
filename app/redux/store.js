"use client"
import { configureStore } from '@reduxjs/toolkit'
import mysessionReducer from './custom_session.js'
import mongodataReducer from './mongodata.js'
import refresh_cartReducer from './refresh_card.js'

export const store = configureStore({
    reducer: {
        mysession: mysessionReducer,
        mongodata: mongodataReducer,
        refresh_cart: refresh_cartReducer,
      },
})