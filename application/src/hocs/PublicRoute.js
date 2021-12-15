import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/userSelectors";

export default function PublicRoute({ children }) {
  const { isAuth } = useAuth();
  console.log(isAuth);
  return (isAuth === false)
    ? children
    : <Navigate to="/chats" />
}