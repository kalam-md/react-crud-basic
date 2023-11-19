import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  const handleLogout = () => {
    localStorage.removeItem("accessToken", accessToken);
    navigate("login");
  };

  return (
    <>
      <div className="max-w-5xl p-5 mx-auto mt-3 mb-10 rounded-md shadow bg-stone-5 bg-gradient-to-t from-stone-50 to-white">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Restaurant</h1>
          <div className="flex items-center justify-between gap-4">
            <Link to={`/`}>
              <p className="text-base text-slate-700 hover:text-slate-900">
                Home
              </p>
            </Link>
            {accessToken ? (
              <button
                onClick={handleLogout}
                className="text-base text-white py-2 px-3 rounded-md bg-slate-800 hover:bg-slate-900"
              >
                Logout
              </button>
            ) : (
              <Link to={`/login`}>
                <button className="text-base text-white py-2 px-3 rounded-md bg-slate-800 hover:bg-slate-900">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
