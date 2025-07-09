import React from "react";
import { useNavigate } from "react-router-dom";

// Import images from the assets
import staffImage from "../../assets/images/aboutus/staff04.jpg";
import childImage01 from "../../assets/images/kids/child01.jpg";
import childImage02 from "../../assets/images/kids/child02.jpg";
import childImage03 from "../../assets/images/kids/child03.jpg";
import childImage04 from "../../assets/images/kids/child04.jpg";
import childImage05 from "../../assets/images/kids/child05.jpg";
import editImage from "../../assets/images/aboutus/Edith'simg.jpg";
import staffImage02 from "../../assets/images/aboutus/staff02.jpg";
import childImageMain from "../../assets/images/childimage.jpg";
import currentImage01 from "../../assets/images/kids/cuurentimag01.jpg";

export default function HomeNews() {
    const navigate = useNavigate();

    const newsArticles = [
        {
            id: 1,
            date: "May 1, 2024",
            author: "Edith Lukabwe",
            title: "Home of Hope Outreach Clinics a Success!",
            excerpt: "Much as there has been price fluctuations of drugs in the market, the number of beneficiaries from the Centre clinic has kept on growing...",
            image: staffImage,
            content: [
                "Much as there has been price fluctuations of drugs in the market, the number of beneficiaries from the Centre clinic has kept on growing. This is attributed to the testimonies of improvement in the condition of patients due to access to the medication.",
                "During the outreach clinics new clients are prepared to cope with the fact that their condition is a permanent situation and also prepared to overcome the challenges they meet in the community due to their condition.",
                "Consistency in uptake of the medication reduces the risks of attacks among patients and attending the outreach clinics in person helps the clients share with the medical team on their condition and also forge a way forward.",
                "Our Outreach clinics give an opportunity to people in the hard to reach areas have access to free therapy sessions and also get equipped with therapy techniques which they apply on the children while at home."
            ],
            imageCaption: "Social Worker Steven educating beneficiaries of the programme before receiving medication"
        },
        {
            id: 2,
            date: "April 1, 2024",
            author: "Edith Lukabwe",
            title: "Children's Infections Brought Under Control",
            excerpt: "32 children received medical services during the period under review and these were treated of illness such as flu, cough and malaria...",
            image: childImage01,
            content: [
                "32 children received medical services during the period under review and these were treated of illness such as flu, cough and malaria however, there has also been an out brake of Red eyes in the entire country and at Home of Hope, some of the children who have been identified with the infection have been isolated and managed by the health team.",
                "Care givers have also been sensitised on how the infection is transmitted and how best to control. As a result, there has been a reduction in the rate of infection especially among the children.",
                "Some of the care givers identified with red eyes have been given time off and free medication to enable them manage their conditions, this has helped minimize the level of infection among the children.",
                "Early identification and isolation of the infected children helps control the rapid spread of the infections. Care givers on night shift have also been cautioned the management of the children at night."
            ],
            imageCaption: "Children receiving medical care and attention from our healthcare team"
        },
        {
            id: 3,
            date: "March 15, 2024",
            author: "Edith Lukabwe",
            title: "New Educational Programs Launched",
            excerpt: "We are excited to announce the launch of our new educational programs designed to provide comprehensive learning opportunities for children with special needs...",
            image: childImage02,
            content: [
                "We are excited to announce the launch of our new educational programs designed to provide comprehensive learning opportunities for children with special needs.",
                "The programs include specialized curriculum adapted to each child's unique abilities and learning style, ensuring no child is left behind in their educational journey.",
                "Our trained educators work closely with therapists to create an integrated approach that combines learning with therapeutic interventions.",
                "Early results show remarkable improvement in both academic performance and social skills among participating children."
            ],
            imageCaption: "Children participating in our new educational programs"
        }
    ];

    const featuredNews = [
        {
            title: "Monthly Health Check-ups",
            image: childImage03,
            summary: "Regular health assessments ensure early detection and treatment of medical conditions."
        },
        {
            title: "Therapeutic Activities",
            image: childImage04,
            summary: "Engaging activities help children develop motor skills and social interactions."
        },
        {
            title: "Community Outreach",
            image: childImage05,
            summary: "Extending our services to reach more children in remote areas of Uganda."
        }
    ];

    return (
        <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen">
            {/* Hero Section */}
            <div className="relative min-h-[60vh] flex items-center justify-center">
                {/* Background with overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={currentImage01}
                        alt="Children at Home of Hope"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-blue-50/80"></div>
                </div>

                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-48 h-48 bg-yellow-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-200/20 rounded-full blur-xl animate-pulse delay-2000"></div>
                </div>

                <div className="max-w-6xl mx-auto px-4 pt-20 pb-12 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#1B3F92] mb-6 leading-tight">
                        Latest News & Updates
                    </h1>
                    <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                        Stay informed about our ongoing programs, success stories, and the impact we're making in the lives of children with special needs.
                    </p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                            <div className="text-2xl font-bold text-[#1B3F92] mb-1">50+</div>
                            <div className="text-sm text-gray-600">News Articles</div>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                            <div className="text-2xl font-bold text-[#1B3F92] mb-1">Monthly</div>
                            <div className="text-sm text-gray-600">Updates</div>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                            <div className="text-2xl font-bold text-[#1B3F92] mb-1">100%</div>
                            <div className="text-sm text-gray-600">Transparent</div>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                            <div className="text-2xl font-bold text-[#1B3F92] mb-1">Real</div>
                            <div className="text-sm text-gray-600">Impact</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Featured News Grid */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-[#1B3F92] mb-8 text-center">Quick Updates</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {featuredNews.map((news, index) => (
                            <div key={index} className="bg-white/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                <img
                                    src={news.image}
                                    alt={news.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#1B3F92] mb-2">{news.title}</h3>
                                    <p className="text-gray-600 text-sm">{news.summary}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main News Articles */}
                <div className="space-y-16">
                    {newsArticles.map((article, index) => (
                        <article key={article.id} className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 0 ? "" : "lg:grid-cols-[1fr_1.2fr]"}`}>
                            <div className={`${index % 2 === 0 ? "order-2 lg:order-1" : "order-2"}`}>
                                <div className="bg-white/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="p-6">
                                        <p className="text-center text-sm text-gray-600 italic">
                                            {article.imageCaption}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={`${index % 2 === 0 ? "order-1 lg:order-2" : "order-1"} space-y-6`}>
                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-[#1B3F92] rounded-full"></div>
                                        <span>{article.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={editImage}
                                            alt={article.author}
                                            className="w-6 h-6 rounded-full object-cover"
                                        />
                                        <span>by {article.author}</span>
                                    </div>
                                </div>

                                <h2 className="text-3xl font-bold text-[#1B3F92] leading-tight">
                                    {article.title}
                                </h2>

                                <div className="bg-gradient-to-r from-[#1B3F92]/10 to-blue-100/50 rounded-2xl p-4 border-l-4 border-[#1B3F92]">
                                    <p className="text-[#1B3F92] font-medium italic">
                                        {article.excerpt}
                                    </p>
                                </div>

                                <div className="space-y-4 text-gray-700">
                                    {article.content.map((paragraph, i) => (
                                        <p key={i} className="leading-relaxed">{paragraph}</p>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <button
                                        onClick={() => navigate("/donation")}
                                        className="bg-gradient-to-r from-[#1B3F92] to-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:from-[#16316E] hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                    >
                                        Support This Cause
                                    </button>
                                    <button className="bg-white/80 backdrop-blur-sm text-[#1B3F92] font-semibold px-6 py-3 rounded-full border border-[#1B3F92]/20 hover:border-[#1B3F92]/50 transition-all duration-300 transform hover:scale-105">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

               
               
               
                </div>
            </div>
        
    );
}
