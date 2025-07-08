// Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [aboutDropdown, setAboutDropdown] = useState(false);
    const [programsDropdown, setProgramsDropdown] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#FFFCF0] shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <Link to="/" className="text-blue-800 text-xl font-bold hover:text-blue-900 transition-colors">
                    Home of Hope
                </Link>

                {/* Navigation Links */}
                <nav className="flex gap-4">
                    {/* ABOUT Dropdown */}
                    <div className="relative group">
                        <button
                            className="flex items-center gap-1 px-4 py-2 border border-blue-800 text-blue-800 hover:bg-blue-50 uppercase transition-colors"
                            onMouseEnter={() => setAboutDropdown(true)}
                            onMouseLeave={() => setAboutDropdown(false)}
                        >
                            About
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* About Dropdown Menu */}
                        {aboutDropdown && (
                            <div
                                className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-50"
                                onMouseEnter={() => setAboutDropdown(true)}
                                onMouseLeave={() => setAboutDropdown(false)}
                            >
                                <Link to="/about/our-story" className="block px-4 py-2 text-blue-800 hover:bg-blue-50 transition-colors">Our Story</Link>
                                <Link to="/about/mission" className="block px-4 py-2 text-blue-800 hover:bg-blue-50 transition-colors">Our Mission</Link>
                                <Link to="/about/vision" className="block px-4 py-2 text-blue-800 hover:bg-blue-50 transition-colors">Our Vision</Link>
                                <Link to="/about/team" className="block px-4 py-2 text-blue-800 hover:bg-blue-50 transition-colors">Our Team</Link>
                                <Link to="/about/impact" className="block px-4 py-2 text-blue-800 hover:bg-blue-50 transition-colors">Our Impact</Link>
                            </div>
                        )}
                    </div>

                    {/* PROGRAMS Dropdown */}
                    <div className="relative group">
                        <button
                            className="flex items-center gap-1 px-4 py-2 border border-blue-800 text-blue-800 hover:bg-blue-50 uppercase transition-colors"
                            onMouseEnter={() => setProgramsDropdown(true)}
                            onMouseLeave={() => setProgramsDropdown(false)}
                        >
                            Programs
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Programs Dropdown Menu */}
                        {programsDropdown && (
                            <div
                                className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-50"
                                onMouseEnter={() => setProgramsDropdown(true)}
                                onMouseLeave={() => setProgramsDropdown(false)}
                            >
                                <Link to="/programs/education" className="block px-4 py-2 text-blue-800 hover:bg-blue-50 transition-colors">Education</Link>
                                <Link to="/programs/orphanage" className="block px-4 py-2 text-blue-800 hover:bg-blue-50 transition-colors">Orphanage Care</Link>
                                <Link to="/programs/empowerment" className="block px-4 py-2 text-blue-800 hover:bg-blue-50 transition-colors">Empowerment Projects</Link>
                                <Link to="/programs/healthcare" className="block px-4 py-2 text-blue-800 hover:bg-blue-50 transition-colors">Healthcare</Link>
                                <Link to="/programs/community" className="block px-4 py-2 text-blue-800 hover:bg-blue-50 transition-colors">Community Development</Link>
                            </div>
                        )}
                    </div>

                    {/* Other Links */}
                    <Link to="/news" className="px-4 py-2 border border-blue-800 text-blue-800 hover:bg-blue-50 uppercase transition-colors">News</Link>
                    <Link to="/services" className="px-4 py-2 border border-blue-800 text-blue-800 hover:bg-blue-50 uppercase transition-colors">Services</Link>
                    <Link to="/benefits" className="px-4 py-2 border border-blue-800 text-blue-800 hover:bg-blue-50 uppercase transition-colors">Benefits</Link>
                    <Link to="/donate" className="px-4 py-2 bg-orange-500 text-white hover:bg-orange-600 uppercase transition-colors">Donate</Link>
                    <Link to="/contact" className="px-4 py-2 bg-blue-800 text-white hover:bg-blue-900 uppercase transition-colors">Contact</Link>
                </nav>
            </div>
        </header>
    );
}
