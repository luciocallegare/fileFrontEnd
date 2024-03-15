import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import fileReducer from './slicer'


const store = configureStore({
    reducer:{
        file: fileReducer
    }
})

export default store
