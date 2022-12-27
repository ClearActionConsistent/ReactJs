import React, { useEffect, useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LaunchIcon from "@mui/icons-material/Launch";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ExerciseDetail = (props) => {
  const [showModal, setShowModal] = React.useState(false);
  const [data, setData] = useState({
    groupName: "",
    groupNumber: 0,
    community: "",
    address: "",
    city: "",
    quotation: "",
    phone: "",
    quantity: "",
    action: false,
  });

  //   console.log(isShow + "---" + exerciseDatas);
  useEffect(() => {
    setShowModal(props.isShow);
    setData(props.exerciseDatas);
  }, [showModal]);
  const handleData = (e) => {
    setData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      {data && (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  <ChevronLeftIcon /> {data.groupName}
                </h3>
                <button
                  className="p-1 w-35 h-10 ml-12 bg-transparent border-2 text-black border-solid float-right text-sm leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  COLLAPSE ALL
                </button>
                <button
                  className="p-1 w-35 h-10 border-2 text-black float-right text-sm leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <LaunchIcon className="p-1" />
                  EXPAND ALL
                </button>
                <div className="border-l pl-5">
                  <button
                    className="p-1 w-32 h-10 align-right ml-1 bg-transparent border-2 text-black float-right text-sm leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    IMPORT
                  </button>
                </div>
              </div>

              <div className="h-10 border-b border-zinc-300 p-2">
                <h2>
                  <KeyboardArrowUpIcon />
                  Group Info
                </h2>
              </div>

              <div className="relative p-6 flex-auto">
                <div className="border-b border-zinc-300">
                  <p>GENERAL</p>
                  <div className="flex p-5 justify-between">
                    <div>
                      <label>Group Number</label>
                      <input
                        disabled
                        value={data.groupNumber}
                        className="border-gray-gray4 border focus-within:border-primary p-1"
                      />
                    </div>
                    <div>
                      <label>Group Name</label>
                      <input
                        type="text"
                        name="groupName"
                        value={data.groupName}
                        onChange={(el) => handleData(el)}
                        className="border-gray-gray4 border focus-within:border-primary p-1"
                      />
                    </div>
                    <div>
                      <label>Community</label>
                      <input
                        type="text"
                        name="community"
                        value={data.community}
                        onChange={(e) => handleData(e)}
                        className="border-gray-gray4 border focus-within:border-primary p-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-auto">
                <div>
                  <p>LOCATION</p>
                </div>
                <div className="flex p-5">
                  <div className="grid mr-50px p-5">
                    <label>Street Address</label>
                    <input
                      type="text"
                      name="address"
                      value={data.address}
                      onChange={(el) => handleData(el)}
                      className="border-gray-gray4 border focus-within:border-primary p-1"
                    />
                  </div>
                  <div className="grid p-5">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      value={data.city}
                      onChange={(el) => handleData(el)}
                      className="border-gray-gray4 border focus-within:border-primary p-1"
                    />
                  </div>
                </div>
                <div className="flex p-5">
                  <div className="grid mr-50px">
                    <label>Quotation</label>
                    <input
                      type="text"
                      name="quotation"
                      value={data.quotation}
                      onChange={(el) => handleData(el)}
                      className="border-gray-gray4 border focus-within:border-primary p-1"
                    />
                  </div>
                  <div className="grid">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      value={data.phone}
                      onChange={(el) => handleData(el)}
                      className="border-gray-gray4 border focus-within:border-primary p-1"
                    />
                  </div>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="orange-checkbox"
                    type="checkbox"
                    value={data.action}
                    className="w-4 h-4 accent-orange-400"
                  />
                  <label
                    htmlFor="orange-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Active
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => props.onClose(false)}
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => props.onClose(false)}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ExerciseDetail;
