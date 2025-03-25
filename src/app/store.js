import { configureStore } from "@reduxjs/toolkit"
import  selectReducer  from "../slices/StudentSlice"
const store = configureStore(
    {
        reducer:{
            students : selectReducer
        }
    }
)
export default store