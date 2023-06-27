import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
// import Logo from "../public/streamlineLogo.png";
import Link from "next/link";


function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<nav className=" font-inter fixed w-full z-10 bg-[#e8f1f2]">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  mx-20  justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<image className="ml-10 object-center mt-1 p-2 xl:h-[60px] xl:w-[60px] h-[60px] w-[60px]" 
                src="/new_logo.png"/>
                <h1 className=" xl:visible text-center font-bold xl:text-3xl cursor-pointer text-lg">
                Live<span className="text-blue-500">Auction</span> 
								</h1>
							</div>
                            
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link href='/'
										className="cursor-pointer text-blue-500 font-semibold px-3 py-2 text-md hover:font-black"
									>	
										Home
									</Link>
									<Link
										href='#About'
										className="cursor-pointer hover:bg-blue-500 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										About
									</Link>
									

									<Link
										href='/courses'
										className="cursor-pointer hover:bg-blue-500 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Courses
									</Link>
									<Link
										href='#About'
										className="cursor-pointer hover:bg-blue-500 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Live Classes
									</Link>
									<Link
										href='#About'
										className="cursor-pointer hover:bg-blue-500 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										NCERT Solutions
									</Link>

									<Link
										href='#contact'
										className="cursor-pointer bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black"
									>
										Contact
									</Link>
								</div>
							</div>
						</div>
						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
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
								className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
							>
								<Link
									href='#Homeo'
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Home
								</Link>
								<Link
									href='#About'
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									About
								</Link>

								
								<Link
									href='#services'
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Services
								</Link>

								<Link
									href="#contact"
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Contact
								</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Navbar;
