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
            coa: pengajuans.coa,
            costCenter: pengajuans.costCenter,
            analiticAccount: pengajuans.analiticAccount,
            debit: pengajuans.debit,
            credit: pengajuans.credit,
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

export const pengajuanSlice = createSlice({
    name: "pengajuanReducer",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) => {
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
    }
});

export const { reset } = pengajuanSlice.actions;
export default pengajuanSlice.reducer;