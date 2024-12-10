import { Link } from "react-router-dom";

const Start = () => {
  return (
    <>
      <div className="w-full bg-cover bg-center  bg-[url(https://images.unsplash.com/photo-1670361747602-0272a863e3c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHx0cmFmZmljJTIwbGlnaHR8ZW58MHx8MHx8fDA%3D)] h-screen pt-8  flex justify-between flex-col">
        <div className="relative w-24 h-16 bg-transparent">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbomzfOhM-BsNHGXcRBdJsO8g1shOox1a2Iw&s"
            alt="Uber Logo"
            className="absolute inset-0 w-full h-full object-contain mix-blend-lighten"
          />
        </div>
        {/* <img
          className="w-10 ml-8"
          src=""
        /> */}
        <div className="bg-white py-4 px-4 pb-7">
          <h2 className="text-3xl font-bold">Get Started with uber</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black mt-5 text-white py-5 rounded"
          >
            Continue
          </Link>
        </div>
      </div>
    </>
  );
};

export default Start;
