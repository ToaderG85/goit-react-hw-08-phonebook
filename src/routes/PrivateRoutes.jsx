import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { selectIsAuthenticated } from "../redux/selectors";
import { fetchContacts } from "../redux/operations";

export default function PrivateRoutes() {
  const isAuth = useSelector(selectIsAuthenticated);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchContacts());
      
    }
  }, [isAuth, dispatch]);

  return isAuth ? <Outlet /> : <Navigate to="/" />;
}