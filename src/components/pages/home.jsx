import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import childImage from "../../assets/images/chidimages.jpg";
import childImageLarge from "../../assets/images/chilsdspict_large.jpg";
import childImageMain from "../../assets/images/childimage.jpg";
import peopleUgandaGroup from "../../assets/images/people-uganda-group-local-kids.webp";
import ugandaEducation from "../../assets/images/Uganda-Educatio .jpg";
import ugandaOrphanage from "../../assets/images/Uganda-Orphanage-Home-Foundation-jpg.jpg";
import ugandaProvidence from "../../assets/images/uganda-providence-pg.jpg";
import ugandaCountry from "../../assets/images/Uganda.webp";
import empowermentProjects from "../../assets/images/EMPOWERMENT-PROJECTS.jpg";
import ourvisionImage from "../../assets/images/OUR-VISION.jpg";
import ourmissionImage from "../../assets/images/OUR-MISSION.jpg";
import ourneedforsupportimage from "../../assets/images/OUR-NEED -FOR -SUPPORT.jpg";
import imageofvideo01 from "../../assets/images/videos/image-of-video01.jpg"
import facebookicon from "../../assets/images/videos/image-of-facebook-icon.jpg";
import facebookimage from "../../assets/images/videos/image-of-facebook.jpg"
import donationImage from "../../assets/images/dontion-images01.png";
import homeministrie from "../../assets/images/home-ofhope-minstrimage.gif";
import homeofinternational from "../../assets/images/home-ofhope-interntinal.gif";
import timothyimg from "../../assets/images/kids/timothy-imag.png";

