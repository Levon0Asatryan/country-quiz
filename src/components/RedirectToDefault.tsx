import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectToDefault = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/your-default-id", { replace: true });
  }, [navigate]);

  return null;
};

export default RedirectToDefault;
