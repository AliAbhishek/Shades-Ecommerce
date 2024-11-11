import { createSlice } from "@reduxjs/toolkit";
import CustomerActions from "../Actions/CustomerActions";
import toast from "react-hot-toast";
import { setToken } from "./PersistSlice";

const otpSlice = createSlice({
  name: "otp",
  initialState: {
    otp: null,
    loading: false,
    error: null,
    verifyOtpLoading: false,
    resendOtpLoading: false,
    verifyOtpError: null,
  },
  reducers: {},
  extraReducers: (builder, dispatch) => {
    builder.addCase(CustomerActions.resendOtp.pending, (state) => {
      state.resendOtpLoading = true;
    });
    builder.addCase(CustomerActions.resendOtp.fulfilled, (state, action) => {
      state.resendOtpLoading = false;
      state.otp = action.payload;
      if (action.payload.success) {
        toast.success(action.payload?.message);
      } else {
        toast.error(action.payload?.message);
      }
    });
    builder.addCase(CustomerActions.resendOtp.rejected, (state, action) => {
      state.resendOtpLoading = false;
      toast.error(action.payload?.message || "Something went wrong");
    });
    builder.addCase(CustomerActions.verifyOtp.pending, (state) => {
      state.verifyOtpLoading = true;
    });
    builder.addCase(CustomerActions.verifyOtp.fulfilled, (state, action) => {
      state.verifyOtpLoading = false;
      state.otp = action.payload;
     
      if (action.payload.success) {
        toast.success(action.payload?.message);
      } else {
        toast.error(action.payload?.message);
      }
    });
    builder.addCase(CustomerActions.verifyOtp.rejected, (state, action) => {
      state.verifyOtpLoading = false;
      toast.error(action.payload?.message || "Something went wrong");
    });
  },
});

export default otpSlice.reducer;
