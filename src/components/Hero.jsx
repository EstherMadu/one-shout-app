import React from "react";
import appleStore from "../assets/images/apple-store.png";
import googlePlay from "../assets/images/google-play.png";
import logo from "../assets/images/icon.png";

export const Hero = () => {
  return (
    <section className="header">
      <div className="container grid md:grid-cols-12 items-center gap-10 py-12">
        <div className="md:col-span-7">
          <h1 className="text-5xl mt-10 lg:text-8xl lg:py-2 lg:font-medium">
            One Shout App
          </h1>
          <span className="download-channel mt-10">
            <a
              href="https://play.google.com/store/apps/details?id=com.ebs.shout"
              target="_blank"
            >
              <img
                src={googlePlay}
                className="w-full lg:w-56 lg:h-auto"
                alt="get on google play"
              />
            </a>

            <a
              href="https://apps.apple.com/us/app/one-shout/id1665137594"
              target="_blank"
            >
              <img
                src={appleStore}
                alt="download on apple store"
                className="w-full lg:w-56 lg:h-auto"
              />
            </a>
          </span>
        </div>

        <div className="md:col-span-5">
          <img
            src={logo}
            alt="one shout logo"
            className="logo-image rounded-3xl mt-10"
          />
        </div>
      </div>
    </section>
  );
};
