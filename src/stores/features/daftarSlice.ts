import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface variabel {
    dataUser: any;
    isDataUserError: boolean;
    isDataUserSuccess: boolean;
    isDataUserLoading: boolean;
    messageDataUser: any;
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
    isAdmin: any;
    isActive: any;
    id: any;
}

export const PendaftaranUser  : any = createAsyncThunk("user/PendaftaranUser", async(dataUser : varDataUser, thunkAPI) => {
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
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

interface varUpdatePassword { 
    password: String;
    id: any;
}

export const UpdatePassword  : any = createAsyncThunk("user/UpdatePassword", async(dataUser : varUpdatePassword, thunkAPI) => {
    try {
        const response = await axios.patch(`${import.meta.env.VITE_REACT_APP_API_URL}/users/${dataUser.id}/password`, {
            password: dataUser.password
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});



export const daftarSlice  = createSlice({
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

        // update password by id
        builder.addCase(UpdatePassword.pending, (state) => {
            state.isDataUserLoading = true;
        });
        builder.addCase(UpdatePassword.fulfilled, (state, action) => {
            state.isDataUserLoading = false;
            state.isDataUserSuccess = true;
            state.messageDataUser = action.payload;
        });
        builder.addCase(UpdatePassword.rejected, (state, action) => {
            state.isDataUserLoading = false;
            state.isDataUserError = true;
            state.messageDataUser = action.payload;
        })

    }
});

export const {resetDataUser} = daftarSlice.actions;
export default daftarSlice.reducer;