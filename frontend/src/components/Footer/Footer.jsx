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
    icon: <AiFillYoutube className="w-5 h-5" />,
    title: "CodingWithMuhib",
    color: "bg-red-600",
  },
  {
    path: "https://github.com/mohamedEssamMo",
    icon: <AiFillGithub className="w-5 h-5" />,
    title: "Mohamed Essam",
    color: "bg-black",
  },
  {
    path: "https://github.com/constellationCoder",
    icon: <AiFillGithub className="w-5 h-5" />,
    title: "Abdelrhman Magdy",
    color: "bg-black",
  },
  {
    path: "https://github.com/Nouransaid",
    icon: <AiFillGithub className="w-5 h-5" />,
    title: "Nouran Said",
    color: "bg-black",
  },
];

const quickLinks01 = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About Us" },
  { path: "/services", display: "Services" },
  { path: "/blog", display: "Blog" },
];

const quickLinks02 = [
  { path: "/mentors", display: "Find a Mentor" },
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
    <footer className="bg-gradient-to-r from-primaryColor to-[#00133f] text-white pt-12 pb-6">
      <div className="container mx-auto grid md:grid-cols-4 lg:grid-cols-6 gap-8">
        {/* Main Info Section */}
        <div className="md:col-span-2 lg:col-span-3">
          <img src={logo} alt="DEPI Logo" className="w-52 mb-3" />
          <p className="text-sm leading-7 font-medium text-white">
            DEPI is a mentorship platform bridging learners with professionals.
            Gain guidance, confidence, and practical skills for a successful
            career.
          </p>
          <div className="flex items-center gap-4 mt-5">
            {socialLinks.map((link, index) => (
              <a
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                title={link.title}
                className={`w-10 h-10 flex items-center justify-center rounded-full text-white hover:scale-110 transition-transform duration-300 ${link.color}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-6 text-white">Quick Links</h2>
          <ul>
            {quickLinks01.map((item, index) => (
              <li key={index} className="mb-3">
                <Link
                  to={item.path}
                  className="hover:text-yellow-400 transition-colors text-[16px] font-medium"
                >
                  {item.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-6 text-white">I want to:</h2>
          <ul>
            {quickLinks02.map((item, index) => (
              <li key={index} className="mb-3">
                <Link
                  to={item.path}
                  className="hover:text-yellow-400 transition-colors text-[16px] font-medium"
                >
                  {item.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-6 text-white">Support</h2>
          <ul>
            {quickLinks03.map((item, index) => (
              <li key={index} className="mb-3">
                <Link
                  to={item.path}
                  className="hover:text-yellow-400 transition-colors text-[16px] font-medium"
                >
                  {item.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-center mt-10 text-sm">
        &copy; {year} DEPI. All rights reserved. Developed by{" "}
        <span className="font-semibold hover:text-yellow-400 transition-colors">
          DEPI Team 4
        </span>{" "}
        (ref. Muhibur Rahman)
      </p>
    </footer>
  );
};

export default Footer;
