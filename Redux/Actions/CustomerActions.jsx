import { createAsyncThunk } from "@reduxjs/toolkit";
import customerApi from "../../Services/customerApi";

const CustomerActions = {
  // MARK: - Create Customer
  createCustomer: createAsyncThunk("user/register", async (customerData) => {
    const response = await customerApi.post("/user/register", customerData);
    return response.data;
  }),
  // MARK: - RESEND OTP
  resendOtp: createAsyncThunk("/user/resendOtp", async (customerData) => {
    const response = await customerApi.post("/user/resendOtp", customerData);
    return response.data;
  }),

  // MARK: - VERIFY OTP
  verifyOtp: createAsyncThunk("/user/verifyOtp", async (customerData) => {
    const response = await customerApi.post("/user/verifyOtp", customerData);
    return response.data;
  }),

  // MARK: - LOGIN
  loginCustomer: createAsyncThunk("/user/login", async (customerData) => {
    const response = await customerApi.post("/user/login", customerData);
    return response.data;
  }),

  // MARK: - GET CUSTOMER
  getCustomer: createAsyncThunk("/user/getProfile", async () => {
    const response = await customerApi.get("/user/getProfile");
    return response.data;
  }),

  // MARK: - FORGOT PASSWORD
  forgotPassword: createAsyncThunk(
    "/user/forgotPassword",
    async (customerData) => {
      const response = await customerApi.post(
        "/user/forgotPassword",
        customerData
      );
      return response.data;
    }
  ),

  // MARK: - RESET PASSWORD
  resetPassword: createAsyncThunk(
    "/user/resetPassword",
    async (customerData) => {
      const response = await customerApi.post(
        "/user/resetPassword",
        customerData
      );
      return response.data;
    }
  ),

  // MARK: - GOOGLE LOGIN
  googleLogin: createAsyncThunk("/user/socialLogin", async (customerData) => {
    const response = await customerApi.post("/user/socialLogin", customerData);
    return response.data;
  }),

  // MARK: - verify age
  verifyAge: createAsyncThunk("/user/verifyAge", async (customerData) => {
    const response = await customerApi.put("/user/verifyAge", customerData);
    return response.data;
  }),

  // MARK: - CREATE PROFILE
  createProfile: createAsyncThunk(
    "/user/createProfile",
    async (customerData) => {
      const response = await customerApi.put(
        "/user/createProfile",
        customerData
      );
      return response.data;
    }
  ),

  // MARK: - LOG OUT
  logOut: createAsyncThunk("/user/logOut", async () => {
    const response = await customerApi.patch("/user/logOut");
    return response.data;
  }),

  // MARK: - DELETE ACCOUNT
  deleteAccount: createAsyncThunk("/user/deleteAccount", async () => {
    const response = await customerApi.delete("/user/deleteAccount");
    return response.data;
  }),

  // MARK: - CHANGE PASSWORD
  changePassword: createAsyncThunk(
    "/user/changePassword",
    async (customerData) => {
      const response = await customerApi.patch(
        "/user/changePassword",
        customerData
      );
      return response.data;
    }
  ),

  // MARK: - GET ALL PRODUCTS
  getAllProducts: createAsyncThunk("/user/customerHome", async () => {
    const response = await customerApi.get("/user/customerHome");
    return response.data;
  }),

  // MARK: - GET PRODUCT DETAILS
  getProductDetails: createAsyncThunk("/user/getProductById", async (id) => {
    const response = await customerApi.get(
      `user/getProductById?productId=${id}`
    );
    return response.data;
  }),

  // MARK: - ADD addRating
  addRating: createAsyncThunk("/user/addRating", async (customerData) => {
    const response = await customerApi.post("/user/addRating", customerData);
    return response.data;
  }),

  // MARK :- addToCar
  addToCart: createAsyncThunk("/user/addToCart ", async (customerData) => {
    const response = await customerApi.post("/user/addToCart", customerData);
    return response.data;
  }),

  // MARK :- GET CART
  getCart: createAsyncThunk("/user/getCart", async () => {
    const response = await customerApi.get(`user/getCart`);
    return response.data;
  }),

  // MARK :- delete item, from cart
  deleteItemFromcart: createAsyncThunk("user/removeFromCart", async (id) => {
    const response = await customerApi.delete(
      `user/removeFromCart?cartId=${id}`
    );
    return response.data;
  }),

  // MARK :- CART UPDATE
  updateCart: createAsyncThunk("/user/updateCart", async (customerData) => {
    const response = await customerApi.put("/user/updateCart", customerData);
    return response.data;
  }),

  // MARK:- Payment intent
  createPaymentIntent: createAsyncThunk(
    "user/createPaymentIntent",
    async (Data) => {
      const response = await customerApi.post("user/createPaymentIntent", Data);
      return response.data;
    }
  ),

  // Mark:-Payment done

  paymentDone: createAsyncThunk("user/paymentDone", async (Data) => {
    const response = await customerApi.post("user/paymentDone", Data);
    return response.data;
  }),

  // MARK:- my orders
  getMyOrders: createAsyncThunk("user/getMyOrders", async (Data) => {
    const response = await customerApi.get("user/getMyOrders", Data);
    return response.data;
  }),

  // MARK : GETORDERBYID

  getOrderById: createAsyncThunk("user/getOrderById", async (Data) => {
    const response = await customerApi.get(`user/getOrderById?orderId=${Data}`);
    return response.data;
  }),
};

export default CustomerActions;
