import React from "react";

export const Features = () => {
  return (
    <section className="bg-gray-900 text-xl  lg:py-32 my-20 text-gray-200">
      <div className="container">
        <h3 className="text-3xl lg:text-5xl font-semibold py-10 text-center">
          Our Features
        </h3>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center justify-start">
            <i className="bx bxs-megaphone bx-tada-hover  text-7xl opacity-70 mb-4"></i>
            <p className="px-8 py-4 text-center lg:w-80">
              Send shout to emergency contact with a push of one button
            </p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <i className="bx bx-current-location bx-spin-hover text-7xl opacity-70 mb-4"></i>
            <p className="px-8 py-4 text-center lg:w-80">
              Shows location of sender and receiver, real-time live location
              updates.
            </p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <i className="bx bxs-layer bx-flashing-hover text-7xl opacity-70 mb-4"></i>
            <p className="px-8 py-4 text-center lg:w-80">
              Multi-lingual option
            </p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <i className="bx bxs-location-plus bx-flashing-hover text-7xl opacity-70 mb-4"></i>
            <p className="px-8 py-4 text-center lg:w-80">
              Locate your business, family and loved ones as they move from one
              point to another.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
