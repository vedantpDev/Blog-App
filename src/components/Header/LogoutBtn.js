import React from "react";
import { UseDispatch, useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const logoutHandler = async (e) => {
    e.preventDefault();
    await authService.logoutUser().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      onClick={(e) => logoutHandler(e)}
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
