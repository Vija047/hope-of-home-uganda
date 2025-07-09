import React, { useState } from "react";
import orphagesChild from "../../assets/images/uganda-providence-pg.jpg";
import child01 from "../../assets/images/dontion-images01.png";
import child02 from "../../assets/images/donation-image02.gif";
import peopleUgandaGroup from "../../assets/images/people-uganda-group-local-kids.webp";
import childImageLarge from "../../assets/images/chilsdspict_large.jpg";
import childImage from "../../assets/images/chidimages.jpg";
import ugandaCountry from "../../assets/images/Uganda.webp";
import ourMission from "../../assets/images/Our-Mission.jpg";
import ourNeedForSupport from "../../assets/images/OUR-NEED -FOR -SUPPORT.jpg";

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
        <div className="min-h-screen bg-#FFFFFF font-sans">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                {/* Background with multiple images and animations */}
                <div className="absolute inset-0">
                   
                  
                </div>

                {/* Animated background elements */}
               

                <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#1B3F92] mb-6 leading-tight">
                            Your Kind <br />
                            <span className="bg-gradient-to-r from-[#1B3F92] to-blue-600 bg-clip-text text-transparent">
                                Donation
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-700">
                            Transform lives and create hope for children in Uganda through your generous support
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#donate-now"
                                className="group bg-gradient-to-r from-[#1B3F92] to-blue-600 hover:from-[#16316E] hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                <span className="flex items-center gap-3 justify-center">
                                    Donate Now
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </a>
                            <a
                                href="#learn-more"
                                className="bg-white/80 backdrop-blur-sm text-[#1B3F92] font-semibold px-8 py-4 rounded-full border-2 border-[#1B3F92]/20 hover:border-[#1B3F92]/50 transition-all duration-300 transform hover:scale-105"
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
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-[#1B3F92] to-blue-600 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#1B3F92] mb-4">Medical Care</h3>
                            <p className="text-gray-700">
                                Many of our children require regular medical visits, surgeries, and treatments to help them grow stronger and healthier.
                            </p>
                        </div>

                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-[#1B3F92] to-blue-600 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#1B3F92] mb-4">Education</h3>
                            <p className="text-gray-700">
                                Your support helps provide quality education and learning opportunities for children to build a brighter future.
                            </p>
                        </div>

                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-[#1B3F92] to-blue-600 rounded-full flex items-center justify-center mb-6">
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

                    {/* Featured Image Section */}
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                        <img
                            src={childImageLarge}
                            alt="Children receiving care"
                            className="w-full h-[60vh] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                        <div className="absolute bottom-8 left-8 text-white">
                            <h3 className="text-3xl font-bold mb-2">Every Child Deserves Love</h3>
                            <p className="text-xl opacity-90">Creating safe spaces for vulnerable children in Uganda</p>
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
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                            <div className="text-center">
                                <img
                                    src={child01}
                                    alt="Donate through Our Hope International"
                                    className="w-full h-48 object-cover rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-300"
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

                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                            <div className="text-center">
                                <img
                                    src={child02}
                                    alt="Donate through Home of Hope Ministries"
                                    className="w-full h-48 object-cover rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-300"
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
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl inline-block">
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
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
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
                                        className={`p-4 rounded-2xl border-2 font-semibold transition-all duration-300 ${formData.pledgeAmount === amount.toString()
                                            ? 'border-[#1B3F92] bg-blue-50 text-[#1B3F92] shadow-lg'
                                            : 'border-gray-200 hover:border-[#1B3F92] hover:bg-blue-50 text-gray-700'
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#1B3F92] focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#1B3F92] focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#1B3F92] focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#1B3F92] focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#1B3F92] focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#1B3F92] focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#1B3F92] focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#1B3F92] focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#1B3F92] focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                                    placeholder="Feel free to include a personal dedication or comment"
                                />
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="group bg-gradient-to-r from-[#1B3F92] to-blue-600 hover:from-[#16316E] hover:to-blue-700 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    <span className="flex items-center gap-3 justify-center">
                                        Submit Pledge
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Uganda Context Section */}
            <section className="py-20 bg-gradient-to-br from-white to-blue-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1B3F92] mb-6">
                            Your Impact in Uganda
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Every donation creates ripples of change in the lives of vulnerable children across Uganda
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                            <img
                                src={ugandaCountry}
                                alt="Beautiful Uganda"
                                className="w-full h-48 object-cover rounded-2xl mb-4"
                            />
                            <h3 className="text-xl font-bold text-[#1B3F92] mb-2">Beautiful Uganda</h3>
                            <p className="text-gray-700">A vibrant nation with rich culture and incredible people, where your support creates lasting change.</p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                            <img
                                src={ourMission}
                                alt="Our Mission"
                                className="w-full h-48 object-cover rounded-2xl mb-4"
                            />
                            <h3 className="text-xl font-bold text-[#1B3F92] mb-2">Our Mission</h3>
                            <p className="text-gray-700">Providing comprehensive care, education, and love to children with special needs and disabilities.</p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                            <img
                                src={ourNeedForSupport}
                                alt="Need for Support"
                                className="w-full h-48 object-cover rounded-2xl mb-4"
                            />
                            <h3 className="text-xl font-bold text-[#1B3F92] mb-2">Need for Support</h3>
                            <p className="text-gray-700">Your generous contributions help us provide medical care, education, and a loving home for every child.</p>
                        </div>
                    </div>

                    {/* Inspirational Quote */}
                    <div className="bg-gradient-to-r from-[#1B3F92]/10 to-blue-100/50 rounded-3xl p-8 border-l-4 border-[#1B3F92] shadow-lg">
                        <p className="text-[#1B3F92] font-semibold text-xl italic text-center">
                            "With your support, we can build a safe, loving place for every child to grow, learn, and thrive. Together, we make hope a reality."
                        </p>
                        <p className="text-[#1B3F92] mt-4 font-medium text-center">— Edith Lukabwe, Founder & Director</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
