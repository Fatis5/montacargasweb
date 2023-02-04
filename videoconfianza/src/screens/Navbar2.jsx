import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import vc from "../media/vc.jpeg";
import IconCart from "../littleComponents/IconCart";

function Navbar2(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex ">
                <Link className="flex justify-center mr-10" to="/">
                  <div className="flex flex-row">
                    <img
                      src={vc}
                      className="mr-3 h-7 sm:h-9 justify-start"
                      alt="VC Logo"
                    />
                    <span
                      className="flex  whitespace-nowrap text-4xl  dark:text-white justify-center mr-5 "
                      style={{ fontFamily: "Harlekin" }}
                    >
                      Video confianza
                    </span>
                    
                 
                  </div>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-52 flex items-baseline space-x-4">
                  <Link
                    className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    to="/"
                  >
                    Inicio
                  </Link>

                  <Link
                    className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    to="/servicios"
                  >
                    Servicios
                  </Link>

                  <Link
                    className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    to="/contacto"
                  >
                    Contacto
                  </Link>

                  <Link
                    className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    to="/testimonios"
                  >
                    Testimonios
                  </Link>

                  <Link
                    className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    to="/tienda"
                  >
                    Tienda
                  </Link>
                </div>
              </div>
            </div>
            <div className="mx-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900  inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 mx-auto justify-center bg-gray-50  flex flex-col"
              >
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  className=" bg-blue-300 mx-auto w-11/12 text-center  text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-3xl font-medium"
                  to="/"
                >
                  Inicio
                </Link>

                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  className=" bg-blue-300 mx-auto w-11/12 text-center  text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-3xl font-medium"
                  to="/servicios"
                >
                  Servicios
                </Link>

                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  className=" bg-blue-300 mx-auto w-11/12 text-center  text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-3xl font-medium"
                  to="/contacto"
                >
                  Contacto
                </Link>
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  className=" bg-blue-300 mx-auto w-11/12 text-center  text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-3xl font-medium"
                  to="/testimonios"
                >
                  Testimonios
                </Link>

                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  className=" bg-blue-300 mx-auto w-11/12 text-center  text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-3xl font-medium"
                  to="/tienda"
                >
                  Tienda
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar2;
