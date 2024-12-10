const VehiclePanel = ({ setVehiclePanelOpen, setConfirmRidePanel }) => {
  return (
    <>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => setVehiclePanelOpen(false)}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>

      <div
        onClick={() => setConfirmRidePanel(true)}
        className="flex w-full   px-3 py-6 border-2 active:border-black rounded-xl mb-2  items-center justify-between"
      >
        <img
          className="h-12"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt="uber"
        />
        <div className=" -ml-2 w-1/2">
          <h4 className="font-medium text-xm">
            {" "}
            Uber Go{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2mins away</h5>
          <p className="font-medium text-xs text-gray-700">Affordable ride</p>
        </div>
        <h2 className="text-xl font-bold">Rs- 193</h2>
      </div>
      <div
        onClick={() => setConfirmRidePanel(true)}
        className="flex w-full   px-3 py-6 border-2 active:border-black rounded-xl mb-2  items-center justify-between"
      >
        <img
          className="h-12"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt="uber"
        />
        <div className=" -ml-2 w-1/2">
          <h4 className="font-medium text-xm">
            {" "}
            Uber Go{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2mins away</h5>
          <p className="font-medium text-xs text-gray-700">Affordable ride</p>
        </div>
        <h2 className="text-xl font-bold">Rs- 193</h2>
      </div>
      <div
        onClick={() => setConfirmRidePanel(true)}
        className="flex w-full   px-3 py-6 border-2 active:border-black rounded-xl mb-2  items-center justify-between"
      >
        <img
          className="h-12"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt="uber"
        />
        <div className=" -ml-2 w-1/2">
          <h4 className="font-medium text-xm">
            {" "}
            Uber Go{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2mins away</h5>
          <p className="font-medium text-xs text-gray-700">Affordable ride</p>
        </div>
        <h2 className="text-xl font-bold">Rs- 193</h2>
      </div>
    </>
  );
};

export default VehiclePanel;
