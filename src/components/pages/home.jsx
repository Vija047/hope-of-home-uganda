import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import childImage from "../../assets/images/chidimages.jpg";
import ourvisionImage from "../../assets/images/OUR-VISION.jpg";
import ourmissionImage from "../../assets/images/OUR-MISSION.jpg";
import ourneedforsupportimage from "../../assets/images/OUR-NEED -FOR -SUPPORT.jpg";
import imageofvideo01 from "../../assets/images/videos/image-of-video01.jpg"
import facebookicon from "../../assets/images/videos/image-of-facebook-icon.jpg";
import facebookimage from "../../assets/images/videos/image-of-facebook.jpg"
import dontion01 from "../../assets/images/donation-image02.gif";
import homeministrie from "../../assets/images/donation-image02.gif";
import homeofinternational from "../../assets/images/home-ofhope-interntinal.gif";
import timothyimg from "../../assets/images/kids/timothy-imag.png";
import Edithsimg from "../../assets/images/aboutus/Edith'simg.jpg";
import Edithsimg2 from "../../assets/images/aboutus/Edith'simg2.jpg";
import staf01 from "../../assets/images/aboutus/staff01jpg.jpg";
import staf02 from "../../assets/images/aboutus/staff02.jpg"
import staf03 from "../../assets/images/aboutus/staff03.jpg";
import staf04 from "../../assets/images/aboutus/staff004.jpg";
import staf05 from "../../assets/images/aboutus/staff05.jpg";
import staf06 from "../../assets/images/aboutus/staff06.jpg";
import ourmissionImage1 from "../../assets/images/aboutus/ourmission01.jpg";
import currentproject01 from "../../assets/images/kids/cuurentimag01.jpg";
import currentproject02 from "../../assets/images/kids/cuurentimag02.jpg";
import currentproject03 from "../../assets/images/kids/cuurentimag03.jpg";
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
        image: currentproject01,
        description:
            "Amaanyi is the Luganda word for Power! The Amaanyi Center is the first and only Center in Uganda dedicated to empowering youth with special needs to achieve their potential. The Center provides a holistic education including life skills, self-advocacy, vocational training, therapeutic support, and more.",
        highlight: "If you believe every child has potential donate now to this campaign.",
    },
    {
        title: "#NOMOREHIDDENCHILDREN",
        image: currentproject02,
        description:
            "#NoMoreHiddenChildren is a growing social movement championed by local volunteers in Uganda and abroad. Ambassadors search for children hidden away because of misunderstood disabilities. An estimated 1 million hidden children live in Uganda alone.",
        highlight: "If you believe we should live in a world with no more hidden children donate now to support this campaign.",
    },
    {
        title: "CHANCE FOR CHILDHOOD",
        image: currentproject03,
        description:
            "This project enables early identification and intervention for children with special needs in even the most rural areas using mobile phone technology. We partner with Chance for Childhood to help every child play and feel accepted.",
        highlight: "If you believe every child should have the chance to play and feel accepted donate now to support this campaign.",
    },
];

