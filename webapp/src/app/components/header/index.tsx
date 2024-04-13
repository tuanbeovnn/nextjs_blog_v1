"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import Logo from "../../../assets/images/logo.png";
import SearchIcon from "../../../assets/images/search.png";
import SunnyIcon from "../../../assets/images/sunny.png";
import Image from 'next/image';

const Header = () => {
    const [isDark, setIsDark] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white border-gray-200">
            <div className="flex flex-wrap items-center justify-between max-w-7xl mx-auto md:px-8 px-4 md:py-8 py-2.5 gap-4">
                <a href="/" className="flex items-center">
                    <Image src={Logo} className="md:h-9 h-6" alt="Logo" />
                </a>
                <div className="items-center justify-between hidden w-full text-sm min-[920px]:flex min-[920px]:w-auto">
                    <ul className="flex flex-row gap-10">
                        <li>
                            <Link
                                href="/"
                                className="inline-block text-[#3B3C4A] hover:text-blue-600 text-base"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blog"
                                className="inline-block text-[#3B3C4A] hover:text-blue-600 text-base"
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blog/:id"
                                className="inline-block text-[#3B3C4A] hover:text-blue-600 text-base"
                            >
                                Single Post
                            </Link>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="inline-block text-[#3B3C4A] hover:text-blue-600 text-base"
                            >
                                Pages
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="inline-block text-[#3B3C4A] hover:text-blue-600 text-base"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:flex items-center flex-shrink-0">
                    <form className="relative flex items-center h-8 md:w-40 w-full rounded-md bg-[#F4F4F5]">
                        <input
                            className="w-full h-full outline-none text-sm text-gray-700 pl-4 px-2 pr-2 bg-transparent"
                            type="text"
                            placeholder="Search"
                        />
                        <div className="h-full px-2 flex items-center text-gray-700">
                            <Image src={SearchIcon} className="w-4" alt="search-icon" />
                        </div>
                    </form>

                    <label className="relative inline-flex items-center cursor-pointer ml-10">
                        <input
                            type="checkbox"
                            checked={isDark}
                            onChange={(e) => setIsDark(e.target.checked)}
                            className="sr-only"
                        />
                        <div
                            className={`w-12 inline-flex items-center h-7 p-0.5 rounded-full bg-[#E8E8EA] ${isDark && "bg-blue-600"
                                }`}
                        >
                            <div
                                className={`${isDark && "translate-x-5"
                                    } h-6 w-6 bg-white rounded-full transition-all shadow flex items-center justify-center`}
                            >
                                <Image src={SunnyIcon} className="w-4" alt="toggle dark mode" />
                            </div>
                        </div>
                    </label>
                </div>
                <button
                    onClick={() => setIsOpen(true)}
                    type="button"
                    className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden"
                >
                    <svg
                        aria-hidden="true"
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>

                <div
                    className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform bg-white -translate-x-full  ${isOpen && "translate-x-0"
                        }`}
                >
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center "
                    >
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <div className="py-8 overflow-y-auto">
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog/:id"
                                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                                >
                                    Single Post
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                                >
                                    Pages
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {isOpen && (
                    <div
                        onClick={() => setIsOpen(false)}
                        className="fixed z-20 bg-black/30 h-screen w-full left-0 top-0"
                    ></div>
                )}
            </div>
        </header>
    );
};

export default Header;