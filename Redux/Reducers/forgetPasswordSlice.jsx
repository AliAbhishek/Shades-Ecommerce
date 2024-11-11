import toast from "react-hot-toast";
import CustomerActions from "../Actions/CustomerActions";
import { createSlice } from "@reduxjs/toolkit";

const forgetPasswordSlice = createSlice({
  name: "forgetPassword",
  initialState: {
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(CustomerActions.forgotPassword.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      CustomerActions.forgotPassword.fulfilled,
      (state, action) => {
        state.loading = false;
        state.success = true;
        if (action.payload.success) {
          toast.success(action.payload?.message);
        } else {
          toast.error(action.payload?.message);
        }
      }
    );
    builder.addCase(
      CustomerActions.forgotPassword.rejected,
      (state, action) => {
        state.loading = false;

        toast.error(action.error.message || "Something went wrong");
      }
    );
    builder.addCase(CustomerActions.resetPassword.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      CustomerActions.resetPassword.fulfilled,
      (state, action) => {
        state.loading = false;
        state.success = true;
        if (action.payload.success) {
          // toast.success(action.payload?.message);
        } else {
          toast.error(action.payload?.message);
        }
      }
    );
    builder.addCase(CustomerActions.resetPassword.rejected, (state, action) => {
      state.loading = false;
      toast.error(action.error.message || "Something went wrong");
    });
  },
});

export default forgetPasswordSlice.reducer;
