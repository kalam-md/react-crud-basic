export default function Login() {
  return (
    <>
      <div className="max-w-xl p-8 mx-auto my-10 rounded-md shadow-lg bg-stone-50">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Login</h1>
        </div>
        <hr className="my-4" />

        <form className="grid grid-cols-1 gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Username</label>
            <input
              type="text"
              name="username"
              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-600"
              placeholder="Username"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset"
              placeholder="Password"
            />
          </div>
          <div className="">
            <button className="px-4 py-2 text-white rounded-md bg-slate-900">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
