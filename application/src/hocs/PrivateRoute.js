import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/userSelectors";

export default function PrivateRoute({ children }) {
  const { isAuth } = useAuth();
  return isAuth === true 
    ? children
    : <Navigate to="/login" />
}