import currentproject01 from "../../assets/images/kids/cuurentimag01.jpg";
import currentproject02 from "../../assets/images/kids/cuurentimag02.jpg";
import currentproject03 from "../../assets/images/kids/cuurentimag03.jpg";
import AboutUs from "../AboutUs"; // Import the AboutUs component
import HomeActivities from "./HomeActivities"; // Import the HomeActivities component
import Footer from '../Footer';
import ContactUs from "../ContactUs";
import ProgramsSection from "../ProgramsSection";
import CurrentProjects from "../CurrentProjects";
import HomeNews from "./HomeNews";
import { cards, projects } from "./homeData";

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
        <section id="home" className="bg-gradient-to-br bg-white   text-center relative overflow-hidden font-sans">
            {/* HERO - Modern gradient background with floating elements */}
            <div className="relative min-h-screen flex items-center justify-center">

                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-48 h-48 bg-yellow-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-200/20 rounded-full blur-xl animate-pulse delay-2000"></div>
                </div>

                <div className="max-w-6xl mx-auto px-4 pt-20 pb-12 relative z-10">


                    <h1 className="text-4xl md:text-7xl lg:text-4xl font-black  bg-clip-text bg-gradient-to-r text-[#1B3F92] mb-8 leading-tight animate-slide-up">
                        Give Hope.<br />
                        <span className="text-4xl md:text-6xl lg:text-4xl">Change Lives.</span>
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
                        src={childImageLarge}
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
            {/* UGANDA CONTEXT SECTION - New section with multiple images */}
            <div className="bg-gradient-to-br  bg-white py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-[#1B3F92] mb-4">
                            Understanding Uganda's Need
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Uganda faces unique challenges in caring for children with disabilities. Here's the context of our mission.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                            <img
                                src={ugandaCountry}
                                alt="Uganda Landscape"
                                className="w-full h-48 object-cover rounded-2xl mb-4"
                            />
                            <h3 className="text-xl font-bold text-[#1B3F92] mb-2">Our Beautiful Uganda</h3>
                            <p className="text-gray-600">A vibrant nation with rich culture and incredible people, facing challenges in healthcare accessibility.</p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                            <img
                                src={ugandaEducation}
                                alt="Education in Uganda"
                                className="w-full h-48 object-cover rounded-2xl mb-4"
                            />
                            <h3 className="text-xl font-bold text-[#1B3F92] mb-2">Education Access</h3>
                            <p className="text-gray-600">Working to ensure every child, regardless of ability, has access to quality education and learning opportunities.</p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                            <img
                                src={ugandaOrphanage}
                                alt="Orphanage Foundation"
                                className="w-full h-48 object-cover rounded-2xl mb-4"
                            />
                            <h3 className="text-xl font-bold text-[#1B3F92] mb-2">Foundation of Hope</h3>
                            <p className="text-gray-600">Building sustainable solutions for orphaned and abandoned children through comprehensive care programs.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-[#1B3F92]">Empowerment Through Action</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our empowerment projects focus on creating lasting change through skill development,
                                therapy programs, and community integration. We believe every child has the potential
                                to contribute meaningfully to society.
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#1B3F92] rounded-full"></span>
                                    Vocational training and life skills development
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#1B3F92] rounded-full"></span>
                                    Physical and occupational therapy programs
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#1B3F92] rounded-full"></span>
                                    Community awareness and inclusion initiatives
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                            <img
                                src={empowermentProjects}
                                alt="Empowerment Projects"
                                className="w-full h-64 object-cover rounded-2xl mb-4"
                            />
                            <h4 className="text-xl font-bold text-[#1B3F92] mb-2">Active Empowerment Programs</h4>
                            <p className="text-gray-600">Our comprehensive programs address immediate needs while building long-term capacity for independence.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* VIDEO + TEXT - Modern card layout with glassmorphism */}
            <div className="bg-gradient-to-br bg-white py-20 px-4">
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


            {/* CHILDREN'S STORIES - Additional images showcase */}
            <div className=" bg-white py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-[#1B3F92] mb-4">
                            Meet Our Children
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Every child at Home of Hope has a unique story of resilience, hope, and transformation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                            <img
                                src={childImage}
                                alt="Children at Home of Hope"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#1B3F92] mb-2">Our Family</h3>
                                <p className="text-gray-600">These beautiful children are the heart of our mission, each receiving individualized care and love.</p>
                            </div>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                            <img
                                src={childImageMain}
                                alt="Child receiving care"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#1B3F92] mb-2">Dedicated Care</h3>
                                <p className="text-gray-600">Our trained staff provide round-the-clock care, ensuring each child feels safe and loved.</p>
                            </div>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                            <img
                                src={ugandaProvidence}
                                alt="Providence care"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#1B3F92] mb-2">Divine Providence</h3>
                                <p className="text-gray-600">Through faith and community support, we provide hope and healing to those who need it most.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* INFO CARDS - Modern bento box layout */}
            <div className="bg-gradient-to-br bg-white py-20 px-4">
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
            <div className="bg-white py-10 px-4">
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
                        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6">

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

            {/* SUPPORTERS IMPACT SECTION - Modern partnership showcase */}
            <section id="supporters" className="bg-gradient-to-br bg-white py-24 px-4">
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
                                    src={homeofinternational}
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
                                    src={donationImage}
                                    alt="Donation Support"
                                    className="h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                                />
                                <h4 className="text-[#1B3F92] font-semibold text-lg mb-2">Community Donors</h4>
                                <p className="text-gray-600 text-sm">Individual supporters making a difference</p>
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
                                <span className="text-blue-600">
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
                        </p>                        {/* Enhanced Donation Options */}
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
                                    className="group w-full bg-[#1B3F92] text-white px-8 py-4 rounded-full font-bold  transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
                                        src={donationImage}
                                        alt="Direct Donation"
                                        className="h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                        Direct Impact
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-[#1B3F92] mb-4">Direct Support to Home of Hope</h4>
                                <p className="text-gray-600 mb-6">Direct support to our ministry and children's programs</p>
                                <button
                                    onClick={() => navigate("/donation")}
                                    className="group w-full bg-[#1B3F92]  text-white px-8 py-4 rounded-full font-bold  transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
            <div className="bg-white py-10 px-4">
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
            </div>
            {/* PROGRAMS  */}
            <ProgramsSection
                ugandaEducation={ugandaEducation}
                empowermentProjects={empowermentProjects}
                ugandaOrphanage={ugandaOrphanage}
                ugandaProvidence={ugandaProvidence}
            />

            {/* about us */}
            <AboutUs />
            {/* programs */}
            <HomeActivities />
            {/* new section */}
            <HomeNews />
            {/* CURRENT PROJECTS SECTION */}
            <CurrentProjects projects={projects} />
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
            {/* CONTACT US - Modern contact section */}
            <ContactUs />
            {/* FOOTER */}
            <Footer />
        </section>
    );
}
