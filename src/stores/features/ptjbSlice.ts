import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface variabel {
    dataPtjb: any;
    isDataPtjbError: boolean;
    isDataPtjbSuccess: boolean;
    isDataPtjbLoading: boolean;
    messageDataPtjb: any;
}

const initialState : variabel = {
    dataPtjb: null,
    isDataPtjbError: false,
    isDataPtjbSuccess: false,
    isDataPtjbLoading: false,
    messageDataPtjb: ""
}

interface varDataPtjb {
    nominal: any; 
    keterangan: string; 
    id: any;
}

export const SubmitPtjb  : any = createAsyncThunk("user/SubmitPtjb", async(dataPtjb : varDataPtjb, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+'/ptjb', {
            nominal: dataPtjb.nominal,
            keterangan: dataPtjb.keterangan,
            pengajuanId: dataPtjb.id
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

export const UpdatePtjbRedux  : any = createAsyncThunk("user/UpdatePtjb", async(dataPtjb : varDataPtjb, thunkAPI) => {
    try {
        const response = await axios.patch(`${import.meta.env.VITE_REACT_APP_API_URL}/ptjb/${dataPtjb.id}`, {
            nominal: dataPtjb.nominal,
            keterangan: dataPtjb.keterangan
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

interface varDeletePtjb {
    id: any;
}

export const DeletePtjbRedux  : any = createAsyncThunk("user/DeletePtjb", async(dataPtjb : varDeletePtjb, thunkAPI) => {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_REACT_APP_API_URL}/ptjb/${dataPtjb.id}`,{
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

export const ptjbSlice = createSlice({
    name: 'ptjb',
    initialState,
    reducers:{
        resetPtjb: (state) => initialState
    },
    extraReducers:(builder) => {
        //submit ptjb
        builder.addCase(SubmitPtjb.pending, (state) => {
            state.isDataPtjbLoading = true;
        });
        builder.addCase(SubmitPtjb.fulfilled, (state, action) => {
            state.isDataPtjbLoading = false;
            state.isDataPtjbSuccess = true;
            state.messageDataPtjb = action.payload;
        });
        builder.addCase(SubmitPtjb.rejected, (state, action) => {
            state.isDataPtjbLoading = false;
            state.isDataPtjbError = true;
            state.messageDataPtjb = action.payload;
        });

        //update ptjb
        builder.addCase(UpdatePtjbRedux.pending, (state) => {
            state.isDataPtjbLoading = true;
        });
        builder.addCase(UpdatePtjbRedux.fulfilled, (state, action) => {
            state.isDataPtjbLoading = false;
            state.isDataPtjbSuccess = true;
            state.messageDataPtjb = action.payload;
        });
        builder.addCase(UpdatePtjbRedux.rejected, (state, action) => {
            state.isDataPtjbLoading = false;
            state.isDataPtjbError = true;
            state.messageDataPtjb = action.payload;
        });

         //delete ptjb
         builder.addCase(DeletePtjbRedux.pending, (state) => {
            state.isDataPtjbLoading = true;
        });
        builder.addCase(DeletePtjbRedux.fulfilled, (state, action) => {
            state.isDataPtjbLoading = false;
            state.isDataPtjbSuccess = true;
            state.messageDataPtjb = action.payload;
        });
        builder.addCase(DeletePtjbRedux.rejected, (state, action) => {
            state.isDataPtjbLoading = false;
            state.isDataPtjbError = true;
            state.messageDataPtjb = action.payload;
        });
    }
});

export const {resetPtjb} = ptjbSlice.actions;
export default ptjbSlice.reducer;