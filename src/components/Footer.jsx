import React from "react";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";

export const Footer = () => {
  return (
    <footer className="bg-red-600  ">
      <div className="text-center lg:text-left text-white">
        <div className=" lg:flex lg:justify-between lg:font-semibold lg:px-40 p-10">
          <div>
            <h1 className="text-3xl py-4">Contact Us</h1>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h2>PHONE</h2>
              <p>+234 704 535 0299</p>
              <p>+234 708 672 6000</p>
            </div>
            <div>
              <h2>EMAIL</h2>
              <p>info@ebsinafrica.com</p>
            </div>
            <div>
              <h2 className="py-2">SOCIAL</h2>
              <span className="social-icons flex flex-row justify-center gap-4">
                <a
                  href="https://www.linkedin.com/company/economic-growth-and-development-center/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="w-6 h-6" src={linkedin} alt="linkedin" />
                </a>
                <a
                  href="https://web.facebook.com/profile.php?id=100079602737029"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="w-6 h-6" src={facebook} alt="facebook" />
                </a>
                <a
                  href="https://www.instagram.com/egdcenter/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="w-6 h-6" src={instagram} alt="instagram" />
                </a>
                <a
                  href="https://twitter.com/EGDCenter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="w-6 h-6" src={twitter} alt="twitter" />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="text-center text-xl">
          <h3>Economic & Business Strategies Ltd</h3>
          <p className="text-xl">&copy; EBS {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};
