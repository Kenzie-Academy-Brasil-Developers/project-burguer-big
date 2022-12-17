import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../providers/UserContext";


export const ProtectedRoutes = () => {
  const { tokenUser } = useContext(UserContext);

  return tokenUser ? <Outlet /> : <Navigate to={"/"} replace />;
};
