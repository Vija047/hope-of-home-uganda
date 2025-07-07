import React from "react";
import orphagesChild from "../../assets/images/uganda-providence-pg.jpg";
import child01 from "../../assets/images/dontion-images01.png";
import child02 from "../../assets/images/donation-image02.gif";

export default function DonationPage() {
    return (
        <section
            className="bg-[#FFFCF0] text-[#1B3F92] py-16 px-6"
            style={{
                backgroundImage: `url(${orphagesChild})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay for better readability */}
            <div
                style={{
                    background: "rgba(255,252,240,0.92)",
                    minHeight: "100%",
                    width: "100%",
                }}
            >
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <img
                        src={orphagesChild}
                        alt="Orphanage Child"
                        className="w-full h-auto rounded mb-6"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Your Kind Donation
                    </h1>
                    <p className="mb-4">
                        Thank you so much for coming to our donation page.{" "}
                        <strong>Home of Hope</strong> is a government licensed facility but
                        relies fully on donations from charitable groups and wonderful people
                        like you.
                    </p>
                    <p className="mb-4">
                        Many of our children require regular medical visits, surgeries, drug
                        treatments and rehabilitation services to help them grow stronger and
                        become more self-sufficient.
                    </p>
                    <p className="mb-6">
                        Your thoughtful donation will directly benefit the children at Home of
                        Hope and help us provide the best care possible in a loving and
                        nurturing environment.
                    </p>
                </div>

                {/* Online Donations */}
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-2xl font-bold mb-4">Online Donations</h2>
                    <p className="mb-6">
                        Online donations can be made through either of our sister programs:{" "}
                        <a href="#" className="underline font-semibold">
                            Home of Hope Ministries
                        </a>{" "}
                        or{" "}
                        <a href="#" className="underline font-semibold">
                            Our Hope International
                        </a>
                        .
                    </p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                        <img
                            src={child01}
                            alt="Donate through Our Hope International"
                            className="w-64 rounded shadow-md"
                        />
                        <img
                            src={child02}
                            alt="Donate through Home of Hope Ministries"
                            className="w-64 rounded shadow-md"
                        />
                    </div>
                </div>

                {/* Mail-In Donations */}
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-2xl font-bold mb-4">Mail-In Donations</h2>
                    <p className="mb-4">
                        Donations can also be made by mailing a cheque or money order to:
                    </p>
                    <p className="font-bold mb-4">
                        Home of Hope Ministries
                        <br />
                        2428 Jones Ave. NE
                        <br />
                        Renton, WA 98056
                    </p>
                    <p className="text-sm">
                        *Please send your donation pledge with the form below for our
                        planning.
                    </p>
                </div>

                {/* Donation Form */}
                <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
                    <h3 className="text-2xl font-bold mb-6 text-[#1B3F92]">
                        Your Kind Pledge to Home of Hope - Thank You!
                    </h3>
                    <form className="space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="First Name*"
                                className="border border-gray-300 p-3 rounded w-full"
                            />
                            <input
                                type="text"
                                placeholder="Last Name*"
                                className="border border-gray-300 p-3 rounded w-full"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Address"
                                className="border border-gray-300 p-3 rounded w-full"
                            />
                            <input
                                type="text"
                                placeholder="City"
                                className="border border-gray-300 p-3 rounded w-full"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="State/Province (or Territory)"
                                className="border border-gray-300 p-3 rounded w-full"
                            />
                            <input
                                type="text"
                                placeholder="Country"
                                className="border border-gray-300 p-3 rounded w-full"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Email*"
                                className="border border-gray-300 p-3 rounded w-full"
                            />
                            <input
                                type="text"
                                placeholder="Your Pledge Amount*"
                                className="border border-gray-300 p-3 rounded w-full"
                            />
                        </div>
                        <textarea
                            placeholder="Feel free to include a personal dedication or comment"
                            className="border border-gray-300 p-3 rounded w-full h-32"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-[#1B3F92] text-white px-8 py-3 rounded hover:bg-[#16316E] transition"
                        >
                            SEND
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
