import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import studentApi from "../api/studentApi";
export const fetchStudents = createAsyncThunk("fetchstudents",
    studentApi.getAllStudents
)
const studentSlice = createSlice({
    name : 'students',
    initialState:{
        student : [],
        selectedStudent : null,
        status:'idle'
    },
    reducers:{
        selectStudent :(state , action)=>{
            state.selectedStudent = action.payload
            return state
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchStudents.pending,(state) =>{
            state.status='pending'
            return state
        })
        .addCase(fetchStudents.fulfilled,(state , action)=>{
            state.status='success'
            state.student=action.payload
            return state
        })
        .addCase(fetchStudents.rejected,(state)=>{
            state.status='failed'
            return state
        })
    }
})
export const selectStudent = studentSlice.actions
export default studentSlice.reducer