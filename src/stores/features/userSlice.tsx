import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface variabel {
    dataUsers: any;
    isDataUsersError: boolean;
    isDataUsersSuccess: boolean;
    isDataUsersLoading: boolean;
    messageDataUsers: any;
}

const initialState : variabel = {
    dataUsers: null,
    isDataUsersError: false,
    isDataUsersSuccess: false,
    isDataUsersLoading: false,
    messageDataUsers: ""
}

interface varDataUser {
    name: String;
    email: String;    
    password: String;
    isAdmin: any;
    isActive: any;
    id:any;
    limit:number;
    page:number;
    status:any;
}

interface varDataGetUser {
    limit:number;
    page:number;
    status:any;
}

export const getUsers  : any = createAsyncThunk("user/getUsers", async(dataUsers : varDataGetUser, thunkAPI) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/users/${dataUsers.limit}&${dataUsers.page}&${dataUsers.status}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        console.log(response, 'response')
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

interface varDataId {
    id:any;
}

export const getUserById  : any = createAsyncThunk("user/getUserById", async(dataUsers : varDataId, thunkAPI) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/users/${dataUsers.id}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        console.log(response.data, 'response by id')
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

interface varDataUpdate {
    name: String;
    email: String;    
    // password: String;
    isAdmin: any;
    isActive: any;
    id:any;
}

export const UpdateUser : any = createAsyncThunk("user/UpdateUser", async(dataUsers :  varDataUpdate, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+'/users/'+dataUsers.id, {
            name: dataUsers.name,
            email: dataUsers.email,
            isAdmin: dataUsers.isAdmin,
            isActive: dataUsers.isActive
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

interface varDataId {
    id:any;
}

export const deleteUser : any = createAsyncThunk("user/deleteUser", async(dataUsers : varDataId, thunkAPI) => {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_REACT_APP_API_URL}/users/${dataUsers.id}`,{
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

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
        resetDataUsers: (state) => initialState
    },
    extraReducers:(builder) => {
        
        // get users
        builder.addCase(getUsers.pending, (state) => {
            state.isDataUsersLoading = true;
        });
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.isDataUsersLoading = false;
            state.isDataUsersSuccess = true;
            state.dataUsers = action.payload;
        });
        builder.addCase(getUsers.rejected, (state, action) => {
            state.isDataUsersLoading = false;
            state.isDataUsersError = true;
            state.messageDataUsers = action.payload;
        })

        // get users by id
        builder.addCase(getUserById.pending, (state) => {
            state.isDataUsersLoading = true;
        });
        builder.addCase(getUserById.fulfilled, (state, action) => {
            state.isDataUsersLoading = false;
            state.isDataUsersSuccess = true;
            state.dataUsers = action.payload;
        });
        builder.addCase(getUserById.rejected, (state, action) => {
            state.isDataUsersLoading = false;
            state.isDataUsersError = true;
            state.messageDataUsers = action.payload;
        })

        // update users by id
        builder.addCase(UpdateUser.pending, (state) => {
            state.isDataUsersLoading = true;
        });
        builder.addCase(UpdateUser.fulfilled, (state, action) => {
            state.isDataUsersLoading = false;
            state.isDataUsersSuccess = true;
            state.messageDataUsers = action.payload;
        });
        builder.addCase(UpdateUser.rejected, (state, action) => {
            state.isDataUsersLoading = false;
            state.isDataUsersError = true;
            state.messageDataUsers = action.payload;
        })

        
        // delete user
        builder.addCase(deleteUser.pending, (state) => {
            state.isDataUsersLoading = true;
        });
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.isDataUsersLoading = false;
            state.isDataUsersSuccess = true;
            state.messageDataUsers = action.payload;
        });
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.isDataUsersLoading = false;
            state.isDataUsersError = true;
            state.messageDataUsers = action.payload;
        })
    }
})

export const {resetDataUsers} = usersSlice.actions;
export default usersSlice.reducer;