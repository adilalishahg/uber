import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const user = { email: email, password: password };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      user
    );
    if (response.status === 200) {
      setUser(response.data);
      const data = response.data;
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex flex-col justify-between h-screen p-7">
      <div>
        <div className="relative w-24 h-16 mb-10 bg-transparent">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaI0-AaIAcwVCkcnR8xdetso-wz9rCOVJB5Q&s"
            alt="Uber Logo"
            className="absolute inset-0 object-contain w-full h-full mix-blend-lighten"
          />
        </div>
        <form onSubmit={submitHandler}>
          <h3 className="mb-2 text-lg font-medium">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#eeeee] border mb-7 rounded px-4 py-2 text-lg placeholder:text-base"
            type="email"
            placeholder="a@email.com"
          />
          <h3 className="mb-2 text-lg font-medium">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            className="w-full bg-[#eeeee] border mb-7 rounded px-4 py-2 text-lg placeholder:text-base"
          />
          <button
            type="submit"
            className="w-full bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 text-lg
          "
          >
            Login
          </button>
        </form>
        <p className="text-center">
          New here?
          <Link to="/signup" className="text-blue-600">
            Create a new account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="w-full bg-[#10b461] flex justify-center items-center text-[#fff] font-semibold mb-5 rounded px-4 py-3 text-lg"
        >
          Sign in as captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
