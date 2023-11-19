import { Link } from "react-router-dom";

export default function Navbar() {
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
            <Link to={`/login`}>
              <p className="text-base text-slate-700 hover:text-slate-900">
                Login
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
