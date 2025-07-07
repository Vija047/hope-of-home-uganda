import React from "react";
import { useNavigate } from "react-router-dom";
import childImage from "../../assets/images/chidimages.jpg";
import homeOfHopeVideo from "../../assets/images/Home_of_Hope_Doc3.mp4";
import ourvisionImage from "../../assets/images/OUR-VISION.jpg";
import ourmissionImage from "../../assets/images/OUR-MISSION.jpg";
import ourneedforsupportimage from "../../assets/images/OUR-NEED -FOR -SUPPORT.jpg";

// Cards for mission, vision, support
const cards = [
    {
        title: "Our Mission",
        textColor: "text-[#1B3F92]",
        image: ourmissionImage,
        description: `Home of Hope is a community-based, not-for-profit organization with a dedicated and compassionate team.

Our mission is to enhance the health, social, and economic welfare of children with multiple mental and physical disabilities through essential care, medical treatment, mobility equipment, and education.`,
        button: "Learn More About Our Mission",
    },
    {
        title: "Our Vision",
        textColor: "text-[#1B3F92]",
        image: ourvisionImage,
        description: `Poverty, hardship, and lack of social aid leave many children with disabilities abandoned.

Our vision is to heal and nurture these children, fostering inclusion and helping them develop skills to live independently and with dignity.`,
        button: "Learn More About Our Vision",
    },
    {
        title: "Our Need for Support",
        textColor: "text-[#1B3F92]",
        image: ourneedforsupportimage,
        description: `Home of Hope relies on generous donations and volunteers to provide a safe haven for disabled children in Uganda.

Your support helps expand our facilities and provide medical care, mobility equipment, and essential support.`,
        button: "See How You Can Help",
    },
];

// Project campaign cards
const projects = [
    {
        title: "AMAANYI CENTER",
        image: "/amaanyi.jpg",
        description:
            "Amaanyi is the Luganda word for Power! The Amaanyi Center is the first and only Center in Uganda dedicated to empowering youth with special needs to achieve their potential. The Center provides a holistic education including life skills, self-advocacy, vocational training, therapeutic support, and more.",
        highlight: "If you believe every child has potential donate now to this campaign.",
    },
    {
        title: "#NOMOREHIDDENCHILDREN",
        image: "/hidden.jpg",
        description:
            "#NoMoreHiddenChildren is a growing social movement championed by local volunteers in Uganda and abroad. Ambassadors search for children hidden away because of misunderstood disabilities. An estimated 1 million hidden children live in Uganda alone.",
        highlight: "If you believe we should live in a world with no more hidden children donate now to support this campaign.",
    },
    {
        title: "CHANCE FOR CHILDHOOD",
        image: "/chance.jpg",
        description:
            "This project enables early identification and intervention for children with special needs in even the most rural areas using mobile phone technology. We partner with Chance for Childhood to help every child play and feel accepted.",
        highlight: "If you believe every child should have the chance to play and feel accepted donate now to support this campaign.",
    },
];

