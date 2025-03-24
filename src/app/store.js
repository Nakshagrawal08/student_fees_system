import { configureStore } from "@reduxjs/toolkit"
import  selectReducer  from "../slices/StudentSlice"
const store = configureStore(
    {
        reducer:{
            student : selectReducer
        }
    }
)
export default store