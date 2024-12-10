import React from "react";

const WaitingForDriver = () => {
  return (
    <>
      <h5 className="p-1 text-center w-[93%] absolute top-0">
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <div className="flex justify-between items-center">
        <img
          className="h-10"
          src="https://swyft.pl/wp-content/2023/05/how-many-people-can-a-uberx-take.jpg"
        />
        <div className="text-right">
          <h2 className="text-lg font-medium  ">Adil</h2>
          <h4 className="text-lg font-semibold">Lx-2020 </h4>
          <p className="text-sm text-gray-600 ">Hundai Xli</p>
        </div>
      </div>
      <div className="flex gap-2 flex-col justify-between items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-2 border-b-2">
            <i className="text-sm -mt-1 ri-map-pin-user-fill"></i>{" "}
            <div>
              <h2 className="text-lg font-medium">Muslim Town</h2>
              <p className="text-base text-gray-600">Rawalpindi</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-2 border-b-2">
            <i className="text-sm -mt-1 ri-map-pin-2-fill"></i>{" "}
            <div>
              <h2 className="text-lg font-medium">Muslim Town</h2>
              <p className="text-base text-gray-600">Rawalpindi</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-2">
            <i className="text-sm -mt-1 ri-currency-line"></i>{" "}
            <div>
              <h2 className="text-lg font-medium">RS-56</h2>
              <p className="text-base text-gray-600">Cash Green</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaitingForDriver;