export default function Home() {
    const navigate = useNavigate();

    return (
        <section className="bg-[#FFFCF0] text-center relative overflow-hidden font-sans">

            {/* HERO */}
            <div className="max-w-4xl mx-auto px-4 pt-20 pb-12">
                <h1 className="text-5xl md:text-6xl font-extrabold text-[#1B3F92] mb-6">
                    Give Hope. Change Lives.
                </h1>
                <p className="text-[#1B3F92] mb-8 text-lg">
                    Your kindness makes all the difference. Help us care for vulnerable children today.
                </p>
                <button
                    onClick={() => navigate("/donation")}
                    className="inline-block bg-[#1B3F92] text-white font-bold px-8 py-4 rounded-full hover:bg-[#16316E] transition"
                >
                    Donate Now
                </button>
            </div>

            {/* HERO IMAGE WAVE */}
            <div className="relative w-full">
                <svg className="absolute top-0 w-full" viewBox="0 0 1440 150" preserveAspectRatio="none">
                    <path fill="#FFFCF0" d="M0,0 C480,150 960,0 1440,150 L1440,0 L0,0 Z" />
                </svg>
                <img src={childImage} alt="Happy Children" className="w-full block" />
            </div>

            {/* VIDEO + TEXT */}
            <div className="bg-[#E6F7F8] flex flex-col md:flex-row items-center justify-center p-10 gap-10">
                <div className="w-full md:w-2/3">
                    <video
                        src={homeOfHopeVideo}
                        controls
                        className="w-full max-w-3xl mx-auto rounded-lg shadow-xl"
                        poster={childImage}
                    >
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                </div>
                <div className="w-full md:w-1/3 text-left text-[#1B3F92] font-medium space-y-4">
                    <p className="mb-4">Many of our long-term children are now transitioning into adulthood.</p>
                    <p className="mb-4">We are in desperate need of independent living quarters for these young adults.</p>
                    <p>Please watch this short video on our critical fundraising initiative.</p>
                    <p className="mt-6 font-semibold">
                        “With your support, we can build a safe, loving place for every child to grow, learn, and thrive. Together, we make hope a reality.”
                    </p>
                </div>
            </div>


            {/* INFO CARDS */}
            <div className="bg-[#FFFCF0] py-16 px-6 space-y-20">
                {cards.map((card, index) => (
                    <section
                        key={index}
                        className={`flex flex-col ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10`}
                    >
                        <div className="md:w-1/2">
                            <img src={card.image} alt={card.title} className="w-full rounded-xl shadow-lg" />
                        </div>
                        <div className="md:w-1/2 text-left">
                            <h2 className={`text-4xl font-bold ${card.textColor} mb-6`}>{card.title}</h2>
                            <p className={`${card.textColor} leading-relaxed whitespace-pre-line`}>{card.description}</p>
                            <button className="mt-6 bg-[#1B3F92] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#16316E] transition">
                                {card.button}
                            </button>
                        </div>
                    </section>
                ))}
            </div>
            

            {/* CURRENT PROJECTS SECTION */}
            <section className="bg-[#FFFCF0] text-white py-16 px-4">
                <h2 className="text-3xl font-bold text-[#4169e1] text-center mb-10">
                    CURRENT PROJECTS:
                </h2>
                <div className="space-y-12">
                    {projects.map((proj, i) => (
                        <div
                            key={i}
                            className={`flex flex-col md:flex-row items-center bg-[#FFFCF0] p-6 rounded-lg shadow-lg gap-8`}
                        >
                            <div className="md:w-1/2 w-full flex-shrink-0">
                                <img
                                    src={proj.image}
                                    alt={proj.title}
                                    className="w-full h-64 object-cover rounded-md mb-4 md:mb-0"
                                />
                            </div>
                            <div className="md:w-1/2 w-full flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-[#4169e1] mb-2">{proj.title}</h3>
                                <p className="text-sm text-gray-700 mb-4">{proj.description}</p>
                                <p className="text-[#4169e1] font-medium mb-4">{proj.highlight}</p>
                                <button className="bg-transparent border border-[#4169e1] text-[#4169e1] font-bold py-2 px-6 hover:bg-[#4169e1] hover:text-white transition">
                                    DONATE
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* DONATE CALLOUT */}
            <div id="donate" className="bg-[#1B3F92] text-white text-center py-20 px-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Ready to Make a Difference?
                </h2>
                <p className="max-w-2xl mx-auto mb-8">
                    Your donation directly transforms lives — giving hope, shelter, care, and education to children in need.
                </p>
                <a
                    href="https://your-donation-link.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-[#1B3F92] font-bold px-10 py-4 rounded-full hover:bg-gray-200 transition"
                >
                    Donate Now
                </a>
            </div>

            {/* FOOTER */}
            <footer className="bg-[#16316E] text-white text-center py-10 px-6">
                <p className="mb-4 font-medium">
                    © {new Date().getFullYear()} Home of Hope Uganda. All rights reserved.
                </p>
                <p className="mb-2">Contact: info@homeofhopeuganda.org | +256 123 456 789</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" className="hover:underline">Facebook</a>
                    <a href="#" className="hover:underline">Instagram</a>
                    <a href="#" className="hover:underline">Twitter</a>
                </div>
                <p className="mt-6">Thank you for your kindness and support!</p>
            </footer>
        </section>
    );
}
