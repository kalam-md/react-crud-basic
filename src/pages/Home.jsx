import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import Navbar from "./Navbar";

export default function Home() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    getMenus();
  }, []);

  const getMenus = () => {
    axios
      .get(`https://api.mudoapi.tech/menus`)
      .then((res) => {
        setMenus(res.data.data.Data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl p-8 mx-auto my-10 rounded-md shadow-lg bg-stone-50">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Menu</h1>
          <Link to={`/`}>
            <AiOutlinePlusSquare className="text-[25px] text-slate-700 hover:text-slate-900" />
          </Link>
        </div>
        <hr className="my-4" />

        <div className="grid grid-cols-3 gap-4">
          {menus.map((menu) => (
            <div
              className="flex flex-col gap-2 p-3 bg-white rounded-md shadow"
              key={menu.id}
            >
              <img
                src={menu.imageUrl}
                className="w-[250px] h-[250px] object-cover rounded-md"
              />
              <div className="flex justify-between item-center text-slate-700">
                <p className="text-base font-semibold">{menu.name}</p>
                <Link to={`menu/${menu.id}`}>
                  <AiFillEye className="text-[25px] hover:text-slate-900" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
