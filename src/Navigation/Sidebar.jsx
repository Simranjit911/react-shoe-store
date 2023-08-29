import React, { useContext } from "react";
import userContext from "../../userContext";

const Sidebar = () => {
  const { cat, setcat, setcom, setcolor } = useContext(userContext);
  console.log(cat);
  return (
    <div className=" w-[100%] h-full flex flex-row mx-auto sm:w-[10%] md:flex-col bg-slate-400 rounded-md p-2 ">
      <div className="">
        {/* Category */}
        <div className="flex flex-row  sm:flex-col items-center gap-2 justify-between">
          <p className="text-md font-semibold">Category </p>
          <div className="flex flex-row sm:flex-col  justify-center gap-1">
            <label className="flex items-center">
              <input
                type="radio"
                value=""
                name="shoe"
                onChange={(e) => setcat(e.target.value.toLowerCase())}
              />
              All 
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="shoe"
                value="sneakers"
                onChange={(e) => setcat(e.target.value.toLowerCase())}
              />
              Sneakers
            </label>
            <label className="flex items-center">
              <input
                name="shoe"
                type="radio"
                value="flat"
                onChange={(e) => setcat(e.target.value.toLowerCase())}
              />
              Flats
            </label>
            <label className="flex items-center">
              <input
                name="shoe"
                type="radio"
                value="sandals"
                onChange={(e) => setcat(e.target.value.toLowerCase())}
              />
              Sandals
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="heels"
                name="shoe"
                onChange={(e) => setcat(e.target.value.toLowerCase())}
              />
              Heels
            </label>
          </div>
        </div>
        {/* Brands */}
        <div className="flex flex-row  sm:flex-col items-center justify-between">
          <p className="text-md font-semibold">Brand </p>
          <div className="flex flex-row sm:flex-col  justify-center  gap-1">
            <label className="flex items-center">
              <input
                type="radio"
                value=""
                name="brand"
                onChange={(e) => setcom(e.target.value.toLowerCase())}
              />
              All 
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="brand"
                value="nike"
                onChange={(e) => setcom(e.target.value.toLowerCase())}
              />
              Nike
            </label>
            <label className="flex items-center">
              <input
                name="brand"
                type="radio"
                value="vans"
                onChange={(e) => setcom(e.target.value.toLowerCase())}
              />
              Vans
            </label>
            <label className="flex items-center">
              <input
                name="brand"
                type="radio"
                value="puma"
                onChange={(e) => setcom(e.target.value.toLowerCase())}
              />
              Puma
            </label>
            <label className="flex items-center">
              <input
                name="brand"
                type="radio"
                value="adidas"
                onChange={(e) => setcom(e.target.value.toLowerCase())}
              />
              Adidas
            </label>
          </div>
        </div>
        {/* Color */}
        <div className="flex flex-row  sm:flex-col items-center justify-between">
          <p className="text-md font-semibold">Color </p>
          <div className="flex flex-row sm:flex-col  justify-center gap-1 ">
            <label className="flex items-center">
              <input
                type="radio"
                value=""
                name="color"
                onChange={(e) => setcolor(e.target.value.toLowerCase())}
              />
              All
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="color"
                value="white"
                onChange={(e) => setcolor(e.target.value.toLowerCase())}
              />
              White
            </label>
            <label className="flex items-center">
              <input
                name="color"
                type="radio"
                value="red"
                onChange={(e) => setcolor(e.target.value.toLowerCase())}
              />
              Red
            </label>
            <label className="flex items-center">
              <input
                name="color"
                type="radio"
                value="black"
                onChange={(e) => setcolor(e.target.value.toLowerCase())}
              />
              Black
            </label>
            <label className="flex items-center">
              <input
                name="color"
                type="radio"
                value="Blue"
                onChange={(e) => setcolor(e.target.value.toLowerCase())}
              />
              Blue
            </label>
            <label className="flex items-center"> 
              <input
                name="color"
                type="radio"
                value="green"
                onChange={(e) => setcolor(e.target.value.toLowerCase())}
              />
              Green
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
