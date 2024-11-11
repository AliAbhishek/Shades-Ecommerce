import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import customerSlice from "./Reducers/RegistrationSlice";
import OtpSlice from "./Reducers/OtpSlice";
import PersistSlice from "./Reducers/PersistSlice";
import loginSlice from "./Reducers/loginSlice";
import forgetPasswordSlice from "./Reducers/forgetPasswordSlice";
import createCustomerProfileSlice from "./Reducers/createCustomerProfileSlice";
import LogoutSlice from "./Reducers/LogoutSlice";
import ProductsSlice from "./Reducers/ProductsSlice";
import cartSlice from "./Reducers/cartSlice";
import orderSlice from "./Reducers/orderSlice";



const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['persist'] // only persistSlice will be persisted
};

const rootReducer = combineReducers({
  customer: customerSlice,
  otp: OtpSlice,
  persist: PersistSlice,
  login: loginSlice,
  forgetPassword: forgetPasswordSlice,
  createCustomerProfile: createCustomerProfileSlice,
  logout: LogoutSlice,
  products: ProductsSlice,
  cart:cartSlice,
  order:orderSlice
 
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(Store);



export default Store;