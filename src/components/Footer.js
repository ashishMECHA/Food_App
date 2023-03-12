import React from "react";
const Footer = () => {
  return (
    <div className="z-20 w-full bg-gray-900 border-t border-gray-400 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-400 sm:text-center dark:text-gray-400">
        Created by Ashish
        <a href="#" className="hover:underline">
          © 2023
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-1 text-sm text-gray-400 dark:text-gray-800 sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Footer;
