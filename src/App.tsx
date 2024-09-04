import React from "react";
import EncryptApp from "./components/EncryptApp";
import earthVideo from "../src/components/earth.mp4";

const App: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video - added playsInline and adjusted visibility for mobile */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={earthVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex justify-center items-center h-full p-4 sm:p-6 md:p-10">
        <div className="bg-white bg-opacity-55 p-5 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
          <EncryptApp />
        </div>
      </div>
    </div>
  );
};

export default App;
