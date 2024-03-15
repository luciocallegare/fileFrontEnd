import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import getData from '../services/fetchService'

export const fetchFile = createAsyncThunk("fetchFiles", getData)

const fileSlice = createSlice({
    name: 'files',
    initialState: {
        isLoading: false,
        data: null,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFile.pending, (state,action) => {
            state.isLoading = true
        })
        builder.addCase(fetchFile.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
            state.error = null
        })
        builder.addCase(fetchFile.rejected, (state, action) => {
            state.error = action.error
        })
    }
})

export default fileSlice.reducer