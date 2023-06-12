import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { storeAccessBool, storeAccessToken } from "../utils/tokens";
import { useNavigate } from "react-router-dom";

function Login() {
  const baseAPIUrl = `${process.env.REACT_APP_BASE_URL}`;

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginLoader, setLoginLoader] = useState(false);

  const loginUser = async () => {
    const data = {
      username: username,
      password: password,
    };

    try {
      setLoginLoader(true);
      const res = await axios.post(`${baseAPIUrl}/api/login`, data);
      setLoginLoader(false);
      toast.success("Successfully logged user!");
      storeAccessToken(res.data?.token);
      storeAccessBool(true);
      navigate("/add");
    } catch (error) {
      storeAccessBool(false);
      setLoginLoader(false);
      toast.error(error.response.data.message);
      console.log("errrooorrr", error.response.data.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="grid md:grid-cols-3">
        <div></div>{" "}
        <div className="pt-32 col-span-1 space-y-5 mx-6">
          <h5 className="md:text-3xl text-xl text-gray-950 text-center pb-6">
            Admin Login
          </h5>
          <div>
            <input
              value={username}
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-600 border-opacity-25 rounded py-2 px-3 w-full"
              placeholder="username"
            />
          </div>
          <div>
            <input
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-600 border-opacity-25 rounded py-2 px-3 w-full"
              placeholder="password"
              type="password"
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={loginUser}
              disabled={loginLoader}
              className={`${
                loginLoader ? "opacity-50" : ""
              } bg-blue-500 hover:bg-blue-700 text-white font-bold mt-8 p-2 px-4 w-full rounded`}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
