import React, { useState } from "react";
import orphagesChild from "../../assets/images/uganda-providence-pg.jpg";
import child01 from "../../assets/images/dontion-images01.png";
import child02 from "../../assets/images/donation-image02.gif";

export default function DonationPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        country: '',
        email: '',
        pledgeAmount: '',
        comment: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    const donationAmounts = [25, 50, 100, 250, 500, 1000];

    return (
        <div className="min-h-screen bg-#FFFFFF">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={orphagesChild}
                        alt="Children at Home of Hope"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/80"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
                    <div className="text-center text-white">

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-white to-purple-300 bg-clip-text text-transparent">
                            Your Kind Donation
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-blue-100">
                            Transform lives and create hope for children in Uganda through your generous support
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#donate-now"
                                className="bg-gradient-to-r from-[#1B3F92] to-blue-600 hover:from-[#16316E] hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                Donate Now
                            </a>
                            <a
                                href="#learn-more"
                                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 border border-white/20 hover:border-white/40"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section id="learn-more" className="py-20 bg-#FFFFFF">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1B3F92] mb-6">
                            Why Your Support Matters
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Thank you for visiting our donation page. <strong className="text-[#1B3F92]">Home of Hope</strong> is a government licensed facility that relies fully on donations from charitable groups and wonderful people like you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#1B3F92] mb-4">Medical Care</h3>
                            <p className="text-gray-700">
                                Many of our children require regular medical visits, surgeries, and treatments to help them grow stronger and healthier.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#1B3F92] mb-4">Education</h3>
                            <p className="text-gray-700">
                                Your support helps provide quality education and learning opportunities for children to build a brighter future.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-teal-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#1B3F92] mb-4">Loving Care</h3>
                            <p className="text-gray-700">
                                Your donation helps us provide the best care possible in a loving and nurturing environment for every child.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Online Donations */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1B3F92] mb-6">
                            Online Donations
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Online donations can be made through either of our sister programs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                            <div className="text-center">
                                <img
                                    src={child01}
                                    alt="Donate through Our Hope International"
                                    className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-300"
                                />
                                <h3 className="text-xl font-bold text-[#1B3F92] mb-4">Our Hope International</h3>
                                <a
                                    href="#"
                                    className="inline-block bg-gradient-to-r from-[#1B3F92] to-blue-600 hover:from-[#16316E] hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                                >
                                    Donate Now
                                </a>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                            <div className="text-center">
                                <img
                                    src={child02}
                                    alt="Donate through Home of Hope Ministries"
                                    className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-300"
                                />
                                <h3 className="text-xl font-bold text-[#1B3F92] mb-4">Home of Hope Ministries</h3>
                                <a
                                    href="#"
                                    className="inline-block bg-gradient-to-r from-[#1B3F92] to-blue-600 hover:from-[#16316E] hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                                >
                                    Donate Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mail-In Donations */}
            <section className="py-20 bg-#FFFFFF">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1B3F92] mb-8">
                        Mail-In Donations
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        Donations can also be made by mailing a cheque or money order to:
                    </p>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg inline-block">
                        <div className="text-lg font-bold text-[#1B3F92] mb-2">
                            Home of Hope Ministries
                        </div>
                        <div className="text-gray-700 space-y-1">
                            <p>2428 Jones Ave. NE</p>
                            <p>Renton, WA 98056</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-6">
                        *Please send your donation pledge with the form below for our planning.
                    </p>
                </div>
            </section>

            {/* Donation Form */}
            <section id="donate-now" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-bold text-[#1B3F92] mb-4">
                                Your Kind Pledge to Home of Hope
                            </h3>
                            <p className="text-xl text-gray-700">Thank you for your generous support!</p>
                        </div>

                        {/* Quick Amount Selection */}
                        <div className="mb-8">
                            <h4 className="text-lg font-semibold text-[#1B3F92] mb-4">Select Amount</h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                                {donationAmounts.map((amount) => (
                                    <button
                                        key={amount}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, pledgeAmount: amount.toString() })}
                                        className={`p-4 rounded-xl border-2 font-semibold transition-all duration-300 ${formData.pledgeAmount === amount.toString()
                                            ? 'border-[#1B3F92] bg-blue-50 text-[#1B3F92]'
                                            : 'border-gray-200 hover:border-[#1B3F92] hover:bg-blue-50'
                                            }`}
                                    >
                                        ${amount}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-[#1B3F92] mb-2">
                                        First Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1B3F92] focus:border-transparent transition-all duration-300"
                                        placeholder="Enter your first name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#1B3F92] mb-2">
                                        Last Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1B3F92] focus:border-transparent transition-all duration-300"
                                        placeholder="Enter your last name"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-[#1B3F92] mb-2">
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1B3F92] focus:border-transparent transition-all duration-300"
                                        placeholder="Enter your address"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#1B3F92] mb-2">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1B3F92] focus:border-transparent transition-all duration-300"
                                        placeholder="Enter your city"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-[#1B3F92] mb-2">
                                        State/Province
                                    </label>
                                    <input
                                        type="text"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1B3F92] focus:border-transparent transition-all duration-300"
                                        placeholder="Enter your state/province"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#1B3F92] mb-2">
                                        Country
                                    </label>
                                    <input
                                        type="text"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1B3F92] focus:border-transparent transition-all duration-300"
                                        placeholder="Enter your country"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-[#1B3F92] mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1B3F92] focus:border-transparent transition-all duration-300"
                                        placeholder="Enter your email address"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#1B3F92] mb-2">
                                        Pledge Amount *
                                    </label>
                                    <input
                                        type="text"
                                        name="pledgeAmount"
                                        value={formData.pledgeAmount}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1B3F92] focus:border-transparent transition-all duration-300"
                                        placeholder="Enter amount ($)"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#1B3F92] mb-2">
                                    Personal Message
                                </label>
                                <textarea
                                    name="comment"
                                    value={formData.comment}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1B3F92] focus:border-transparent transition-all duration-300"
                                    placeholder="Feel free to include a personal dedication or comment"
                                />
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-[#1B3F92] to-blue-600 hover:from-[#16316E] hover:to-blue-700 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    Submit Pledge
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
