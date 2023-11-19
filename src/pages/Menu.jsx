import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineRollback } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Menu() {
  const param = useParams();
  const [menu, setMenu] = useState({});

  useEffect(() => {
    getMenuDetails();
  }, []);

  const getMenuDetails = () => {
    axios
      .get(`https://api.mudoapi.tech/menu/${param.id}`)
      .then((res) => {
        setMenu(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="max-w-4xl p-8 mx-auto my-10 rounded-md shadow-lg bg-stone-50">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Menu Detail</h1>
          <Link to={`/`}>
            <AiOutlineRollback className="text-[25px] text-slate-700 hover:text-slate-900" />
          </Link>
        </div>
        <hr className="my-4" />

        {menu ? (
          <div className="flex gap-2 p-3 bg-white rounded-md shadow">
            <img
              src={menu.imageUrl}
              alt={menu.name}
              className="w-[250px] h-[250px] object-cover rounded-md"
            />
            <div className="grid grid-cols-1 divide-y text-slate-700">
              <div className="flex flex-col">
                <label className="font-semibold">Menu Name</label>
                <p className="">{menu.name}</p>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">Menu Description</label>
                <p className="">{menu.description}</p>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">Menu Type</label>
                <p className="">{menu.type}</p>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">Menu Price</label>
                <p className="">Rp. {menu.price}</p>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
