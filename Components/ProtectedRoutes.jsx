import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = () => {
  const adminToken = window.sessionStorage.getItem("token");
  if (adminToken) {
    return <Outlet />;
  } else {
    return <Navigate to={"/"} />;
  }
};
export default ProtectedRoutes;
