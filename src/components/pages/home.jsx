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
        <section id="home" className="bg-[#FFFCF0] text-center relative overflow-hidden font-sans">

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
                    Donate
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
            <div className="bg-[#FFFCF0] flex flex-col md:flex-row items-center justify-center p-10 gap-10">
                <div className="w-full md:w-2/3">
                    <video
                        src="/videos/Home_of_Hope_Doc3.mp4"
                        controls
                        className="w-full max-w-3xl mx-auto rounded-lg shadow-xl"

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
            {/* video 02  */}
            <div className="bg-[#FFFCF0] py-10 px-4">
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
                            <div className="relative bg-[#FFFCF0] bg-opacity-95 shadow-2xl rounded-2xl p-8 max-w-2xl w-full  flex flex-col md:flex-row items-center gap-8 overflow-hidden" style={{
                                backgroundImage: `url(${facebookimage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                minHeight: '320px',
                            }}>
                                {/* Overlay for better readability */}
                                <div className="absolute inset-0 bg-[#FFFCF0] bg-opacity-80 pointer-events-none rounded-2xl" />
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
                        <div className="bg-[#FFFCF0] rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6">

                            {/* Image and Caption bg-[#FFFCF0] */}
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

            {/* SUPPORTERS & IMPACT SECTION */}
            <section id="supporters" className="bg-[#FFFCF0] py-20 px-4">
                <div className="max-w-6xl mx-auto">

                    {/* Partners Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#1B3F92] mb-4">Our Trusted Partners</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Working together with incredible organizations to bring hope and healing to children in Uganda
                        </p>

                        {/* Partner Logos */}
                        <div className="flex flex-wrap justify-center items-center gap-12 mt-10 py-8 px-6 rounded-2xl shadow-lg">
                            <img src={dontion01} alt="Our Hope International" className="h-20 hover:scale-105 transition-transform" />
                            <img src={homeministrie} alt="Home of Hope Logo" className="h-20 hover:scale-105 transition-transform" />
                            <img src={homeofinternational} alt="Hope Builders International" className="h-20 hover:scale-105 transition-transform" />
                        </div>
                    </div>

                    {/* Impact Story */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-[#1B3F92]">Every Child Deserves a Future</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Without the continued support of our valued partners and supporters, Home of Hope could not
                                provide the essential services needed to help disabled and abandoned children in Uganda thrive.
                            </p>
                            <div className="bg-[#1B3F92] text-white p-6 rounded-xl">
                                <p className="italic">
                                    "Thank you for believing in our mission. Together, we are creating brighter tomorrows
                                    for children who need it most."
                                </p>
                                <p className="mt-3 font-semibold">— Edith Lukabwe, Director</p>
                            </div>
                        </div>

                        {/* Featured Child Story */}
                        <div className="bg-[#FFFCF0] rounded-2xl shadow-xl overflow-hidden">
                            <div className="relative">
                                <img
                                    src={timothyimg}
                                    alt="Timothy and caregiver"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h4 className="text-xl font-bold">Meet Timothy</h4>
                                    <p className="text-sm opacity-90">Age 8, Dreams of becoming a teacher</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <h4 className="text-lg font-semibold text-[#1B3F92] mb-3">Lighting the Way to Timothy's Future</h4>
                                <p className="text-gray-600 text-sm mb-4">
                                    Timothy arrived at Home of Hope as an abandoned child with special needs.
                                    Today, he's thriving in our care and educational programs.
                                </p>
                                <button className="bg-[#1B3F92] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#16316E] transition">
                                    Read His Story
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-[#1B3F92] mb-6">
                            Your Donation Can Change Everything
                        </h3>
                        <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
                            Join our community of supporters and help us provide medical care, education, and love
                            to children with disabilities in Uganda. Every contribution makes a real difference.
                        </p>

                        {/* Donation Options */}
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <div className="bg-[#FFFCF0] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                <img src={homeofinternational} alt="Our Hope International" className="h-12 mx-auto mb-3" />
                                <h4 className="font-semibold text-[#1B3F92] mb-2">Donate through Our Hope International</h4>
                                <button
                                    onClick={() => navigate("/donation")}
                                    className="bg-[#1B3F92] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#16316E] transition w-full"
                                >
                                    Donate Now
                                </button>
                            </div>

                            <div className="bg-[#FFFCF0] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                <img src={homeministrie} alt="Home of Hope" className="h-12 mx-auto mb-3" />
                                <h4 className="font-semibold text-[#1B3F92] mb-2">Donate through Home of Hope Ministries</h4>
                                <button
                                    onClick={() => navigate("/donation")}
                                    className="bg-[#1B3F92] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#16316E] transition w-full"
                                >
                                    Donate Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* video 03 */}
            <div className="bg-[#FFFCF0] py-10 px-4">
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
                <section id="our-story" className="w-full py-16 px-4 md:px-16 bg-[#FFFCF0]">
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
                <section id="our-team" className="w-full py-16 px-4 md:px-16 bg-[#FFFCF0]">
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
                <section id="our-mission" className="w-full py-16 px-4 md:px-16 bg-[#FFFCF0]">
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
                <section id="our-vision" className="w-full py-16 px-4 md:px-16 bg-[#FFFCF0] text-center">
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



            {/* Our Need for Support */}
            <section id="our-support" className="w-full py-16 px-4 md:px-16 bg-[#FFFCF0] text-center">
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
            <section id="current-projects" className="bg-[#FFFCF0] py-16 px-4">
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
                    className="inline-block bg-[#FFFCF0] text-[#1B3F92] font-bold px-10 py-4 rounded-full hover:bg-gray-200 transition"
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
