import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function Heading() {
  const { user,  logout, isAuth } =
    useAuth();
  const navigate = useNavigate();

  const loginbtn = async () => {
    await navigate("/login");
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <>
      <header className="fixed w-full  bg-gray-100 z-50">
        <div className="w-full p-2  flex flex-wrap justify-between md:items-center px-3 max-w-6xl mx-auto ">
          <div className=" flex-col items-start sm:items-center justify-items-start sm:justify-items-center ">
            <h1 className="font-bold text-3xl text-green-900 italic font-sans">
              Ooty Tourisam
            </h1>
            <p className="text-right">powered by HOLIDAYS </p>
          </div>
          <div className=" justify-items-start">
            <p className="">
              Travel is life. Couldn’t agree more? We not just discuss travel,
              We make it happen..
            </p>
            <p className="text-right">...Team Holidays </p>
          </div>
        </div>
        <nav className="">
          <ul className="flex items-center  bg-green-800 text-white p-3 font-bold">
            <NavLink className="mr-4" to="/">
              Home
            </NavLink>
            <NavLink className="mr-4" to="/places-to-visit">
              Places to visit
            </NavLink>
            <NavLink className="mr-4" to="/blog">
              Blog
            </NavLink>
            {isAuth ? (
              <>
                <button onClick={handleLogout}> Logout</button>
                <span> &nbsp;{`  Hallo ${user?.displayName} `} </span>
              </>
            ) : (
              <>
                <NavLink className="mr-4" to="/register">
                  Register
                </NavLink>
                <button onClick={loginbtn}> Login</button>
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}
