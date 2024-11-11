import { createSlice } from "@reduxjs/toolkit";
import CustomerActions from "../Actions/CustomerActions";
import toast from "react-hot-toast";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    isloading: false,
    cartData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(CustomerActions.addToCart.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(CustomerActions.addToCart.fulfilled, (state, action) => {
      //   state.createCustomerProfile = action.payload;
      state.isloading = false;
      if (action.payload.success) {
        toast.success(action.payload.message);
      } else {
        toast.error(action.payload.message);
      }
    });
    builder.addCase(CustomerActions.addToCart.rejected, (state, action) => {
      state.isloading = false;
      toast.error(action.error.message || "Something went wrong");
    });
    builder.addCase(CustomerActions.getCart.fulfilled, (state, action) => {
      //   state.createCustomerProfile = action.payload;
      //   state.isloading = false;
      if (action.payload.success) {
        console.log(action.payload)
        state.cartData = action.payload.data;
      } else {
        // toast.error(action.payload.message);
      }
    });
  },
});

export default cartSlice.reducer;
