import React, { useState } from "react";
import SectionHeader from "../components/headers/sectionHeader";
import Button from "../components/utilities/Button";
import { list } from "postcss";

const Home = () => {
  let [itemList, setItemList] = useState([]);
  let [item, setItem] = useState("");

  const getItem = (e) => {
    setItem(e.target.value);
  };

  const addItem = () => {
    if (item.trim() !== "") {
      setItemList([...itemList, item]);
      setItem("");
    }
  };

  const deleteItem = (index) => {
    let updateItemList = [...itemList];
    updateItemList.splice(index, 1);
    setItemList(updateItemList);
  };

  return (
    <div className=" container mx-auto">
      <SectionHeader sectionHeader="Simple Todo" />
      <div className="flex gap-5">
        <div className=" bg-slate-50 w-1/2 rounded p-5 text-center">
          <input
            onChange={(e) => {
              getItem(e);
            }}
            value={item}
            type="text"
            placeholder="Add Item Name"
            className="py-2 px-3 mb-5 rounded outline-none placeholder:text-lime-600 placeholder:font-medium inline-block w-full border-b-2 border-slate-500 border-l-2"
          />
          <Button btnTxt="Add Item" handler={addItem} />
        </div>

        {itemList.length !== 0 ? (
          <div className="w-1/2 bg-slate-50 p-5 rounded">
            <h1 className="border-b-2 border-gray-400 text-center bg-slate-100 font-bold text-xl py-2 rounded text-orange-500">
              List of item
            </h1>
            <ul>
              {itemList.map((item, index) => {
                return (
                  <li
                    key={index}
                    className=" flex justify-between p-3 bg-white my-3 rounded border-b-2 border-slate-300"
                  >
                    <div className="flex gap-5 w-3/4">
                      <div>
                        <p className="py-2 px-4 text-lg text-center bg-sky-600 rounded-full text-white">
                          {index + 1}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className=" text-lg font-semibold text-sky-600">
                          {item}
                        </p>
                      </div>
                    </div>
                    <Button
                      btnTxt="Detete Item"
                      handler={() => {
                        deleteItem(index);
                      }}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div className="flex justify-center items-center w-2/5">
            <p className="text-center text-red-500 px-5 py-3 border-2 border-red-400 rounded">
              Your Item Box is Empty
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
