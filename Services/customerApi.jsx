import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";



const customerApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL_CUSTOMERS,
    // headers: {
    //    Authorization:localStorage.getItem("token")
    // },
});



customerApi.interceptors.request.use((config) => {
    
    const token = localStorage.getItem("token")|| sessionStorage.getItem("token"); // Adjust this path based on your actual state structure
    
    if (token) {
        config.headers.Authorization = token;
    }
    
    return config;
}, (error) => {
    return Promise.reject(error);
});

customerApi.interceptors.response.use((response) => {

    if(response?.data?.status== 501){
        console.log("first")
      
        sessionStorage.clear();
        localStorage.clear()
        toast.error(response?.data?.message)
      
  
        // toast.error(error?.response?.data?.message);
        setTimeout(()=>{
          window.location.href = "/"
        },3000)
      }

    return response;
}, (error) => {
    console.log(error,"error")
    if(error?.response?.data?.status== 501){
        console.log("first")
      
        sessionStorage.clear();
        localStorage.clear()
      
  
        toast.error(error?.response?.data?.message);
        setTimeout(()=>{
          window.location.href = "/"
        },3000)
      }
    return error.response;
});

export default customerApi;

