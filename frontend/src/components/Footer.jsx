import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 text-sm my-10 mt-40">
      <div>
        <img src={assets.logo} className="w-32 mb-5" alt=""></img>
        <p className="text-gray-600 w-full md:w-2/3">
        ForeverBuy: Revolutionizing Clothing E-Commerce<br/><br/>
        ForeverBuy is a modern clothing e-commerce platform that aims to provide an unparalleled shopping experience. With a curated selection of stylish and affordable fashion, ForeverBuy caters to a diverse audience, offering a seamless blend of quality, variety, and convenience.
        </p>
      </div>

      <div>
        <p className="text-xl font-medium mb-5">COMPANY</p>
        <ul className="flex flex-col text-gray-600 gap-1">
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
        </ul>
      </div>

      <div>
        <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
        <ul className="flex flex-col text-gray-600 gap-1">
          <li>+(415) 555-0132</li>
          <li>foreverBuy@gmail.com</li>
        </ul>
      </div>
      
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ forever.com - All Right Reserved.
        </p>
      </div>
      </div>
  );
};

export default Footer;
