import React from "react";

const LocationSearchPanel = ({ setPanelOpen, setVehiclePanelOpen }) => {
  const locations = [
    "Muslim Town,Rawalpindi",
    "Amarpura,Rawalpindi",
    "Gulberg,Islabamabad",
  ];
  return (
    <div>
      {locations.map(function (elm, index) {
        return (
          <div
            onClick={() => {
              setVehiclePanelOpen(true);
              setPanelOpen(false);
            }}
            className="flex gap-4 items-center justify-start my-4"
            key={index}
          >
            {/* this is sample data */}
            <h2 className="bg-[#eee] p-2 w-10 h-10 rounded-full flex items-center justify-center">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{elm}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
