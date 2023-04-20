import React from "react";
import camera from "../assets/images/camera.png";
import phone from "../assets/images/apple.png";
// import camera from "../assets/images/camera.png";

export const About = () => {
  return (
    <section className="my-40 gap-4 mx-auto">
      <div className="container grid md:grid-cols-2 items-center">
        <div className="relative border-4 border-black phone-border w-80 mx-auto">
          <img
            src={camera}
            alt="one-shout app"
            className="camera object-cover"
          />
        </div>
        <div className="mt-20 lg:mt-0 text-center md:text-left">
          <h1 className="text-3xl lg:text-5xl font-semibold lg:font-medium">
            About the app
          </h1>
          <p className="text-sm font-light lg:text-xl lg:leading-normal mt-8">
            One Shout is a revolutionary app that helps keep your families,
            friends, neighbors, and loved ones safe anywhere in the world. With
            the One Shout App on your phone, you worry less about your safety
            and that of your loved ones on the road, rail, airplanes and
            waterways.
            <br />
            Just one click will get your contacts notified about your location
            and safety. The Multi-lingual feature makes One Shout easy to use by
            all as you can select your preferred language.
          </p>
        </div>
      </div>
    </section>
  );
};
