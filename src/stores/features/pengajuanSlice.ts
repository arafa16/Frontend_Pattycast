import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface variabel {
    pengajuans: Array;
    isPengajuanError: boolean;
    isPengajuanSuccess: boolean;
    isPengajuanLoading: boolean;
    messagePengajuan: string;
}

const initialState : variabel = {
    pengajuans: null,
    isPengajuanError: false,
    isPengajuanSuccess: false,
    isPengajuanLoading: false,
    messagePengajuan: ""
}

export const SubmitPengajuan = createAsyncThunk("pengajuans/submitPengajuan", async(pengajuans, thunkAPI) => {
    console.log(pengajuans, "sampai di pengajuan");

    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+'/pengajuans', {
            tanggal: pengajuans.tanggal,
            expense: pengajuans.expense,
            advance: pengajuans.advance,
            coaId: pengajuans.coaId,
            costCenterId: pengajuans.costCenterId,
            annaliticAccountId: pengajuans.annaliticAccountId,
            debit: pengajuans.debit,
            credit: pengajuans.credit,
            reference: pengajuans.reference,
            keterangan: pengajuans.keterangan,
            typePengajuanId: pengajuans.typePengajuanId,
            userId: pengajuans.userId,
            statusId: pengajuans.statusId,
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data;
            console.log(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const UpdatePengajuan = createAsyncThunk("pengajuans/UpdatePengajuan", async(pengajuans, thunkAPI) => {
    console.log(pengajuans, "sampai di pengajuan");

    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+'/pengajuans/'+pengajuans.id, {
            tanggal: pengajuans.tanggal,
            expense: pengajuans.expense,
            advance: pengajuans.advance,
            coaId: pengajuans.coaId,
            costCenterId: pengajuans.costCenterId,
            annaliticAccountId: pengajuans.annaliticAccountId,
            debit: pengajuans.debit,
            credit: pengajuans.credit,
            reference: pengajuans.reference,
            keterangan: pengajuans.keterangan,
            typePengajuanId: pengajuans.typePengajuanId,
            userId: pengajuans.userId,
            statusId: pengajuans.statusId,
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

export const GetPengajuan = createAsyncThunk("pengajuans/GetPengajuan", async(pengajuans, thunkAPI) => {
    console.log(pengajuans, "sampai di pengajuan");

    try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/pengajuans/${pengajuans.limit}&${pengajuans.page}&${pengajuans.type}&${pengajuans.status}&${pengajuans.search}`,{
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

export const GetPengajuanByUser = createAsyncThunk("pengajuans/GetPengajuanByUser", async(pengajuans, thunkAPI) => {
   
    const findUserLogin = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+'/me',{
        withCredentials: true, // Now this is was the missing piece in the client side 
    });

    try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/pengajuan/${findUserLogin.data.uuid}&${pengajuans.limit}&${pengajuans.page}&${pengajuans.search}/user`,{
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

export const pengajuanSlice = createSlice({
    name: "pengajuanReducer",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) => {
        //submit pengajuan
        builder.addCase(SubmitPengajuan.pending, (state)=>{
            state.isPengajuanLoading = true;
        });
        builder.addCase(SubmitPengajuan.fulfilled, (state, action)=>{
            state.isPengajuanLoading = false;
            state.isPengajuanSuccess = true;
            state.messagePengajuan = action.payload;
        });
        builder.addCase(SubmitPengajuan.rejected, (state, action)=>{
            state.isPengajuanLoading = false;
            state.isPengajuanError = true;
            state.messagePengajuan = action.payload;
        })

        //submit pengajuan
        builder.addCase(UpdatePengajuan.pending, (state)=>{
            state.isPengajuanLoading = true;
        });
        builder.addCase(UpdatePengajuan.fulfilled, (state, action)=>{
            state.isPengajuanLoading = false;
            state.isPengajuanSuccess = true;
            state.messagePengajuan = action.payload;
        });
        builder.addCase(UpdatePengajuan.rejected, (state, action)=>{
            state.isPengajuanLoading = false;
            state.isPengajuanError = true;
            state.messagePengajuan = action.payload;
        });

        //get pengajuan
        builder.addCase(GetPengajuan.pending, (state)=>{
            state.isPengajuanLoading = true;
        });
        builder.addCase(GetPengajuan.fulfilled, (state, action)=>{
            state.isPengajuanLoading = false;
            state.isPengajuanSuccess = true;
            state.pengajuans = action.payload;
        });
        builder.addCase(GetPengajuan.rejected, (state, action)=>{
            state.isPengajuanLoading = false;
            state.isPengajuanError = true;
            state.messagePengajuan = action.payload;
        })

        //get pengajuan by user
        builder.addCase(GetPengajuanByUser.pending, (state)=>{
            state.isPengajuanLoading = true;
        });
        builder.addCase(GetPengajuanByUser.fulfilled, (state, action)=>{
            state.isPengajuanLoading = false;
            state.isPengajuanSuccess = true;
            state.pengajuans = action.payload;
        });
        builder.addCase(GetPengajuanByUser.rejected, (state, action)=>{
            state.isPengajuanLoading = false;
            state.isPengajuanError = true;
            state.messagePengajuan = action.payload;
        })
    }
});

export const { reset } = pengajuanSlice.actions;
export default pengajuanSlice.reducer;