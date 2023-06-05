import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";

function Add() {
  //state anagement
  const [selectorOptions, setSelectorOptions] = useState([]);
  const [geneticName, setGeneticName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [selectGeneticName, setSelectGeneticName] = useState("");

  //API Handles
  const getAllItems = async () => {
    axios
      .get(`https://orange-wildebeest-hem.cyclic.app/allOptions`)
      .then((res) => {
        const array = [];
        res?.data?.options?.map(
          (item) =>
            item.d_name &&
            array.push({
              value: item.d_name && item.d_name,
              label: item.d_name && item.d_name,
            })
        );
        setSelectorOptions(array);
      });
  };

  //API addGeneticName
  const addGeneticName = async () => {
    const data = {
      d_name: geneticName,
      d_brand: "",
    };
    if (!geneticName) {
      toast.error("please add Genetic name!");
    } else {
      try {
        await axios.post(
          `https://orange-wildebeest-hem.cyclic.app/addDrugs`,
          data
        );
        toast.success("Successfully added genetic name!");
        getAllItems();
        setGeneticName("");
      } catch (error) {}
    }
  };

  const addBrandName = async () => {
    const data = {
      d_name: selectGeneticName,
      d_brand: brandName,
    };
    if (!brandName || !selectGeneticName) {
      toast.error("please add brand name and Genetic name!");
    } else {
      try {
        await axios.post(
          `https://orange-wildebeest-hem.cyclic.app/addDrugs`,
          data
        );
        toast.success("Successfully added brand name!");
        setBrandName("");
        setSelectGeneticName();
      } catch (error) {
        toast.error(error.response.data.error);
      }
    }
  };

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="grid grid-cols-4">
        <div></div>{" "}
        <div className="pt-44  col-span-2">
          <div className="shadow-md px-10 py-10 rounded-md">
            <h5 className="text-xl text-gray-950 text-center pb-6">
              Add A Genetic name
            </h5>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  value={geneticName}
                  name="geneticName"
                  onChange={(e) => setGeneticName(e.target.value)}
                  className="border border-gray-600 border-opacity-25 rounded py-2 px-3 w-full"
                  placeholder=" Gnetic Name"
                />
              </div>
              <div className="col-span-1 flex justify-center ">
                <button
                  onClick={addGeneticName}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 px-4 w-full rounded"
                >
                  ADD
                </button>{" "}
              </div>
            </div>
          </div>
          <div className="shadow-md px-10 py-10 rounded-md mt-12">
            <h5 className="text-xl text-gray-950 text-center pb-6">
              Add A Brand name
            </h5>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Select
                  className="border-none"
                  classNamePrefix="select"
                  // defaultValue={colourOptions[0]}
                  isDisabled={false}
                  isLoading={false}
                  // isClearable={true}
                  isRtl={false}
                  isSearchable={true}
                  name="color"
                  options={selectorOptions}
                  placeholder="Genetic name"
                  onChange={(e) => setSelectGeneticName(e.value)}
                />
              </div>
              <div>
                {" "}
                <input
                  value={brandName}
                  name="brandName"
                  onChange={(e) => setBrandName(e.target.value)}
                  className="border border-gray-600 border-opacity-25 rounded py-1.5 px-3"
                  required={true}
                  placeholder=" brand Name"
                />
              </div>
              <div>
                {" "}
                <button
                  onClick={addBrandName}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 px-4 w-full rounded"
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default Add;
