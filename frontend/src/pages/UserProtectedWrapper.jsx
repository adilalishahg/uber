import { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const [loading, setIsLoading] = useState(true);
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) navigate("/login");
    setIsLoading(false);
  }, [token]);
  axios
    .get("http://localhost:5000/users/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        setUser(response.data.user);
        setIsLoading(false);
      }
    })
    .catch((error) => {
      setUser(null);
      localStorage.removeItem("token");
      navigate("/login");
    });
  if (loading) return <div>Loading...</div>;

  return <>{children}</>;
};

export default UserProtectedWrapper;
