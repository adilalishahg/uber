import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({ email: email, password: password });
    console.log(captainData);
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
