import { createSlice } from "@reduxjs/toolkit";

const persistSlice = createSlice({
  name: "persist",
  initialState: {
   
    userId: null,
    createProfiledata:null,
    idproof:null,
    contactInfo:null,
    
  },
  reducers: {
   
    UserId: (state, action) => {
        console.log(action.payload,"userId")
      state.userId = action.payload;
    },
    createProfileData: (state, action) => {
      console.log(action.payload,"createProfileData")
      state.createProfiledata = action.payload;
    },
    IdProof: (state, action) => {
      console.log(action.payload,"idProof")
      state.idproof = action.payload;
    },
    ContactInfo: (state, action) => {
      console.log(action.payload,"ContactInfo")
      state.contactInfo = action.payload;
    },
    
    clearAllPersistData: (state, action) => {
      localStorage.clear();
      sessionStorage.clear();
      state.userId = null;
      state.createProfiledata = null;
      state.idproof = null;
      state.contactInfo = null;
     
    },
  },
});
export const { UserId,createProfileData,IdProof,ContactInfo ,clearAllPersistData} = persistSlice.actions;
export default persistSlice.reducer;
