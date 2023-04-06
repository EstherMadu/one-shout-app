import React from "react";
import appleStore from "../images/apple-store.png";
import googlePlay from "../images/google-play.png";
import logo from "../images/one-shout-logo.png";

export const Hero = () => {
  return (
    <section className="header">
      <div className="container grid md:grid-cols-12 items-center gap-10 py-12">
        <div className="md:col-span-7">
          <h1 className="text-5xl mt-10 lg:text-8xl lg:py-2 lg:font-medium">
            One Shout App
          </h1>
          <span className="download-channel mt-10">
            <img
              src={googlePlay}
              className="w-1/2 lg:w-56 lg:h-1/4"
              alt="get on google play"
            />
            <img
              src={appleStore}
              alt="download on apple store"
              className="w-1/2 lg:w-56 lg:h-1/4"
            />
          </span>
        </div>

        <div className="md:col-span-5">
          <img
            src={logo}
            alt="one shout logo"
            className="logo-image rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};
