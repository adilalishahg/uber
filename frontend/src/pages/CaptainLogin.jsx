import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/captainContext";
import axios from "axios";
const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = { email: email, password: password };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captainData
    );
    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.token);
      localStorage.setItem("captain", data.token);
      navigate("/captain-home");
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <div className="relative w-24 h-16 mb-3 bg-transparent">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s"
            alt="Uber Logo"
            className="absolute inset-0 w-full h-full object-contain mix-blend-lighten"
          />
        </div>
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#eeeeee] border mb-7 rounded px-4 py-2 text-lg placeholder:text-base"
            type="email"
            placeholder="a@email.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            className="w-full bg-[#eeeeee] border mb-7 rounded px-4 py-2 text-lg placeholder:text-base"
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
          Join a fleet?
          <Link to="/captain-signup" className="text-blue-600">
            Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="w-full bg-[#d5622d] flex justify-center items-center text-[#fff] font-semibold mb-5 rounded px-4 py-3 text-lg"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
