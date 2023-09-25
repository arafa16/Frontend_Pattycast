import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface variabel {
    dataUser: Array;
    isDataUserError: boolean;
    isDataUserSuccess: boolean;
    isDataUserLoading: boolean;
    messageDataUser: string;
}

const initialState : variabel = {
    dataUser: null,
    isDataUserError: false,
    isDataUserSuccess: false,
    isDataUserLoading: false,
    messageDataUser: ""
}

interface varDataUser {
    name: String;
    email: String;    
    password: String;
    isAdmin: boolean;
    isActive: boolean;
}

export const PendaftaranUser = createAsyncThunk("user/PendaftaranUser", async(dataUser : varDataUser, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+'/users/admin', {
            name: dataUser.name,
            email: dataUser.email,
            password: dataUser.password,
            isAdmin: dataUser.isAdmin,
            isActive: dataUser.isActive
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const daftarSlice = createSlice({
    name: "daftar",
    initialState,
    reducers:{
        resetDataUser: (state) => initialState
    },
    extraReducers:(builder) => {
        //register
        builder.addCase(PendaftaranUser.pending, (state) => {
            state.isDataUserLoading = true;
        });
        builder.addCase(PendaftaranUser.fulfilled, (state, action) => {
            state.isDataUserLoading = false;
            state.isDataUserSuccess = true;
            state.messageDataUser = action.payload;
        });
        builder.addCase(PendaftaranUser.rejected, (state, action) => {
            state.isDataUserLoading = false;
            state.isDataUserError = true;
            state.messageDataUser = action.payload;
        });
    }
});

export const {resetDataUser} = daftarSlice.actions;
export default daftarSlice.reducer;