// src/pages/Register.js
import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(username, email, password);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className=" w-[75%] text-green-900 flex flex-col  gap-4 items-center justify-center ">
      <form onSubmit={handleSubmit} className="p-4 mt-36 flex flex-col gap-4">
        <h2 className="my-10 font-bold text-2xl">Register</h2>
        <input
          className="w-80 p-2 text-gray-900 border border-green-900 rounded-lg bg-green-50 shadow-sm focus:outline-none"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <input
          className="w-80 p-2 text-gray-900 border border-green-900 rounded-lg bg-green-50 shadow-sm focus:outline-none"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <input
          className="w-80 p-2 text-gray-900 border border-green-900 rounded-lg bg-green-50 shadow-sm focus:outline-none"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <button
          className="w-32 px-8 py-2 text-lg font-medium bg-green-900 mb-12 mt-4 text-white rounded-md cursor-pointer "
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
