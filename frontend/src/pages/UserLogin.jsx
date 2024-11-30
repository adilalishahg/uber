import { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setuserData] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setuserData({ email: email, password: password });
    console.log(userData);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <div className="relative w-24 h-16 mb-10 bg-transparent">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaI0-AaIAcwVCkcnR8xdetso-wz9rCOVJB5Q&s"
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
            className="w-full bg-[#eeeee] border mb-7 rounded px-4 py-2 text-lg placeholder:text-base"
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
