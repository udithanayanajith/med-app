import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { storeAccessBool, storeAccessToken } from "../utils/tokens";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    const data = {
      username: username,
      password: password,
    };

    try {
      const res = await axios.post(
        `https://orange-wildebeest-hem.cyclic.app/api/login`,
        data
      );
      toast.success("Successfully logged user!");
      storeAccessToken(res.data?.token);
      storeAccessBool(true);
      navigate("/add");
    } catch (error) {
      console.log("errors in login", error);
      storeAccessBool(false);
    }
  };

  return (
    <div className="grid grid-cols-3">
      <div></div>{" "}
      <div className="pt-32 col-span-1 space-y-5">
        <h5 className="text-3xl text-gray-950 text-center pb-6">Admin Login</h5>
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
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-8 p-2 px-4 w-1/2 rounded"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
