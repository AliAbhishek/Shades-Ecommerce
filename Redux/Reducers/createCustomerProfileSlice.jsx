import { createSlice } from "@reduxjs/toolkit";
import CustomerActions from "../Actions/CustomerActions";
import toast from "react-hot-toast";

const createCustomerProfileSlice = createSlice({
  name: "createCustomerProfile",
  initialState: {
    createCustomerProfile: null,
    createCustomerProfileLoading: false,
    createCustomerProfileError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(CustomerActions.createProfile.pending, (state) => {
      state.createCustomerProfileLoading = true;
    });
    builder.addCase(
      CustomerActions.createProfile.fulfilled,
      (state, action) => {
        state.createCustomerProfile = action.payload;
        state.createCustomerProfileLoading = false;
        if (action.payload.success) {
          toast.success(action.payload.message);
        } else {
          toast.error(action.payload.message);
        }
      }
    );
    builder.addCase(CustomerActions.createProfile.rejected, (state, action) => {
      state.createCustomerProfileLoading = false;
      toast.error(action.error.message || "Something went wrong");
    });
  },
});

export default createCustomerProfileSlice.reducer;
