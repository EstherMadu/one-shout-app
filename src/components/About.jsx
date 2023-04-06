import React from "react";
import friends from "../images/friends.jpg";

export const About = () => {
  return (
    <section className="py-32">
      <div className="container grid md:grid-cols-2 items-center gap-12">
        <div className="friends-img">
          <img
            src={friends}
            alt="Image of friends holding hands"
            className="rounded-xl h-96 object-cover"
          />
        </div>
        <div>
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
