import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
    setError("");
    setSuccess("");
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    setLoading(true);

    e.preventDefault();

    const bodyPayload = {
      username: username,
      password: password,
    };

    axios
      .post("https://api.mudoapi.tech/login", bodyPayload)
      .then((res) => {
        const token = res.data.data.token;
        localStorage.setItem("accessToken", token);

        setSuccess(res.data.message);
        setLoading(false);

        navigate("/");
      })
      .catch((error) => {
        setError(error.response.data.message);
        setLoading(false);
      });
  };

  return (
    <>
      <Navbar />
      <div className="max-w-xl p-8 mx-auto my-10 rounded-md shadow-lg bg-stone-50">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Login</h1>
        </div>
        <hr className="my-4" />

        {error.length ? (
          <small className="text-red-500">{error}</small>
        ) : (
          <small className="text-green-500">{success}</small>
        )}

        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Username</label>
            <input
              onChange={handleChangeUsername}
              type="text"
              name="username"
              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-600"
              placeholder="Silahkan masukan username"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Password</label>
            <input
              onChange={handleChangePassword}
              type="password"
              name="password"
              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset"
              placeholder="Silahkan masukan password"
            />
          </div>
          <div className="">
            <button
              onClick={handleSubmit}
              className="px-4 py-2 text-white rounded-md bg-slate-900"
              disabled={loading ? true : false}
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
