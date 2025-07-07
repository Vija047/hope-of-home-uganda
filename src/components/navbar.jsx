// Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#FFFCF0] shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="text-blue-800 text-xl ">
                    home of hope
                </div>

                {/* Navigation Links */}
                <nav className="flex gap-4">
                    {/* ABOUT Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 px-4 py-2 border border-blue-800 text-blue-800 hover:bg-blue-50 uppercase">
                            About
                            <svg
                                className="w-3 h-3 ml-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.295l3.71-4.065a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        <div className="absolute left-0 mt-2 w-56 bg-white text-black shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
                            <Link to="/ediths-story" className="block px-4 py-2 hover:bg-gray-100">Edith's Story</Link>
                            <Link to="/staff" className="block px-4 py-2 hover:bg-gray-100">Meet Our Staff</Link>
                            <Link to="/mission" className="block px-4 py-2 hover:bg-gray-100">Our Mission</Link>
                            <Link to="/vision" className="block px-4 py-2 hover:bg-gray-100">Our Vision</Link>
                            <Link to="/support" className="block px-4 py-2 hover:bg-gray-100">Our Need for Support</Link>
                        </div>
                    </div>

                    {/* PROGRAMS Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 px-4 py-2 border border-blue-800 text-blue-800 hover:bg-blue-50 uppercase">
                            Programs
                            <svg
                                className="w-3 h-3 ml-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.295l3.71-4.065a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        <div className="absolute left-0 mt-2 w-72 bg-white text-black shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
                            <Link to="/center-care" className="block px-4 py-2 hover:bg-gray-100">Center Based Therapy and Care</Link>
                            <Link to="/assessment" className="block px-4 py-2 hover:bg-gray-100">Assessment and Outreach Clinics</Link>
                            <Link to="/home-visits" className="block px-4 py-2 hover:bg-gray-100">Home and Follow-up Visits</Link>
                            <Link to="/epilepsy" className="block px-4 py-2 hover:bg-gray-100">Epilepsy Medication</Link>
                            <Link to="/adaptive-aids" className="block px-4 py-2 hover:bg-gray-100">Adaptive Aids</Link>
                            <Link to="/drop-in" className="block px-4 py-2 hover:bg-gray-100">Drop-in Clinics</Link>
                            <Link to="/corrective-surgery" className="block px-4 py-2 hover:bg-gray-100">Support for Corrective Surgery</Link>
                            <Link to="/nutrition" className="block px-4 py-2 hover:bg-gray-100">Nutrition Support</Link>
                            <Link to="/income-activities" className="block px-4 py-2 hover:bg-gray-100">Income Generating Activities</Link>
                            <Link to="/training" className="block px-4 py-2 hover:bg-gray-100">Training Workshops</Link>
                            <Link to="/child-sponsorship" className="block px-4 py-2 hover:bg-gray-100">Child School Sponsorship</Link>
                        </div>
                    </div>

                    {/* Other Links */}
                    <Link to="/news" className="px-4 py-2 border border-blue-800 text-blue-800 hover:bg-blue-50 uppercase">News</Link>
                    <Link to="/services" className="px-4 py-2 border border-blue-800 text-blue-800 hover:bg-blue-50 uppercase">Services</Link>
                    <Link to="/benefits" className="px-4 py-2 border border-blue-800 text-blue-800 hover:bg-blue-50 uppercase">Benefits</Link>
                    <Link to="/contact" className="px-4 py-2 bg-blue-800 text-white hover:bg-blue-900 uppercase">Contact</Link>
                </nav>
            </div>
        </header>
    );
}
