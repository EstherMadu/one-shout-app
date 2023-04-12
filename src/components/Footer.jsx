import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-red-600 text-left text-white p-10 font-light lg:flex lg:justify-between lg:font-semibold lg:px-32 mt-32">
      <div>
        <h1 className="text-3xl">Contact Us</h1>
      </div>
      <div className="flex flex-col gap-6 mt-4 p-6">
        <div className="">
          <h2>PHONE</h2>
          <p>+234 708 672 6000</p>
        </div>
        <div className="">
          <h2>EMAIL</h2>
          <p>info@ebsinafrica.com</p>
        </div>
        <div className="">
          <h2>SOCIAL</h2>
          <p>+234 708 672 6000</p>
        </div>
      </div>
    </footer>
  );
};
