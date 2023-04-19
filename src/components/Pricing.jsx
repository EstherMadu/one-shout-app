import React from "react";

export const Pricing = () => {
  return (
    <section className="py-60">
      <div className="container">
        <h2 className="text-3xl lg:text-5xl mb-16 font-semibold text-center">
          Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-slate-200 rounded-xl text-center flex flex-col justify-center items-center my-4 lg:py-20">
            <div className="inline-flex items-center space-x-2">
              <h2 className="text-lg line-through opacity-50">$1</h2>
              <h2 className="text-7xl font-semibold">$1</h2>
            </div>
            <h2 className="text-base opacity-80 mt-4 font-medium">Monthly</h2>
          </div>
          <div className="bg-red-500 text-white rounded-xl text-center flex flex-col justify-center items-center my-4 lg:py-20">
            <div className="inline-flex items-center space-x-2">
              <h2 className="text-lg line-through opacity-50">$6</h2>
              <h2 className="text-7xl font-semibold">$5</h2>
            </div>
            <h2 className="text-base opacity-80 mt-4 font-medium">6 months</h2>
          </div>
          <div className="bg-slate-200 rounded-xl text-center flex flex-col justify-center items-center my-4 lg:py-20">
            <div className="inline-flex items-center space-x-2">
              <h2 className="text-lg line-through opacity-50">$12</h2>
              <h2 className="text-7xl font-semibold">$9</h2>
            </div>
            <h2 className="text-base opacity-80 mt-4 font-medium">Yearly</h2>
          </div>
        </div>
      </div>
    </section>
  );
};
