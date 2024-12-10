import React from "react";

const ConfirmedRide = ({ setConfirmRidePanel, setVehicleFound }) => {
  return (
    <>
      {" "}
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => setConfirmRidePanel(false)}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm your ride</h3>
      <div className="flex gap-2 flex-col justify-between items-center">
        <img
          className="h-20"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt="confirm_ride"
        />
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
        <button
          onClick={() => {
            setVehicleFound(true);
            setConfirmRidePanel(false);
          }}
          className="w-full mt-5 bg-green-600 p-2 text-white rounded-lg font-semibold"
        >
          Confirm Ride
        </button>
      </div>
    </>
  );
};

export default ConfirmedRide;
