import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/userContext";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );
    if (response.status === 201) {
      const data = response.data;
      localStorage.setItem("token", data.token);
      setUser(data.user);
      navigate("/home");
    }
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
  };
  return (
    <div className="flex flex-col justify-between h-screen p-7">
      <div>
        <div className="relative w-24 h-16 mb-3 bg-transparent">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s"
            alt="Uber Logo"
            className="absolute inset-0 object-contain w-full h-full mix-blend-lighten"
          />
        </div>
        <form onSubmit={submitHandler} className="mb-4">
          <h3 className="mb-2 text-base font-medium">What's your name</h3>
          <div className="flex justify-between gap-2 mb-4">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First Name"
              className="w-1/2 bg-[#eeeeee] border rounded px-4 py-2 text-base placeholder:text-sm"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="w-1/2 bg-[#eeeeee] border rounded px-4 py-2 text-base placeholder:text-sm"
            />
          </div>
          <h3 className="mb-2 text-base font-medium">Email Address</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full bg-[#eeeeee] border rounded px-4 py-2 mb-4 text-lg placeholder:text-sm"
          />
          <h3 className="mb-2 text-base font-medium">Password</h3>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#eeeeee] border rounded px-4 py-2 mb-6 text-lg placeholder:text-sm"
          />
          <button
            type="submit"
            className="w-full bg-black hover:bg-[#3c3c3c] text-white hover:font-bold ease-in-out font-medium py-3 rounded-md"
          >
            Register
          </button>
        </form>
        <p className="text-center">
          Already have account?{" "}
          <Link to={"/user-login"} className="text-blue-600 underline">
            Login
          </Link>
        </p>
      </div>
      <Link
        to={"/captain-signup"}
        className="flex bg-[#7ed52d] px-3 py-3 justify-center items-center rounded font-bold"
      >
        Register as Captain
      </Link>
    </div>
  );
};

export default UserSignup;
