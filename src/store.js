import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./features/UserReducer";

const store = configureStore({
    reducer:{
        user: UserSlice.reducer
    }
})

export default store;