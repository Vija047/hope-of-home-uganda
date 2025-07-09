import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function NavbarFunctional() {
    const [aboutDropdown, setAboutDropdown] = useState(false);
    const [programsDropdown, setProgramsDropdown] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Function to handle smooth scrolling to sections
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80; // Account for fixed navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        setMobileMenuOpen(false);
        setAboutDropdown(false);
        setProgramsDropdown(false);
    };

    // Function to handle navigation - either scroll to section or navigate to route
    const handleNavigation = (path, sectionId = null) => {
        if (location.pathname === '/' && sectionId) {
            // If we're on home page and have a section ID, scroll to it
            scrollToSection(sectionId);
        } else if (sectionId) {
            // If we're not on home page but need to go to a section, navigate to home first
            navigate('/');
            setTimeout(() => {
                scrollToSection(sectionId);
            }, 100);
        } else if (path) {
            // If only a path is provided, navigate to that path
            navigate(path);
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white  ">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <Link to="/" className="text-[#1B3F92] text-2xl font-bold  hover:text-blue-900 transition-colors">
                    Home of Hope
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-[#1B3F92] hover:text-blue-900 transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex gap-2">
                    {/* HOME */}
                    <button
                        onClick={() => handleNavigation('/', 'home')}
                        className="px-4 py-2 border border-[#1B3F92] text-[#1B3F92] hover:bg-[#1B3F92] hover:text-white uppercase transition-colors rounded"
                    >
                        Home
                    </button>

                    {/* ABOUT Dropdown */}
                    <div className="relative group">
                        <button
                            className="flex items-center gap-1 px-4 py-2 border border-[#1B3F92] text-[#1B3F92] hover:bg-[#1B3F92] hover:text-white uppercase transition-colors rounded"
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
                                <button
                                    onClick={() => handleNavigation('/', 'our-story')}
                                    className="block w-full text-left px-4 py-2 text-[#1B3F92] hover:bg-blue-50 transition-colors"
                                >
                                    Our Story
                                </button>
                                <button
                                    onClick={() => handleNavigation('/', 'our-mission')}
                                    className="block w-full text-left px-4 py-2 text-[#1B3F92] hover:bg-blue-50 transition-colors"
                                >
                                    Our Mission
                                </button>
                                <button
                                    onClick={() => handleNavigation('/', 'our-vision')}
                                    className="block w-full text-left px-4 py-2 text-[#1B3F92] hover:bg-blue-50 transition-colors"
                                >
                                    Our Vision
                                </button>
                                <button
                                    onClick={() => handleNavigation('/', 'our-team')}
                                    className="block w-full text-left px-4 py-2 text-[#1B3F92] hover:bg-blue-50 transition-colors"
                                >
                                    Our Team
                                </button>
                                <button
                                    onClick={() => handleNavigation('/', 'supporters')}
                                    className="block w-full text-left px-4 py-2 text-[#1B3F92] hover:bg-blue-50 transition-colors"
                                >
                                    Our Impact
                                </button>
                            </div>
                        )}
                    </div>

                    {/* PROGRAMS Dropdown */}
                    <div className="relative group">
                        <button
                            className="flex items-center gap-1 px-4 py-2 border border-[#1B3F92] text-[#1B3F92] hover:bg-[#1B3F92] hover:text-white uppercase transition-colors rounded"
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
                                <button
                                    onClick={() => handleNavigation('/', 'current-projects')}
                                    className="block w-full text-left px-4 py-2 text-[#1B3F92] hover:bg-blue-50 transition-colors"
                                >
                                    Current Projects
                                </button>
                                <button
                                    onClick={() => handleNavigation('/', 'our-mission')}
                                    className="block w-full text-left px-4 py-2 text-[#1B3F92] hover:bg-blue-50 transition-colors"
                                >
                                    Healthcare
                                </button>
                                <button
                                    onClick={() => handleNavigation('/', 'our-support')}
                                    className="block w-full text-left px-4 py-2 text-[#1B3F92] hover:bg-blue-50 transition-colors"
                                >
                                    Support Programs
                                </button>
                                <button
                                    onClick={() => handleNavigation('/', 'about')}
                                    className="block w-full text-left px-4 py-2 text-[#1B3F92] hover:bg-blue-50 transition-colors"
                                >
                                    Community Development
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Other Links */}
                    <button
                        onClick={() => handleNavigation('/news')}
                        className="px-4 py-2 border border-[#1B3F92] text-[#1B3F92] hover:bg-[#1B3F92] hover:text-white uppercase transition-colors rounded">
                        News
                    </button>

                    <button
                        onClick={() => handleNavigation('/reports')}
                        className="px-4 py-2 border border-[#1B3F92] text-[#1B3F92] hover:bg-[#1B3F92] hover:text-white uppercase transition-colors rounded">
                        Reports
                    </button>

                    <button
                        onClick={() => handleNavigation('/donation')}
                        className="px-4 py-2  bg-[#1B3F92] text-white hover:bg-blue-900  uppercase transition-colors rounded">
                        Donate
                    </button>
                    <button
                        onClick={() => handleNavigation('/contact')}
                        className="px-4 py-2 bg-[#1B3F92] text-white hover:bg-blue-900 uppercase transition-colors rounded">
                        Contact
                    </button>
                </nav>

                {/* Mobile Navigation Menu */}
                {mobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg md:hidden">
                        <nav className="flex flex-col p-4 space-y-2">
                            <button
                                onClick={() => handleNavigation('/', 'home')}
                                className="text-left px-4 py-2 text-[#1B3F92] hover:bg-blue-50 transition-colors rounded"
                            >
                                Home
                            </button>

                            {/* About Section */}
                            <div className="border-l-2 border-[#1B3F92] pl-4">
                                <p className="font-semibold text-[#1B3F92] mb-2">About</p>
                                <button
                                    onClick={() => handleNavigation('/', 'our-story')}
                                    className="block w-full text-left px-2 py-1 text-[#1B3F92] hover:bg-blue-50 transition-colors rounded text-sm"
                                >
                                    Our Story
                                </button>
                                <button
                                    onClick={() => handleNavigation('/', 'our-mission')}
                                    className="block w-full text-left px-2 py-1 text-[#1B3F92] hover:bg-blue-50 transition-colors rounded text-sm"
                                >
                                    Our Mission
                                </button>
                                <button
                                    onClick={() => handleNavigation('/', 'our-vision')}
                                    className="block w-full text-left px-2 py-1 text-[#1B3F92] hover:bg-blue-50 transition-colors rounded text-sm"
                                >
                                    Our Vision
                                </button>
                                <button
                                    onClick={() => handleNavigation('/', 'our-team')}
                                    className="block w-full text-left px-2 py-1 text-[#1B3F92] hover:bg-blue-50 transition-colors rounded text-sm"
                                >
                                    Our Team
                                </button>
                            </div>

                            {/* Programs Section */}
                            <div className="border-l-2 border-[#1B3F92] pl-4">
                                <p className="font-semibold text-[#1B3F92] mb-2">Programs</p>
                                <button
                                    onClick={() => handleNavigation('/', 'current-projects')}
                                    className="block w-full text-left px-2 py-1 text-[#1B3F92] hover:bg-blue-50 transition-colors rounded text-sm"
                                >
                                    Current Projects
                                </button>
                                <button
                                    onClick={() => handleNavigation('/', 'our-support')}
                                    className="block w-full text-left px-2 py-1 text-[#1B3F92] hover:bg-blue-50 transition-colors rounded text-sm"
                                >
                                    Support Programs
                                </button>
                            </div>

                            <button
                                onClick={() => handleNavigation('/news')}
                                className="px-4 py-2 text-[#1B3F92] hover:bg-blue-50 transition-colors rounded"
                            >
                                News
                            </button>
                            <button
                                onClick={() => handleNavigation('/services')}
                                className="px-4 py-2 text-[#1B3F92] hover:bg-blue-50 transition-colors rounded"
                            >
                                Services
                            </button>
                            <button
                                onClick={() => handleNavigation('/reports')}
                                className="px-4 py-2 text-[#1B3F92] hover:bg-blue-50 transition-colors rounded"
                            >
                                Reports
                            </button>
                            <button
                                onClick={() => handleNavigation('/donation')}
                                className="px-4 py-2 bg-orange-500 text-white hover:bg-orange-600 transition-colors rounded text-center"
                            >
                                Donate
                            </button>
                            <button
                                onClick={() => handleNavigation('/contact')}
                                className="px-4 py-2 bg-[#1B3F92] text-white hover:bg-blue-900 transition-colors rounded text-center"
                            >
                                Contact
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}