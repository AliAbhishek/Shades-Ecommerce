import { createSlice } from "@reduxjs/toolkit";

import toast from "react-hot-toast";
import CustomerActions from "../Actions/CustomerActions";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    popularWine: [],
    accessarios: [],
    bestValue: [],
    mostlySearched: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(CustomerActions.getAllProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(
      CustomerActions.getAllProducts.fulfilled,
      (state, action) => {
        state.loading = false;
        state.products = action.payload;
        if (action.payload.success) {
          // toast.success(action.payload.message);
          console.log(action.payload);
          state.popularWine = action.payload.data.popularWine;
          state.accessarios = action.payload.data.accessarios;
          state.bestValue = action.payload.data.bestValue;
          state.mostlySearched = action.payload.data.mostlySearched;
        } else {
          toast.error(action.payload.message);
        }
      }
    );
    builder.addCase(
      CustomerActions.getAllProducts.rejected,
      (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error(action.error.message || "Something went wrong");
      }
    );
    builder.addCase(CustomerActions.getProductDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      CustomerActions.getProductDetails.fulfilled,
      (state, action) => {
        state.loading = false;
        if (action.payload.success) {
          state.ProductDetails = action.payload.data;
        } else {
          toast.error(action.payload.message);
        }
      }
    );
  },
});

export default productsSlice.reducer;
