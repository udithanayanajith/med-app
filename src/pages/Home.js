import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Waveform } from "@uiball/loaders";

function Home() {
  const baseAPIUrl = `${process.env.REACT_APP_BASE_URL}`;

  //state anagement
  const [selectorOptions, setSelectorOptions] = useState([]);
  const [tableLoader, setTableLoader] = useState(false);
  const [isLoadingDropDown, setIsLoadingDropDown] = useState(false);
  const [items, setItems] = useState([]);

  //API Handles
  const getAllItems = async () => {
    setIsLoadingDropDown(true);
    axios.get(`${baseAPIUrl}/allOptions`).then((res) => {
      const array = [];
      res?.data?.options?.map((item) =>
        item
          ? array.push({
              value: item,
              label: item,
            })
          : ""
      );
      setSelectorOptions(array);
      setIsLoadingDropDown(false);
    });
  };

  const onChangeHanldeBrand = async (e) => {
    setTableLoader(true);
    await axios
      .get(`${baseAPIUrl}/searchDrugs?item=${e?.value}`)
      .then((response) => {
        setItems(response.data);
        setTableLoader(false);
      })
      .catch((error) => {
        console.error(error);
        setTableLoader(false);
      });
  };

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <div className="grid md:grid-cols-4">
      <div></div>
      <div className="pt-44  col-span-2">
        <div className="shadow-md px-10 py-10 rounded-md sm:mx-3">
          <h5 className="text-3xl text-gray-950 text-center pb-6">
            Brand finder
          </h5>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Select
                className="border-none"
                classNamePrefix="select"
                // defaultValue={colourOptions[0]}
                isDisabled={false}
                isLoading={isLoadingDropDown}
                // isClearable={true}
                isRtl={false}
                isSearchable={true}
                name="color"
                options={selectorOptions}
                placeholder="Type Your Brand name or Genetic name"
                onChange={(e) => onChangeHanldeBrand(e)}
              />
            </div>
            <div className="col-span-2 flex justify-center ..."></div>
            <div className="col-span-2">
              {tableLoader ? (
                <div className="flex justify-center py-6">
                  <Waveform size={40} lineWeight={3.5} speed={1} color="gray" />
                </div>
              ) : (
                <>
                  {items && (
                    <>
                      <table className="table-auto w-full text-center mt-2">
                        <thead>
                          <tr className="bg-gray-100 py-2 text-sm">
                            <th className="py-2">Genetic Name</th>
                            <th>Drug Name</th>
                          </tr>
                        </thead>
                        <tbody>
                          {items &&
                            items?.map((item, index) => {
                              return (
                                <>
                                  <tr
                                    key={index}
                                    className="text-sm border-b border-gray-400 border-opacity-40"
                                  >
                                    <td className="py-2 ">{item.gName}</td>
                                    <td
                                      className={`${
                                        item.dBrand ? "" : "opacity-30 "
                                      }`}
                                    >
                                      {item.dBrand
                                        ? item.dBrand
                                        : "-----------"}
                                    </td>
                                  </tr>
                                </>
                              );
                            })}
                        </tbody>
                      </table>{" "}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Home;
