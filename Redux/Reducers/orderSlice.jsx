import { createSlice } from "@reduxjs/toolkit";
import CustomerActions from "../Actions/CustomerActions";
import toast from "react-hot-toast";

const orderSlice = createSlice({
  name: "orderSlice",
  initialState: {
    isloading: false,
    orderData: [],
    id: null,
    orderDetail: null,
  },
  reducers: {
    orderId: (state, action) => {
      state.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CustomerActions.getMyOrders.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(CustomerActions.getMyOrders.fulfilled, (state, action) => {
      //   state.createCustomerProfile = action.payload;
      state.isloading = false;
      if (action.payload.success) {
        state.orderData = action.payload.data;
        // toast.success(action.payload.message);
      } else {
        toast.error(action.payload.message);
      }
    });
    builder.addCase(CustomerActions.getMyOrders.rejected, (state, action) => {
      state.isloading = false;
      toast.error(action.error.message || "Something went wrong");
    });
    builder.addCase(CustomerActions.getOrderById.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(CustomerActions.getOrderById.fulfilled, (state, action) => {
      //   state.createCustomerProfile = action.payload;
      state.isloading = false;
      if (action.payload.success) {
        state.orderDetail = action.payload.data;
        // toast.success(action.payload.message);
      } else {
        toast.error(action.payload.message);
      }
    });
    builder.addCase(CustomerActions.getOrderById.rejected, (state, action) => {
      state.isloading = false;
      toast.error(action.error.message || "Something went wrong");
    });
  },
});

export const { orderId } = orderSlice.actions;

export default orderSlice.reducer;
