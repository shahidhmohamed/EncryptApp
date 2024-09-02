import React from 'react';
import EncryptApp from './components/EncryptApp';
import earthVideo from '../src/components/earth.mp4';

const App: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={earthVideo}
        autoPlay
        muted
        loop
      />

      {/* Overlay for content */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="bg-white bg-opacity-25 p-5 rounded-lg shadow-lg">
          <EncryptApp />
        </div>
      </div>
    </div>
  );
};

export default App;
