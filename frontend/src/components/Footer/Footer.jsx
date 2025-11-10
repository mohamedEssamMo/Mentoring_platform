import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.youtube.com/c/CodingWithMuhib",
    icon: (
      <AiFillYoutube className="group-hover:text-white w-5 h-5 text-headingColor" />
    ),
    title: "CodingWithMuhib",
  },
  {
    path: "https://github.com/mohamedEssamMo",
    icon: (
      <AiFillGithub className="group-hover:text-white w-5 h-5 text-headingColor" />
    ),
    title: "Mohamed Essam",
  },
  {
    path: "https://github.com/constellationCoder",
    icon: (
      <AiFillGithub className="group-hover:text-white w-5 h-5 text-headingColor" />
    ),
    title: "Abdelrhman Magdy",
  },
  {
    path: "https://github.com/Nouransaid",
    icon: (
      <AiFillGithub className="group-hover:text-white w-5 h-5 text-headingColor" />
    ),
    title: "Nouran Said",
  },
];

const quickLinks01 = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About Us" },
  { path: "/services", display: "Services" },
  { path: "/blog", display: "Blog" },
];

const quickLinks02 = [
  { path: "/mentors", display: "Find Mentor" },
  { path: "/login", display: "Login" },
  { path: "/register", display: "Register" },
];

const quickLinks03 = [
  { path: "/contact", display: "Suggestions" },
  { path: "/contact", display: "Contact Us" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-5 pt-10 bg-primaryColor">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Main Info Section */}
          <div className="md:col-span-2 lg:col-span-3">
            <img src={logo} alt="DEPI Logo" className="w-52" />
            <p className="mt-4 text-sm leading-7 font-medium pr-3 text-white">
              A mentorship platform that uses guided sessions, information
              sharing, and practical experience to close the gap between
              professionals and learners. It connects novices with
              professionals, boosts their self-esteem, and develops their
              abilities for a prosperous career path.
            </p>

            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  title={link.title}
                  className="w-9 h-9 border border-[#181A1E] rounded-full flex items-center justify-center group bg-white hover:bg-headingColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links 01 */}
          <div className="lg:col-span-1 md:col-span-1">
            <h2 className="text-[20px] leading-[30px] font-[800] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-white text-[16px] leading-7 font-[400] hover:text-headingColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links 02 */}
          <div className="lg:col-span-1 md:col-span-1">
            <h2 className="text-[20px] leading-[30px] font-[800] mb-6 text-headingColor">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-white text-[16px] leading-7 font-[400] hover:text-headingColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links 03 */}
          <div className="lg:col-span-1 md:col-span-1">
            <h2 className="text-[20px] leading-[30px] font-[800] mb-6 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-white text-[16px] leading-7 font-[400] hover:text-headingColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p className="text-white text-center mt-5 text-[14px] leading-7 font-[400]">
        Copyright &copy; {year} All rights reserved by{" "}
        <span className="font-semibold text-white">
          DEPI round 3 ALX3_SWD2_S3 Team 4
        </span>{" "}
        (ref. Muhibur Rahman).
      </p>
    </footer>
  );
};

export default Footer;
