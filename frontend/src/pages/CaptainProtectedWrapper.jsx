import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/captainContext";
import axios from "axios";

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { captain, setCaptain } = useContext(CaptainDataContext);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      setIsLoading(false);
    }
  }, [token]);
  axios
    .get("http://localhost:5000/captains/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        setCaptain(response.data.captain);
        setIsLoading(false);
      }
    })
    .catch((error) => {
      console.log(error);
      localStorage.removeItem("token");
      navigate("/captain-login");
    });
  if (isLoading) return <div>Loading...</div>;
  return <div>CaptainProtectedWrapper</div>;
};

export default CaptainProtectedWrapper;
