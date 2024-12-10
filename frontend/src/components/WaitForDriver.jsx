const WaitForDriver = (props) => {
  return (
    <>
      <h5
        onClick={() => props.waitingForDriver(false)}
        className="p-1 text-center w-[93%] absolute top-0"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <div>
        <img
          className="h-10"
          src="https://swyft.pl/wp-content/2023/05/how-many-people-can-a-uberx-take.jpg"
        />
        <div className="flex items-center justify-between">
          <h2>Adil</h2>
          <h4>Lx-2020 </h4>
          <p>Hundai Xli</p>
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

export default WaitForDriver;
