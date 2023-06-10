import { Link } from "react-router-dom";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
  AiFillHeart,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-dark-hard">
      <div className="container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10">
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-text font-bold md:text-lg">Products</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <Link to="/">Landingpage</Link>
            </li>
            <li>
              <Link to="/">Features</Link>
            </li>
            <li>
              <Link to="/">Documentation</Link>
            </li>
            <li>
              <Link to="/">Referral Program</Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-text font-bold md:text-lg">Services</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <Link to="/">Documentation</Link>
            </li>
            <li>
              <Link to="/">Design</Link>
            </li>
            <li>
              <Link to="/">Themes</Link>
            </li>
            <li>
              <Link to="/">Illustrations</Link>
            </li>
            <li>
              <Link to="/">UI Kit</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto">
          <h3 className="text-dark-text font-bold md:text-lg">Company</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Terms</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Careers</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-text font-bold md:text-lg">More</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <Link to="/">Documentation</Link>
            </li>
            <li>
              <Link to="/">License</Link>
            </li>
            <li>
              <Link to="/">Changelog</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-10 md:order-first md:col-span-4 lg:col-span-2">
          <Link to="/">
            <h2 className="font-extrabold text-2xl text-white whitespace-nowrap text-center md:text-left">
              Tech Articles
            </h2>
          </Link>
          <p className="text-dark-text text-sm text-center mt-4 md:text-left">
            Enjoy new articles about tech and science
          </p>
          <ul className="flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start">
            <li>
              <Link to="/">
                <AiOutlineTwitter className="w-6 h-auto" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaFacebook className="w-6 h-auto" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <AiFillYoutube className="w-6 h-auto" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <AiFillInstagram className="w-6 h-auto" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col items-center space-y-5 md:col-span-12 mt-20 lg:col-span-10">
          <div className="bg-primary text-white p-3 rounded-full">
            <AiFillHeart className="w-7 h-auto" />
          </div>
          <p className="font-bold italic text-dark-text">
            Copyright © 2023. Crafted with love.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