export default function Home() {
    const navigate = useNavigate();

    // Handle hash navigation when component mounts
    useEffect(() => {
        const hash = window.location.hash.substring(1);
        if (hash) {
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                    const offsetTop = element.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        }
    }, []);

    return (
        <section id="home" className="bg-gradient-to-br bg-#FFFFFF   text-center relative overflow-hidden font-sans">

            {/* HERO - Modern gradient background with floating elements */}
            <div className="relative min-h-screen flex items-center justify-center">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-48 h-48 bg-yellow-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-200/20 rounded-full blur-xl animate-pulse delay-2000"></div>
                </div>

                <div className="max-w-6xl mx-auto px-4 pt-20 pb-12 relative z-10">
                   

                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-black  bg-clip-text bg-gradient-to-r text-[#1B3F92] mb-8 leading-tight animate-slide-up">
                        Give Hope.<br />
                        <span className="text-5xl md:text-6xl lg:text-7xl">Change Lives.</span>
                    </h1>

                    <p className="text-gray-700 mb-12 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-slide-up delay-300">
                        Your kindness creates ripples of change. Join us in caring for vulnerable children
                        and building brighter futures in Uganda.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up delay-500">
                        <button
                            onClick={() => navigate("/donation")}
                            className="group bg-gradient-to-r from-[#1B3F92] to-blue-600 text-white font-bold px-10 py-5 rounded-full hover:from-[#16316E] hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
                        >
                            <span className="flex items-center gap-3">
                                 Donate Now
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </button>

                        <button className="group bg-white/80 backdrop-blur-sm text-[#1B3F92] font-semibold px-10 py-5 rounded-full border-2 border-[#1B3F92]/20 hover:border-[#1B3F92]/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                            <span className="flex items-center gap-3">
                                 Learn Our Story
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </button>
                    </div>

                    {/* Impact numbers */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-slide-up delay-700">
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-3xl font-black text-[#1B3F92] mb-2">96</div>
                            <div className="text-gray-600 font-medium">Children Cared For</div>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-3xl font-black text-[#1B3F92] mb-2">18+</div>
                            <div className="text-gray-600 font-medium">Years of Service</div>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-3xl font-black text-[#1B3F92] mb-2">100%</div>
                            <div className="text-gray-600 font-medium">Love & Care</div>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-3xl font-black text-[#1B3F92] mb-2">∞</div>
                            <div className="text-gray-600 font-medium">Hope Given</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* HERO IMAGE WAVE - Modern floating image with glassmorphism */}
            <div className="relative w-full -mt-20">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent h-full pointer-events-none z-10"></div>
                <div className="relative overflow-hidden rounded-t-[3rem] shadow-2xl">
                    <img
                        src={childImage}
                        alt="Happy Children"
                        className="w-full h-[70vh] object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white">
                        <h3 className="text-2xl font-bold mb-2">Every Child Deserves Love</h3>
                        <p className="text-lg opacity-90">Creating safe spaces for vulnerable children in Uganda</p>
                    </div>
                </div>
            </div>

            {/* VIDEO + TEXT - Modern card layout with glassmorphism */}
            <div className="bg-gradient-to-br bg-#FFFFFF py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                <video
                                    src="/videos/Home_of_Hope_Doc3.mp4"
                                    controls
                                    className="w-full rounded-2xl shadow-lg"
                                   
                                >
                                    Sorry, your browser doesn't support embedded videos.
                                </video>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 space-y-6">
                            

                            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3F92] leading-tight">
                                Building Tomorrow,  Today <br />
                               
                                  
                        
                            </h2>

                            <div className="space-y-4 text-gray-700">
                                <p className="text-lg leading-relaxed">
                                    Many of our long-term children are now transitioning into adulthood,
                                    marking incredible milestones in their journey toward independence.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    We are in critical need of independent living quarters for these young adults
                                    as they prepare to take their next steps in life.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Watch this short video to learn about our urgent fundraising initiative
                                    and how your support can create lasting change.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-[#1B3F92]/10 to-blue-100/50 rounded-2xl p-6 border-l-4 border-[#1B3F92]">
                                <p className="text-[#1B3F92] font-semibold text-lg italic">
                                    "With your support, we can build a safe, loving place for every child to grow,
                                    learn, and thrive. Together, we make hope a reality."
                                </p>
                                <p className="text-[#1B3F92] mt-3 font-medium">— Edith Lukabwe, Founder & Director</p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => navigate("/donation")}
                                    className="bg-gradient-to-r from-[#1B3F92] to-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:from-[#16316E] hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    Support Our Mission
                                </button>
                                <button className="bg-white/80 backdrop-blur-sm text-[#1B3F92] font-semibold px-6 py-3 rounded-full border border-[#1B3F92]/20 hover:border-[#1B3F92]/50 transition-all duration-300 transform hover:scale-105">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* INFO CARDS - Modern bento box layout */}
            <div className="bg-gradient-to-br bg-#FFFFFF py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                      
                        <h2 className="text-5xl font-bold text-[#1B3F92] mb-4">
                            Transforming Lives Through <br />
                            <span className=" bg-clip-text bg-gradient-to-r text-[#1B3F92]">
                                Love & Care
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Every child deserves a chance to thrive. Here's how we're making that vision a reality.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? "lg:grid-cols-[1fr_1.2fr]" : "lg:grid-cols-[1.2fr_1fr]"
                                    }`}
                            >
                                <div className={`${index % 2 === 0 ? "order-2 lg:order-1" : "order-2"}`}>
                                    <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </div>

                                <div className={`${index % 2 === 0 ? "order-1 lg:order-2" : "order-1"} space-y-6`}>
                                    
                                    <h3 className="text-4xl font-bold text-[#1B3F92] leading-tight">
                                        {card.title}
                                    </h3>

                                    <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                                        {card.description.split('\n\n').map((paragraph, i) => (
                                            <p key={i}>{paragraph}</p>
                                        ))}
                                    </div>

                                    <button className="group bg-gradient-to-r from-[#1B3F92] to-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:from-[#16316E] hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                        <span className="flex items-center gap-2">
                                            {card.button}
                                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SECOND VIDEO SECTION - Modern split layout with enhanced Facebook integration */}
            <div className="bg-#FFFFFF py-10 px-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">

                    {/* Left: Video */}
                    <div className="w-full md:w-1/2">
                        <video
                            src="/videos/viode-01.mp4"
                            controls
                            className="w-full rounded-lg shadow-xl"
                        >
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                        {/* Facebook Section */}
                        <div
                            className="relative bg-cover bg-center py-12 flex justify-center items-center"
                        >
                            <div className="relative bg-#FFFFFF bg-opacity-95 shadow-2xl rounded-2xl p-8 max-w-2xl w-full  flex flex-col md:flex-row items-center gap-8 overflow-hidden" style={{
                                backgroundImage: `url(${facebookimage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                minHeight: '320px',
                            }}>
                                {/* Overlay for better readability */}
                                <div className="absolute inset-0 bg-#FFFFFF bg-opacity-80 pointer-events-none rounded-2xl" />
                                {/* Facebook Profile Image */}
                                <img
                                    src={facebookicon}
                                    alt="Facebook Page"
                                    className="w-28 h-28 rounded-full border-4 border-[#1877F2] object-cover shadow-md mb-4 md:mb-0 relative z-10"
                                />
                                {/* Page Info */}
                                <div className="flex-1 text-center md:text-left relative z-10">
                                    <h3 className="text-2xl md:text-3xl font-extrabold text-[#1B3F92] mb-1">HOME of HOPE jinja, Uganda</h3>
                                    <p className="text-gray-600 text-base md:text-lg mb-2">1.9K likes • 2.1K followers</p>
                                    <div className="flex flex-col md:flex-row gap-3 mt-4 justify-center md:justify-start">
                                        <a
                                            href="https://www.facebook.com/homeofhopejinja/?ref=embed_page#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#1877F2] hover:bg-[#145DBF] text-white px-6 py-2 rounded-full text-base font-semibold shadow transition"
                                        >
                                            Message
                                        </a>
                                        <a
                                            href="https://api.whatsapp.com/send?phone=%2B256704763155&context=..."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-base font-semibold shadow transition"
                                        >
                                            WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Profile Content */}
                    <div className="w-full md:w-1/2">
                        <div className="bg-#FFFFFF rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6">

                            {/* Image and Caption bg-#FFFFFF */}
                            <div className="flex flex-col items-center md:items-start">
                                <img
                                    src={imageofvideo01} // Replace with correct image path
                                    alt="Edith Lukabwe"
                                    className="w-48 h-64 object-cover rounded-md border"
                                />
                                <p className="text-sm text-[royalblue] mt-2 font-medium text-center md:text-left">
                                    Edith Lukabwe, Director<br />Home of Hope
                                </p>
                            </div>

                            {/* Text Content */}
                            <div className="flex-1 text-[royalblue] space-y-4">
                                <h2 className="text-lg font-semibold">
                                    Meet Edith Lukabwe, Director Home of Hope
                                </h2>
                                <p>
                                    Edith Lukabwe founded Home of Hope to provide physical care and compassion
                                    for children in Uganda living with multiple disabilities. Many of the children
                                    living at Home of Hope were abandoned and neglected, and Home of Hope offered
                                    a place for them to go. There are currently 96 children at Home of Hope today.
                                </p>
                                <p>
                                    The organization does community work and helps educate parents of disabled
                                    children on how to best care for them. They offer medications, home visits and
                                    outreach, and aim to reduce the number of children being abandoned. The
                                    organization works to provide the children with basic needs, social protection
                                    and inclusion, and improved standards of living. They also continue to raise
                                    awareness and encourage love for these children in the community.
                                </p>
                                <button className="bg-cyan-200 hover:bg-cyan-300 text-[royalblue] font-medium px-4 py-2 rounded transition duration-200">
                                    Read Edith’s Story (in her own words)
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SUPPORTERS & IMPACT SECTION - Modern partnership showcase */}
            <section id="supporters" className="bg-gradient-to-br bg-#FFFFFF py-24 px-4">
                <div className="max-w-7xl mx-auto">

                    {/* Partners Header */}
                    <div className="text-center mb-20">
                        
                        <h2 className="text-5xl font-bold text-[#1B3F92] mb-6">
                            Trusted Partners in <br />
                            <span className=" bg-clip-text bg-gradient-to-r text-[#1B3F92]">
                                Hope & Healing
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Together with incredible organizations worldwide, we're building a brighter future
                            for children with disabilities in Uganda
                        </p>

                        {/* Partner Logos - Modern floating cards */}
                        <div className="grid md:grid-cols-3 gap-8 mt-16">
                            <div className="group bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                <img
                                    src={dontion01}
                                    alt="Our Hope International"
                                    className="h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                                />
                                <h4 className="text-[#1B3F92] font-semibold text-lg mb-2">Our Hope International</h4>
                                <p className="text-gray-600 text-sm">Global partnership for sustainable impact</p>
                            </div>
                            <div className="group bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                <img
                                    src={homeministrie}
                                    alt="Home of Hope Ministries"
                                    className="h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                                />
                                <h4 className="text-[#1B3F92] font-semibold text-lg mb-2">Home of Hope Ministries</h4>
                                <p className="text-gray-600 text-sm">Spiritual foundation and community support</p>
                            </div>
                            <div className="group bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                <img
                                    src={homeofinternational}
                                    alt="Hope Builders International"
                                    className="h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                                />
                                <h4 className="text-[#1B3F92] font-semibold text-lg mb-2">Hope Builders International</h4>
                                <p className="text-gray-600 text-sm">Building infrastructure for the future</p>
                            </div>
                        </div>
                    </div>

                    {/* Impact Story - Enhanced layout */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div className="space-y-8">
                            <div className="inline-block bg-[#1B3F92]/10 text-[#1B3F92] px-4 py-2 rounded-full text-sm font-semibold">
                                💫 Our Impact
                            </div>
                            <h3 className="text-4xl font-bold text-[#1B3F92] leading-tight">
                                Every Child Deserves <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r text-[#1B3F92]">
                                    a Bright Future
                                </span>
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Without the continued support of our valued partners and supporters, Home of Hope could not
                                provide the essential services needed to help disabled and abandoned children in Uganda thrive.
                            </p>

                            {/* Impact Statistics */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-6 text-center">
                                    <div className="text-3xl font-black text-[#1B3F92] mb-2">1000+</div>
                                    <div className="text-gray-600 font-medium">Lives Touched</div>
                                </div>
                                <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl p-6 text-center">
                                    <div className="text-3xl font-black text-[#1B3F92] mb-2">50+</div>
                                    <div className="text-gray-600 font-medium">Success Stories</div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-[#1B3F92]/10 to-blue-100/50 rounded-3xl p-8 border-l-4 border-[#1B3F92] shadow-lg">
                               
                                <p className="text-[#1B3F92] font-semibold text-lg italic leading-relaxed">
                                    "Thank you for believing in our mission. Together, we are creating brighter tomorrows
                                    for children who need it most."
                                </p>
                                <p className="text-[#1B3F92] mt-4 font-bold">— Edith Lukabwe, Founder & Director</p>
                            </div>
                        </div>

                        {/* Featured Child Story - Enhanced card */}
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300">
                            <div className="relative">
                                <img
                                    src={timothyimg}
                                    alt="Timothy and caregiver"
                                    className="w-full h-72 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-3">
                                         Success Story
                                    </div>
                                    <h4 className="text-2xl font-bold mb-2">Meet Timothy</h4>
                                    <p className="text-lg opacity-90">Age 8 • Dreams of becoming a teacher</p>
                                </div>
                            </div>
                            <div className="p-8">
                                <h4 className="text-xl font-bold text-[#1B3F92] mb-4">Lighting the Way to Timothy's Future</h4>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Timothy arrived at Home of Hope as an abandoned child with special needs.
                                    Today, he's thriving in our care and educational programs, showing incredible
                                    progress and inspiring everyone around him.
                                </p>
                                <div className="flex gap-4">
                                    <button className="group bg-gradient-to-r from-[#1B3F92] to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-[#16316E] hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                        <span className="flex items-center gap-2">
                                             Read His Story
                                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </span>
                                    </button>
                                    <button className="bg-white/80 backdrop-blur-sm text-[#1B3F92] px-6 py-3 rounded-full font-semibold border border-[#1B3F92]/20 hover:border-[#1B3F92]/50 transition-all duration-300 transform hover:scale-105">
                                         Sponsor Timothy
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action - Modern donation cards */}
                    <div className="text-center">
                        <div className="inline-block bg-[#1B3F92]/10 text-[#1B3F92] px-6 py-3 rounded-full text-sm font-semibold mb-6">
                             Take Action
                        </div>
                        <h3 className="text-4xl font-bold text-[#1B3F92] mb-6">
                            Your Donation Can <br />
                            <span className=" bg-clip-text bg-gradient-to-r text-[#1B3F92]">
                                Change Everything
                            </span>
                        </h3>
                        <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
                            Join our community of supporters and help us provide medical care, education, and love
                            to children with disabilities in Uganda. Every contribution makes a real difference.
                        </p>

                        {/* Enhanced Donation Options */}
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="group bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="relative">
                                    <img
                                        src={homeofinternational}
                                        alt="Our Hope International"
                                        className="h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                        Tax Deductible
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-[#1B3F92] mb-4">Donate through Our Hope International</h4>
                                <p className="text-gray-600 mb-6">Secure, international donations with full tax benefits</p>
                                <button
                                    onClick={() => navigate("/donation")}
                                    className="group w-full bg-gradient-to-r from-[#1B3F92] to-blue-600 text-white px-8 py-4 rounded-full font-bold hover:from-[#16316E] hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                         Donate Now
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </span>
                                </button>
                            </div>

                            <div className="group bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="relative">
                                    <img
                                        src={homeministrie}
                                        alt="Home of Hope Ministries"
                                        className="h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                        Direct Impact
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-[#1B3F92] mb-4">Donate through Home of Hope Ministries</h4>
                                <p className="text-gray-600 mb-6">Direct support to our ministry and children's programs</p>
                                <button
                                    onClick={() => navigate("/donation")}
                                    className="group w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                         Donate Now
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* video 03 */}
            <div className="bg-#FFFFFF py-10 px-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">

                    {/* Left: Video */}
                    <div className="w-full md:w-1/2">
                        <video
                            src="/videos/video-02.mp4"
                            controls
                            className="w-full rounded-lg shadow-xl"
                        >
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                    </div>

                    {/* Right: Hex Text Box */}
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <div
                            className="text-[royalblue] font-medium text-center px-6 py-8 text-lg leading-relaxed"

                        >
                            <p>
                                The kids were so excited for our annual “Picture Day”.
                            </p>
                            <p className="mt-4">
                                The girls picked out their prettiest dresses to wear and the boys their most colourful shirts and shorts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>            {/* about us */}
            <div id="about">
                <h1 className="text-4xl font-bold text-[#1B3F92] text-center py-8">About Us</h1>
                {/* Edith Lukabwe */}
                <section id="our-story" className="w-full py-16 px-4 md:px-16 bg-#FFFFFF">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold text-[#1B3F92] mb-6">
                            Edith's Story (in her own words)
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <img
                                    src={Edithsimg}
                                    alt="Edith and Derrick"
                                    className="w-full h-auto rounded-xl shadow-md mb-4"
                                />
                                <p className="text-sm text-gray-600 mb-4">
                                    Edith with her son Derrick
                                </p>
                                <p className="text-justify mb-3 text-[royalblue]">
                                    In 2000, God blessed me with my son Derrick. Shortly after birth, he
                                    faced severe health challenges and was diagnosed with multiple
                                    disabilities. Despite hardships, my family stayed strong, seeking
                                    care and support for him.
                                </p>
                                <p className="text-justify mb-3 text-[royalblue]">
                                    In 2004, I joined a local charity to help other families with disabled
                                    children. I soon realized many children were abandoned due to
                                    disabilities and started caring for them in my own community.
                                </p>
                            </div>
                            <div>
                                <img
                                    src={Edithsimg2}
                                    alt="Edith Story"
                                    className="w-full h-auto rounded-xl shadow-md mb-4"
                                />
                                <p className="text-sm text-gray-600 mb-4">
                                    Edith Lukabwe at International Volunteer Day
                                </p>
                                <p className="text-justify mb-3 text-[royalblue]">
                                    After an accident in 2006, I felt called by God to fully dedicate my
                                    life to these children. With support from friends, I founded Home of
                                    Hope in 2007 with just six children.
                                </p>
                                <p className="text-justify mb-3 text-[royalblue]">
                                    Today, I care for nearly 100 abandoned children with disabilities,
                                    providing love, therapy, and hope for their future.
                                </p>
                                <p className="text-justify font-semibold">~ Edith Lukabwe</p>
                            </div>
                        </div>
                    </div>
                </section>                {/* Meet Our Staff */}
                <section id="our-team" className="w-full py-16 px-4 md:px-16 bg-#FFFFFF">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold text-[#1B3F92] mb-6">Meet Our Staff</h2>
                        <p className="mb-3 text-[royalblue]">
                            Our dedicated and compassionate staff give so much of themselves to
                            provide loving care for the more than one hundred children at Home
                            of Hope. Many of the children have severe disabilities and are
                            extremely fragile requiring constant companionship, vigilance and
                            special care.
                        </p>
                        <p className="mb-3 text-[royalblue]">
                            Paid through your donations, our wonderful staff members have been
                            known to give their own money to help purchase medicines, equipment
                            and clothing for the children, a testament to the wonderful people
                            they are.
                        </p>
                        <p className="text-[royalblue]">
                            To our incredible staff, God bless you and we could not do it
                            without you!
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            <img
                                src={staf01}
                                alt="Staff 1"
                                className="w-full h-auto object-cover rounded-xl shadow-md"
                            />
                            <img
                                src={staf02}
                                alt="Staff 2"
                                className="w-full h-auto object-cover rounded-xl shadow-md"
                            />
                            <img
                                src={staf03}
                                alt="Staff 3"
                                className="w-full h-auto object-cover rounded-xl shadow-md"
                            />
                            <img
                                src={staf04}
                                alt="Staff 3"
                                className="w-full h-auto object-cover rounded-xl shadow-md"
                            />
                            <img
                                src={staf05}
                                alt="Staff 3"
                                className="w-full h-auto object-cover rounded-xl shadow-md"
                            />
                            <img
                                src={staf06}
                                alt="Staff 3"
                                className="w-full h-auto object-cover rounded-xl shadow-md"
                            />
                        </div>
                    </div>
                </section>
                {/* Our Mission */}
                <section id="our-mission" className="w-full py-16 px-4 md:px-16 bg-#FFFFFF">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold text-[#1B3F92] mb-6">Our Mission</h2>
                        <p className="mb-4 text-[royalblue]">
                            Home of Hope is a registered community based organization in the
                            Jinja district in Uganda. The organization has a home specifically
                            for children with disabilities...
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-[royalblue]">
                            <p>Center based therapy and care</p>
                            <p>Assessment Clinics/outreach clinics</p>
                            <p>Home Visits</p>
                            <p>Epilepsy Medication</p>
                            <p>Adaptive Aids</p>
                            <p>Drop in clinics</p>
                            <p>Support for Corrective Surgery</p>
                            <p>Nutrition support</p>
                            <p>Income generating activities</p>
                            <p>Training workshops</p>
                            <p>Child School Sponsorship</p>
                        </ul>
                        <img
                            src={ourmissionImage1}
                            alt="Mission"
                            className="w-full h-auto rounded-xl shadow-md"
                        />
                    </div>
                </section>

                {/* Our Vision */}
                <section id="our-vision" className="w-full py-16 px-4 md:px-16 bg-#FFFFFF text-center">
                    <h2 className="text-4xl font-bold text-[#1B3F92] mb-6">Our Vision</h2>
                    <p className="italic mb-6 max-w-3xl mx-auto text-[royalblue]">
                        “At Home of Hope, we are striving for socially accepted, included,
                        well cared for, and involved community of children with multiple
                        disabilities with self-help skills to live an independent life.”
                        <br />~ Edith Lukabwe
                    </p>
                    <div className="flex justify-center">
                        <video
                            controls
                            className="w-full md:w-2/3 rounded-xl shadow-md"
                            src="/videos/video03.mp4"
                        />
                    </div>
                </section>
            </div>
 <h1 className="text-4xl font-bold text-[#1B3F92] text-center py-8">programs</h1>


            {/* Our Need for Support */}
            <section id="our-support" className="w-full py-16 px-4 md:px-16 bg-#FFFFFF text-center">
                <h2 className="text-4xl font-bold text-[#1B3F92] mb-4">
                    Our Need for Support
                </h2>
                <h3 className="text-2xl text-[royalblue] mb-8 font-bold">
                    We are very much in need of your help...
                </h3>
                <div className="flex justify-center">
                    <video
                        src="/videos/Home_of_Hope_Doc3.mp4"
                        controls
                        className="w-full md:w-2/3 rounded-xl shadow-md"
                    >
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                </div>
            </section>

            {/* CURRENT PROJECTS SECTION */}
            <section id="current-projects" className="bg-#FFFFFF py-16 px-4">
                <h2 className="text-3xl font-bold text-[#4169e1] text-center mb-10">
                    CURRENT PROJECTS:
                </h2>
                <div className="space-y-12">
                    {projects.map((proj, i) => (
                        <div
                            key={i}
                            className={`flex flex-col md:flex-row items-center bg-#FFFFFF p-6 rounded-lg shadow-lg gap-8`}
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
                    className="inline-block bg-#FFFFFF text-[#1B3F92] font-bold px-10 py-4 rounded-full hover:bg-gray-200 transition"
                >
                    Donate Now
                </a>
            </div>

            {/* CONTACT US - Modern contact section */}
            <section id="contact-us" className="bg-gradient-to-br from-slate-50 to-blue-50 py-24 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block bg-[#1B3F92]/10 text-[#1B3F92] px-6 py-3 rounded-full text-sm font-semibold mb-6">
                            📧 Get in Touch
                        </div>
                        <h2 className="text-5xl font-bold text-[#1B3F92] mb-6">
                            Let's Connect & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r text-[#1B3F92]">
                                Make a Difference
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Have questions about our mission? Want to visit our facility? Ready to make a donation?
                            We'd love to hear from you.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                                <div className="space-y-6">
                                    <div className="text-center">
                                        <div className="inline-block bg-[#1B3F92]/10 text-[#1B3F92] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                            🏠 Our Home
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#1B3F92] mb-2">HOME OF HOPE</h3>
                                        <p className="text-gray-600">Uganda's Premier Care Center for Children with Disabilities</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                                            <div className="w-10 h-10 bg-[#1B3F92]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-5 h-5 text-[#1B3F92]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-[#1B3F92] mb-1">Address</h4>
                                                <p className="text-gray-700">P.O. BOX 5047</p>
                                                <p className="text-gray-700">JINJA, UGANDA</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl">
                                            <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-green-700 mb-1">Email</h4>
                                                <a
                                                    href="mailto:edith.homeofhope@outlook.com"
                                                    className="text-green-600 hover:text-green-800 font-medium hover:underline transition-colors"
                                                >
                                                    edith.homeofhope@outlook.com
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                                            <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-purple-700 mb-1">Phone</h4>
                                                <p className="text-purple-600 font-medium">+256 772 183 058</p>
                                                <p className="text-purple-600 font-medium">+256 702 617 204</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                                <h4 className="text-xl font-bold text-[#1B3F92] mb-6 text-center">Connect With Us</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <a
                                        href="https://www.facebook.com/homeofhopejinja"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group bg-[#1877F2] hover:bg-[#145DBF] text-white px-4 py-3 rounded-full font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            📘 Facebook
                                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </span>
                                    </a>
                                    <a
                                        href="https://api.whatsapp.com/send?phone=%2B256772183058"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            💬 WhatsApp
                                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                            <div className="text-center mb-8">
                                <div className="inline-block bg-[#1B3F92]/10 text-[#1B3F92] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                    ✉️ Send Message
                                </div>
                                <h3 className="text-2xl font-bold text-[#1B3F92] mb-2">Get in Touch</h3>
                                <p className="text-gray-600">We'd love to hear from you and answer any questions</p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#1B3F92] focus:ring-2 focus:ring-[#1B3F92]/20 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                                            placeholder="Your first name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#1B3F92] focus:ring-2 focus:ring-[#1B3F92]/20 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                                            placeholder="Your last name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#1B3F92] focus:ring-2 focus:ring-[#1B3F92]/20 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                                    <select className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#1B3F92] focus:ring-2 focus:ring-[#1B3F92]/20 transition-all duration-300 bg-white/80 backdrop-blur-sm">
                                        <option>General Inquiry</option>
                                        <option>Donation Questions</option>
                                        <option>Volunteer Opportunities</option>
                                        <option>Partnership Inquiry</option>
                                        <option>Media & Press</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#1B3F92] focus:ring-2 focus:ring-[#1B3F92]/20 transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                                        placeholder="Tell us how we can help..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="group w-full bg-gradient-to-r from-[#1B3F92] to-blue-600 text-white px-8 py-4 rounded-full font-bold hover:from-[#16316E] hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        📤 Send Message
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* MODERN FOOTER */}
            <footer className="bg-gradient-to-br from-[#16316E] via-[#1B3F92] to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid lg:grid-cols-4 gap-12">
                        {/* Brand Section */}
                        <div className="lg:col-span-2 space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">HOME OF HOPE</h3>
                                <p className="text-blue-200 leading-relaxed">
                                    Transforming lives through love, care, and compassion. Since 2007, we've been
                                    providing hope and healing to children with disabilities in Uganda.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://www.facebook.com/homeofhopejinja"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white/10 hover:bg-[#1877F2] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="w-12 h-12 bg-white/10 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="w-12 h-12 bg-white/10 hover:bg-blue-400 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-6">
                            <h4 className="text-xl font-bold">Quick Links</h4>
                            <ul className="space-y-3">
                                <li><a href="#about" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#supporters" className="text-blue-200 hover:text-white transition-colors">Our Mission</a></li>
                                <li><a href="#current-projects" className="text-blue-200 hover:text-white transition-colors">Current Projects</a></li>
                                <li><a href="#contact-us" className="text-blue-200 hover:text-white transition-colors">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div className="space-y-6">
                            <h4 className="text-xl font-bold">Support Us</h4>
                            <ul className="space-y-3">
                                <li><a href="/donation" className="text-blue-200 hover:text-white transition-colors">Make a Donation</a></li>
                                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Volunteer</a></li>
                                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Partnership</a></li>
                                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Sponsor a Child</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/20 mt-12 pt-8 text-center">
                        <p className="text-blue-200 mb-4">
                            © {new Date().getFullYear()} Home of Hope Uganda. All rights reserved.
                        </p>
                        <p className="text-blue-300 text-sm">
                            Built with 💝 to spread hope and create lasting change.
                        </p>
                    </div>
                </div>
            </footer>
        </section>
    );
}
