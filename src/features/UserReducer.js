import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { config } from '../config/config';

export const registerUser = createAsyncThunk('users/registerUser', async (userData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${config.userApi}/register`, userData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const UserSlice = createSlice({
    name: 'users',
    initialState: {
        loading:false,
        showPassword:false
    },
    reducers: {
        setLoading:(state,action)=>{
            state.loading = action.payload
        },
        setShowPassword:(state,action)=>{
            state.showPassword = action.payload;
          }

    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false
                toast.success('Registration Successfully done 😃!', {
                    position: 'top-center',
                });
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false
                console.error('Error during registration:', action.payload);
                toast.error('Error during registration. Please try again.', {
                    position: 'top-center',
                });
            });
    },
});
export const {setLoading,setShowPassword} =  UserSlice.actions
export default UserSlice.reducer;