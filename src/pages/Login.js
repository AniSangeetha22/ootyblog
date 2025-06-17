import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, signInWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className=" w-[75%] text-green-900 flex flex-col  gap-4 items-center justify-center ">
      <form onSubmit={handleLogin} className="p-4 mt-36 ">
        <div className=" flex flex-col justify-center items-center gap-4">
          <h2 className="my-10 font-bold text-2xl">Login</h2>
          <input
            className="w-80 p-2 text-gray-900 border border-green-900 rounded-lg bg-green-50 shadow-sm focus:outline-none"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="w-80 p-2 text-gray-900 border border-green-900 rounded-lg bg-green-50 shadow-sm focus:outline-none"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <button
            className="px-8 py-2 text-lg font-medium bg-green-900 mb-12 mt-4 text-white rounded-md cursor-pointer "
            type="submit"
          >
            Login
          </button>

          <button
            className="px-8 py-2 text-lg font-medium bg-green-900 mb-12 mt-4 text-white rounded-md cursor-pointer "
            type="button"
            onClick={handleGoogleLogin}
          >
            {" "}
            Google Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
