// Protection machanize
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Protected = ({ children, authentication = true }) => {
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.authSlice);

  useEffect(() => {
    if (authentication && status !== authentication) {
      navigate("/login");
    } else if (!authentication && status !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [status, navigate, authentication]);
  return loader ? <h1>Loading...</h1> : <>{children}</>;
};
