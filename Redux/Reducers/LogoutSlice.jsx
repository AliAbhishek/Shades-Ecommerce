import { createSlice } from "@reduxjs/toolkit";
import CustomerActions from "../Actions/CustomerActions";
import toast from "react-hot-toast";

const logoutSlice = createSlice({
  name: "logout",
  initialState: {
    logOut: false,
    loading: false,
    deleteAccountLoading: false,
    error: null,
  },
  reducers: {
    logOut: (state, action) => {
      state.logOut = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CustomerActions.logOut.fulfilled, (state, action) => {
      state.logOut = action.payload;
      if (action.payload.success) {
        state.loading = false;
        toast.success(action.payload.message);
      } else {
        state.loading = false;
        toast.error(action.payload.message);
      }
    });
    builder.addCase(CustomerActions.logOut.rejected, (state, action) => {
      state.loading = false;
      toast.error(action.error.message || "Something went wrong");
    });
    builder.addCase(CustomerActions.logOut.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(
      CustomerActions.deleteAccount.fulfilled,
      (state, action) => {
        state.logOut = action.payload;
        if (action.payload.success) {
          state.deleteAccountLoading = false;
          toast.success(action.payload.message);
        } else {
          state.deleteAccountLoading = false;
          toast.error(action.payload.message);
        }
      }
    );
    builder.addCase(CustomerActions.deleteAccount.rejected, (state, action) => {
      state.deleteAccountLoading = false;
      toast.error(action.error.message || "Something went wrong");
    });
    builder.addCase(CustomerActions.deleteAccount.pending, (state, action) => {
      state.deleteAccountLoading = true;
    });
  },
});

export default logoutSlice.reducer;
