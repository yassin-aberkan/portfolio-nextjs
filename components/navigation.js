import { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, MailIcon } from "@heroicons/react/outline";
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import { useRouter } from 'next/router';

export default function Navigation() {
  const router = useRouter();
  return (
    <Popover className="w-full z-10">
      <div className="max-w-9xl mx-auto px-4 sm:px-10">
        <div className="flex justify-between items-center h-20 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1 items-center space-x-5">
            <a href="#">
            <span className="sr-only">Workflow</span>
            <div className="text-3xl font-bold">
            Yass
              </div>
            </a>
              
          </div>
          <div className="-mr-2 -my-2 md:hidden 2xl:visible">
            <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray hover:bg-gray-200 focus:outline-none">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Link href="/">
              <a className={`text-base font-medium ${router.pathname == "/" ? "text-black" : "text-gray-500"} hover:text-black`}>
                Home
              </a>
            </Link>
            <Link href="#services">
              <a className={`text-base font-medium ${router.pathname == "/about" ? "text-black" : "text-gray-500"} hover:text-black`}>
                Skills
              </a>
            </Link>
            
            <Link href="#projects">
              <a className={`text-base font-medium  ${router.pathname == "/contact" ? "text-black" : "text-gray-500"} hover:text-black`}>
                Projects
              </a>
            </Link>

            <Link href="#contact">
              <a className={`text-base font-medium  ${router.pathname == "/contact" ? "text-black" : "text-gray-500"} hover:text-black`}>
                Contact
              </a>
            </Link>
          </Popover.Group>
          <div className="hidden md:flex items-center space-x-5 justify-end md:flex-1 lg:w-0">
          <a
                href="https://linkedin.com"
                className="whitespace-nowrap text-base font-medium text-black hover:text-gray-600"
                target="_blank" rel="noopener noreferrer"
                >
                    <FaLinkedin className="text-2xl hover:text-gray-600"/>
            </a>
            <a
                href="https://github.com/yassin-aberkan"
                className="whitespace-nowrap text-base font-medium text-black hover:text-gray-600"
                target="_blank" rel="noopener noreferrer"
                >
                    <FaGithub className="text-2xl hover:text-gray-600"/>
            </a>
            <a
                href="mailto:yaberkan.pro@gmail.com"
                className="whitespace-nowrap text-base font-medium text-black hover:text-gray-600"
                target="_blank" rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
            </a>
            
            <a
                href="tel:+32488617908"
                className="whitespace-nowrap text-base font-medium text-black hover:text-gray-600"
                target="_blank" rel="noopener noreferrer"
                >
                +32 488 617 908
            </a>
          
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 color-bg-mid divide-y-2 divide-b-800">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <div className="text-base font-medium text-black hover:text-black">
                  <span  className="text-xl">Yassin Aberkan</span>
                </div>
              </a>
                <div className="">
                  <Popover.Button className="bg-gray-200 rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-black hover:bg-gray-300 focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                <Link href="#services">
                <a
                  className="text-base font-medium text-black hover:text-gray-400"
                >
                  Skills
                </a>
                </Link>
                <Link href="#projects">
                <a
                  className="text-base font-medium text-black hover:text-gray-400"
                >
                  Projects
                </a>
                </Link>
                <Link href="#contact">
                  <a className="text-base font-medium text-black hover:text-gray-400">
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}