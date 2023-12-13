import React from "react";

const TextLandingPage = () => {
  return (
    <div>
      <div className="flex flex-col items-left font-montserrat font-bold">
        <p className="text-5xl text-darkBlue">Welcome to </p>
        <p className="text-3xl">
          <span className="text-5xl text-pink">SciQuest </span>
          <span className="text-5xl text-darkBlue">Explorer!</span>
        </p>
      </div>
      <div className="w-4/6 ml-1">
        <p className="text-lg">
          Unlock the wonders of academic discovery. Dive into a world of
          breakthroughs with our seamless scientific article search. Ready to
          explore?
        </p>
      </div>
    </div>
  );
};

export default TextLandingPage;
