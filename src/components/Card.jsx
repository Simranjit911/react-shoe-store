import React from "react";

const Card = (props) => {
  const { prod } = props;
  return (
    <div className="shadow-xl cursor-pointer hover:scale-105 hover:text-gray-500 duration-100 border-slate-900 rounded-md px-3 py-2 flex flex-col justify-between  gap-2">
      <div className="flex m-auto p-3 min-w-sm">
        <img src={prod.img} alt="" className="w-[120px] m-2 p-1" />
      </div>
      <div className="p-3 flex flex-col gap-2">
        <div className="flex justify-between gap-2">
          <p>{prod.title}</p>
          <p>{prod.company}</p>
        </div>
        <div className="flex justify-between">
          <p>{prod.color}</p>
          <p>{prod.category}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-left gap-2">
            <p className="line-through">{prod.prevPrice}</p>
            {/* <p>${prod.newPrice}</p> */}
          </div>
          <p className="font-semibold">${prod.newPrice}</p>

          {/* <button className="bg-gray-700 px-2 text-white rounded-md">
            Add
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
