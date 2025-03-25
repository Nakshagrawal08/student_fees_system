import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import studentApi from "../api/studentApi";
export const fetchStudents = createAsyncThunk("fetchstudents",
    studentApi.getAllStudents
)

export const saveStudent = createAsyncThunk("saveStudent",
    studentApi.createStudent
)

const studentSlice = createSlice({
    name : 'students',
    initialState:{
        students : [],
        selectedStudent : null,
        status:'idle'
    },
    reducers:{
        selectStudent :(state , action)=>{
            state.selectedStudent = action.payload
            return state
        },

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchStudents.pending,(state) =>{
            state.status='pending'
            return state
        })
        .addCase(fetchStudents.fulfilled,(state , action)=>{
            state.status='success' 
            state.students=action.payload
            return state
        })
        .addCase(fetchStudents.rejected,(state)=>{
            state.status='failed'
            return state
        })

        builder
        .addCase(saveStudent.pending, (state) => {
            state.status = "pending"
            return state
        })
        .addCase(saveStudent.fulfilled, (state, action) => {
            state.status = "success"
            state.students.push(action.payload)
            return state
        })
        .addCase(saveStudent.rejected, (state) => {
            state.status = "failed"
            return state
        })
    }
})
export const selectStudent = studentSlice.actions
export default studentSlice.reducer