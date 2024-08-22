import React, { useState, useEffect, Fragment } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdMenu,
  IoMdClose,
} from "react-icons/io";
import { XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/LOGO ORIGINAL GREEN.png";
import logoImg from "../../assets/127_arrow_icon_logo_with_3d_modern_style copy 7.png";
import Button from "../Button/Button";
import PopUpForm from "../PopUpForm/PopUpForm";
import "react-quill/dist/quill.snow.css";
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false); // State to control Company dropdown
  const navigate = useNavigate();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [exploreMenuOpen, setExploreMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false); // New State for Services Dropdown
  const [teamMenuOpen, setTeamMenuOpen] = useState(false);
  const [newDropdownOpen, setNewDropdownOpen] = useState(false); // State for the new dropdown
    useEffect(() => {
      setMobileMenuOpen(false); // Close the mobile menu on route change
    }, [location]);


  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const handleExploreClick = () => {
    setExploreMenuOpen(!exploreMenuOpen);
  };

  const handleServicesClick = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  return (
    <>
      <nav className="pt-5 absolute z-[1000] top-0 w-full">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center sm:justify-between lg:justify-center justify-between">
            <div className="flex">
              {/* Logo */}
              <div className="flex items-center md:pt-3 lg:pt-3">
                <Link to="/" className="flex items-center">
                  <img
                    className="block lg:hidden"
                    src={logoImg}
                    alt="Logo"
                    style={{ height: "64px", width: "auto" }}
                  />
                  <img
                    className="block lg:hidden"
                    src={logo}
                    alt="Logo"
                    style={{
                      height: "28px",
                      width: "auto",
                      marginLeft: "-10px",
                    }}
                  />
                </Link>
                <Link to="/" className="flex items-center">
                  <img
                    className="hidden lg:block"
                    src={logoImg}
                    alt="Logo"
                    style={{ height: "80px", width: "auto" }}
                  />
                  <img
                    className="hidden lg:block"
                    src={logo}
                    alt="Logo"
                    style={{
                      height: "40px",
                      width: "auto",
                      marginLeft: "-10px",
                    }}
                  />
                </Link>
              </div>

              {/* Navigation Links */}
              <div className="hidden sm:-my-px sm:ml-8 sm:flex sm:space-x-8">
                <Link
                  to="/pricing"
                  className="flex uppercase items-center justify-center gap-x-1.5 text-sm font-medium cursor-pointer leading-5 text-white hover:text-gray-300 hover:border-gray-300 focus:outline-none focus:text-gray-300 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  Pricing
                </Link>
                <div
                  className="navlinks uppercase relative flex items-center justify-center gap-x-1.5 text-sm font-medium leading-5 text-white hover:text-gray-300 hover:border-gray-300 focus:outline-none focus:text-gray-300 focus:border-gray-300 transition duration-150 ease-in-out"
                  onMouseEnter={() => setShowCompanyDropdown(true)}
                  onMouseLeave={() => setShowCompanyDropdown(false)}
                >
                  <Link to="/solutions" className="flex items-center">
                    Solutions
                  </Link>
                </div>

                {/* Services Dropdown */}
                <div
                  className="relative flex items-center"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    to="/services"
                    className="uppercase flex items-center justify-center gap-x-1.5 text-sm font-medium leading-5 text-white hover:text-gray-300 focus:outline-none transition duration-150 ease-in-out"
                  >
                    Services{" "}
                    {servicesDropdownOpen ? (
                      <IoIosArrowUp className="w-8 h-4" />
                    ) : (
                      <IoIosArrowDown className="w-8 h-4" />
                    )}
                  </Link>
                  {servicesDropdownOpen && (
                    <div className="absolute left-[-30%] mt-[100%] rounded-md w-[150%] bg-white shadow-lg z-50">
                      <Link
                        to="/services/drop-down"
                        className="block px-4 py-2 text-[16px] text-gray-700 rounded-md hover:bg-gray-100"
                      >
                        Services
                      </Link>
                    </div>
                  )}
                </div>

                {/* New Dropdown */}
                <div className="relative flex items-center">
                  <button
                    onClick={() => setNewDropdownOpen(!newDropdownOpen)}
                    className="uppercase flex items-center justify-center gap-x-1.5 text-sm font-medium leading-5 text-white hover:text-gray-300 focus:outline-none transition duration-150 ease-in-out"
                  >
                    Explore{" "}
                    {newDropdownOpen ? (
                      <IoIosArrowUp className="w-8 h-4" />
                    ) : (
                      <IoIosArrowDown className="w-8 h-4" />
                    )}
                  </button>
                  {newDropdownOpen && (
                    <div className="absolute left-[-30%] mt-[150%] rounded-md w-[150%] bg-white shadow-lg z-50">
                      <Link
                        to="/company"
                        className="block px-4 py-2 text-[16px] text-gray-700 rounded-md hover:bg-gray-100"
                      >
                        Company
                      </Link>
                      <Link
                        to="/company/team-page"
                        className="block px-4 py-2 text-md text-gray-700 rounded-md hover:bg-gray-100"
                      >
                        Team
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/about-us-page"
                  className="flex uppercase items-center justify-center gap-x-1.5 text-sm font-medium leading-5 text-white hover:text-gray-300 hover:border-gray-300 focus:outline-none focus:text-gray-300 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  About Us
                </Link>
              </div>
            </div>

            <div className="hidden sm:flex sm:items-center sm:ml-6 gap-x-3">
              <Button
                onClick={() => setOpen(true)}
                className="px-4 py-2.5 text-sm font-semibold text-white bg-transparent hover:bg-gray-700 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase"
              >
                Book A Call
              </Button>
              <Button
                onClick={() => navigate("/signin")}
                className="px-8 py-2.5 text-sm font-semibold text-gray-200 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full hover:from-cyan-600 hover:to-cyan-500 hover:text-white focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase"
              >
                Sign In
              </Button>
            </div>

            <div className="flex items-center text-white sm:hidden">
              <button onClick={handleMobileMenuToggle}>
                {mobileMenuOpen ? (
                  <IoMdClose className="w-5 h-5" />
                ) : (
                  <IoMdMenu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden px-2 pt-2 pb-3 space-y-1 bg-[#0a1a28] transition-transform transform duration-300 ease-in-out">
            <Link
              to="/pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/solutions"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </Link>
            <button
              onClick={handleServicesClick}
              className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700"
            >
              Services
              {servicesDropdownOpen ? (
                <IoIosArrowUp className="text-white" size={20} />
              ) : (
                <IoIosArrowDown className="text-white" size={20} />
              )}
            </button>
            {servicesDropdownOpen && (
              <div className="pl-5 mt-2 space-y-1 transition-transform transform duration-300 ease-in-out">
                <Link
                  to="/services/drop-down"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700"
                >
                  Services
                </Link>
              </div>
            )}
            <button
              onClick={handleExploreClick}
              className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700"
            >
              Explore
              {exploreMenuOpen ? (
                <IoIosArrowUp className="text-white" size={20} />
              ) : (
                <IoIosArrowDown className="text-white" size={20} />
              )}
            </button>
            {exploreMenuOpen && (
              <div className="pl-5 mt-2 space-y-1 transition-transform transform duration-300 ease-in-out">
                <Link
                  to="/company"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700"
                >
                  Company
                </Link>
                <Link
                  to="/company/team-page"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700"
                >
                  Team
                </Link>
              </div>
            )}
            <Link
              to="/about-us-page"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="w-full px-4 py-2.5 text-sm font-semibold text-white bg-transparent hover:bg-gray-700 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase"
            >
              Book A Call
            </button>
            <button
              onClick={() => navigate("/signin")}
              className="w-full px-8 py-2.5 text-sm font-semibold text-gray-200 rounded-full bg-gradient-to-r from-[#2EABAF] to-[#15B8C7] hover:text-white focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase"
            >
              Sign In
            </button>
          </div>
        )}
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-[10000]" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-3xl ring-1 ring-gray-300 bg-[#0B1A28CC] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-32 sm:w-full sm:max-w-6xl sm:p-6">
                    <div className="absolute right-0 top-0 p-4">
                      <button
                        type="button"
                        className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="flex justify-center items-center pt-20">
                      <div>
                        <div className="text-center text-[#fff]">
                          <h1 className="text-[80px] font-[400] font-tek leading-tight">
                            SEND PROJECT BRIEF
                          </h1>
                          <p className="-pt-4">
                            We can tailor the perfect video experience for your
                            studio, give us a hi:
                          </p>
                        </div>
                        {/* Form components on the right */}
                        <div className="max-w-4xl text-white">
                          <PopUpForm />
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </nav>
    </>
  );
};

export default Navbar;
