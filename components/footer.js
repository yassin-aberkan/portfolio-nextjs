import Link from "next/link";

import { FaGithub, FaLinkedin } from 'react-icons/fa';
export default function footer({}) {
  return (
    <div className="text-center z-50">
      <div className=" footer-height flex justify-center px-4 text-gray-100 bg-black">
        <div className="container py-6">
          <div className="flex flex-col items-center justify-between  md:flex-row">
            <div>
              <a href="#" className="font-bold text-white">
                <span  className="text-xl">Yass </span><span className="text-lg">Portfolio</span>
              </a>
            </div>
            <span className="text-gray-400">YASS © 2022</span>
            <div className="flex mt-4 md:m-0">
              <div className="-mx-4">
              <div className="hidden md:flex items-center space-x-5 justify-end md:flex-1 lg:w-0">
          <a
                href="https://linkedin.com"
                className="whitespace-nowrap text-base font-medium text-white hover:text-gray-200"
                target="_blank" rel="noopener noreferrer"
                >
                    <FaLinkedin className="text-2xl hover:text-gray-200"/>
            </a>
            <a
                href="https://github.com/yassin-aberkan"
                className="whitespace-nowrap text-base font-medium text-white hover:text-gray-200"
                target="_blank" rel="noopener noreferrer"
                >
                    <FaGithub className="text-2xl hover:text-gray-200"/>
            </a>
            
            <a
                href="tel:+32488617908"
                className="whitespace-nowrap text-base font-medium text-white hover:text-gray-200"
                target="_blank" rel="noopener noreferrer"
                >
                +32 488 617 908
            </a>
          
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg {
          background-image: linear-gradient(to top, #000000, #0b0303, #130704, #180c02, #1a1100);
        }
      `}</style>
    </div>
  );
}