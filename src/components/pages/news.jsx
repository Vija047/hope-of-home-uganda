import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';

// Import images
import staffImage from "../../assets/images/aboutus/staff04.jpg";
import childImage01 from "../../assets/images/kids/child01.jpg";
import childImage02 from "../../assets/images/kids/child02.jpg";
import childImage03 from "../../assets/images/kids/child03.jpg";
import childImage04 from "../../assets/images/kids/child04.jpg";
import childImage05 from "../../assets/images/kids/child05.jpg";
import childImage06 from "../../assets/images/kids/child06.jpg";
import childImage07 from "../../assets/images/kids/child07.jpg";
import childImage08 from "../../assets/images/kids/child08.jpg";
import childImage09 from "../../assets/images/kids/child09.jpg";
import editImage from "../../assets/images/aboutus/Edith'simg.jpg";
import staffImage02 from "../../assets/images/aboutus/staff02.jpg";
import staffImage03 from "../../assets/images/aboutus/staff03.jpg";
import staffImage05 from "../../assets/images/aboutus/staff05.jpg";
import staffImage06 from "../../assets/images/aboutus/staff06.jpg";
import childImageMain from "../../assets/images/childimage.jpg";
import currentImage01 from "../../assets/images/kids/cuurentimag01.jpg";
import currentImage02 from "../../assets/images/kids/cuurentimag02.jpg";
import currentImage03 from "../../assets/images/kids/cuurentimag03.jpg";
import ugandaEducation from "../../assets/images/Uganda-Educatio .jpg";
import empowermentProjects from "../../assets/images/EMPOWERMENT-PROJECTS.jpg";

export default function News() {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('All');

    const newsItems = [
        {
            id: 1,
            title: "Home of Hope Outreach Clinics a Success!",
            date: "May 1, 2024",
            excerpt: "Much as there has been price fluctuations of drugs in the market, the number of beneficiaries from the Centre clinic has kept on growing. This is attributed to the testimonies of improvement in the condition of patients due to access to the medication.",
            fullContent: "Much as there has been price fluctuations of drugs in the market, the number of beneficiaries from the Centre clinic has kept on growing. This is attributed to the testimonies of improvement in the condition of patients due to access to the medication. During the outreach clinics new clients are prepared to cope with the fact that their condition is a permanent situation and also prepared to overcome the challenges they meet in the community due to their condition. Consistency in uptake of the medication reduces the risks of attacks among patients and attending the outreach clinics in person helps the clients share with the medical team on their condition and also forge a way forward. Our Outreach clinics give an opportunity to people in the hard to reach areas have access to free therapy sessions and also get equipped with therapy techniques which they apply on the children while at home.",
            image: staffImage,
            category: "Health",
            author: "Edith Lukwabe",
            featured: true
        },
        {
            id: 2,
            title: "Children's Infections Brought Under Control",
            date: "April 1, 2024",
            excerpt: "32 children received medical services during the period under review and these were treated of illness such as flu, cough and malaria. There has also been an outbreak of red eyes in the entire country.",
            fullContent: "32 children received medical services during the period under review and these were treated of illness such as flu, cough and malaria. There has also been an outbreak of red eyes in the entire country and at Home of Hope, some of the children who have been identified with the infection have been isolated and managed by the health team. Care givers have also been sensitised on how the infection is transmitted and how best to control. As a result, there has been a reduction in the rate of infection especially among the children. Some of the care givers identified with red eyes have been given time off and free medication to enable them manage their conditions, this has helped minimize the level of infection among the children.",
            image: childImage01,
            category: "Health",
            author: "Edith Lukwabe",
            featured: true
        },
        {
            id: 3,
            title: "New Educational Programs Launched Successfully",
            date: "March 15, 2024",
            excerpt: "We are excited to announce the launch of our new educational programs designed to provide comprehensive learning opportunities for children with special needs.",
            fullContent: "We are excited to announce the launch of our new educational programs designed to provide comprehensive learning opportunities for children with special needs. The programs include specialized curriculum adapted to each child's unique abilities and learning style, ensuring no child is left behind in their educational journey. Our trained educators work closely with therapists to create an integrated approach that combines learning with therapeutic interventions. Early results show remarkable improvement in both academic performance and social skills among participating children.",
            image: ugandaEducation,
            category: "Education",
            author: "Edith Lukwabe",
            featured: false
        },
        {
            id: 4,
            title: "Amaanyi Center Expansion Progress Update",
            date: "February 28, 2024",
            excerpt: "The Amaanyi Center expansion is progressing well with new facilities being constructed to accommodate more children with special needs.",
            fullContent: "The Amaanyi Center expansion is progressing well with new facilities being constructed to accommodate more children with special needs. This expansion will increase our capacity to serve 150 children, up from the current 100. The new facilities include modern therapy rooms, educational spaces, and recreational areas designed specifically for children with disabilities. We are grateful for the continued support from our donors and volunteers who make this expansion possible.",
            image: currentImage01,
            category: "Infrastructure",
            author: "Timothy Ssekandi",
            featured: false
        },
        {
            id: 5,
            title: "Therapeutic Activities Show Remarkable Results",
            date: "February 15, 2024",
            excerpt: "Our therapeutic activities program has shown remarkable results in helping children develop motor skills and social interactions.",
            fullContent: "Our therapeutic activities program has shown remarkable results in helping children develop motor skills and social interactions. The program includes physiotherapy, occupational therapy, and speech therapy tailored to each child's specific needs. Children participating in these activities have shown significant improvement in their ability to communicate, move independently, and interact with others. The program has been running for six months and has already positively impacted over 80 children.",
            image: childImage02,
            category: "Therapy",
            author: "Sarah Namukasa",
            featured: false
        },
        {
            id: 6,
            title: "Community Outreach Program Reaches 200 Families",
            date: "January 30, 2024",
            excerpt: "Our community outreach program has successfully reached 200 families in remote areas of Uganda, providing essential services and support.",
            fullContent: "Our community outreach program has successfully reached 200 families in remote areas of Uganda, providing essential services and support. The program includes home visits, family counseling, and provision of mobility equipment for children with disabilities. We have also conducted awareness sessions about disability rights and inclusion in the community. The program has been instrumental in identifying children who need our services and connecting them with appropriate support.",
            image: childImage03,
            category: "Community",
            author: "Edith Lukwabe",
            featured: false
        },
        {
            id: 7,
            title: "Vocational Training Program Graduates 15 Young Adults",
            date: "January 15, 2024",
            excerpt: "Fifteen young adults with special needs have successfully graduated from our vocational training program, ready to start their careers.",
            fullContent: "Fifteen young adults with special needs have successfully graduated from our vocational training program, ready to start their careers. The program provided training in various skills including tailoring, crafts, computer literacy, and entrepreneurship. All graduates have been equipped with the necessary tools and knowledge to start their own businesses or find employment. This achievement demonstrates that with proper support and training, individuals with disabilities can lead independent and productive lives.",
            image: empowermentProjects,
            category: "Empowerment",
            author: "Timothy Ssekandi",
            featured: false
        },
        {
            id: 8,
            title: "Monthly Health Check-ups Ensure Early Detection",
            date: "December 20, 2023",
            excerpt: "Regular health assessments ensure early detection and treatment of medical conditions among our children.",
            fullContent: "Regular health assessments ensure early detection and treatment of medical conditions among our children. Our monthly health check-ups have been instrumental in identifying health issues early and providing appropriate treatment. During the last quarter, we conducted health screenings for 120 children, with 95% receiving clean bills of health. The remaining 5% were provided with necessary medical interventions and are now in stable condition.",
            image: childImage04,
            category: "Health",
            author: "Dr. Grace Nabwire",
            featured: false
        },
        {
            id: 9,
            title: "Nutrition Program Improves Children's Health",
            date: "December 5, 2023",
            excerpt: "Our nutrition program has significantly improved the health and development of children in our care.",
            fullContent: "Our nutrition program has significantly improved the health and development of children in our care. The program provides balanced meals three times a day, with special attention to children who require specific dietary needs due to their medical conditions. We have seen a 40% improvement in children's weight gain and overall health status. The program also includes nutrition education for caregivers to ensure consistent healthy eating habits.",
            image: childImage05,
            category: "Nutrition",
            author: "Mary Nakato",
            featured: false
        },
        {
            id: 10,
            title: "Volunteer Program Brings Global Support",
            date: "November 28, 2023",
            excerpt: "Our volunteer program has brought together individuals from around the world to support our mission.",
            fullContent: "Our volunteer program has brought together individuals from around the world to support our mission. This year, we welcomed 45 volunteers from 12 different countries who contributed their skills and time to various programs. Volunteers have assisted in education, therapy, construction, and administrative tasks. Their diverse backgrounds and experiences have enriched our programs and provided valuable cultural exchange opportunities for our children.",
            image: childImage06,
            category: "Community",
            author: "Edith Lukwabe",
            featured: false
        },
        {
            id: 11,
            title: "Technology Integration Enhances Learning",
            date: "November 15, 2023",
            excerpt: "Introduction of assistive technology has revolutionized the way our children learn and communicate.",
            fullContent: "Introduction of assistive technology has revolutionized the way our children learn and communicate. We have integrated tablets, communication devices, and specialized software into our educational programs. Children who were previously unable to communicate effectively can now express themselves using assistive communication devices. The technology has also made learning more engaging and accessible for children with different types of disabilities.",
            image: childImage07,
            category: "Technology",
            author: "James Mukasa",
            featured: false
        },
        {
            id: 12,
            title: "Art Therapy Program Unlocks Creative Potential",
            date: "October 30, 2023",
            excerpt: "Our art therapy program has helped children express themselves creatively while developing important life skills.",
            fullContent: "Our art therapy program has helped children express themselves creatively while developing important life skills. Through painting, drawing, and crafts, children have found new ways to communicate their feelings and experiences. The program has been particularly beneficial for children with autism and those who struggle with verbal communication. Many children have discovered hidden talents and gained confidence through their artistic achievements.",
            image: childImage08,
            category: "Therapy",
            author: "Patricia Namazzi",
            featured: false
        }
    ];

    const categories = ['All', 'Health', 'Education', 'Therapy', 'Community', 'Infrastructure', 'Empowerment', 'Nutrition', 'Technology'];

    const filteredNews = activeCategory === 'All'
        ? newsItems
        : newsItems.filter(item => item.category === activeCategory);

    const featuredNews = newsItems.filter(item => item.featured);
    const regularNews = newsItems.filter(item => !item.featured);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Hero Section */}
            <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
    

               

                <div className="max-w-6xl mx-auto px-4 pt-20 pb-12 relative z-10 text-center">
                   
                    <h1 className="text-4xl md:text-7xl lg:text-6xl font-bold text-[#1B3F92] mb-8 leading-tight animate-slide-up delay-200">
                        News & Updates
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 animate-slide-up delay-300">
                        Stay informed about our latest activities, achievements, and the transformative impact we're making in the lives of children with special needs across Uganda.
                    </p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-slide-up delay-500">
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                            <div className="text-3xl font-bold text-[#1B3F92] mb-2">50+</div>
                            <div className="text-sm text-gray-600">News Articles</div>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                            <div className="text-3xl font-bold text-[#1B3F92] mb-2">Monthly</div>
                            <div className="text-sm text-gray-600">Updates</div>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                            <div className="text-3xl font-bold text-[#1B3F92] mb-2">100%</div>
                            <div className="text-sm text-gray-600">Transparent</div>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                            <div className="text-3xl font-bold text-[#1B3F92] mb-2">Real</div>
                            <div className="text-sm text-gray-600">Impact</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 pb-16">
                {/* Featured News Section */}
                <div className="mb-20">
                    <h2 className="text-4xl font-bold text-[#1B3F92] mb-12 text-center">Featured Stories</h2>
                    <div className="grid lg:grid-cols-2 gap-12">
                        {featuredNews.map((item) => (
                            <div key={item.id} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-[#1B3F92] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                            {item.category}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>

                                <div className="p-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <div className="w-2 h-2 bg-[#1B3F92] rounded-full"></div>
                                            <span>{item.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <img
                                                src={editImage}
                                                alt={item.author}
                                                className="w-6 h-6 rounded-full object-cover"
                                            />
                                            <span>by {item.author}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#1B3F92] mb-4 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {item.excerpt}
                                    </p>
                                    <button className="bg-gradient-to-r from-[#1B3F92] to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-[#16316E] hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                        Read Full Story →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Category Filter */}
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-[#1B3F92] mb-8 text-center">All News</h2>
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${activeCategory === category
                                        ? 'bg-[#1B3F92] text-white shadow-xl'
                                        : 'bg-white/80 text-[#1B3F92] hover:bg-[#1B3F92]/10'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* News Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {filteredNews.map((item) => (
                        <div key={item.id} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-[#1B3F92] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                                        {item.category}
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <div className="w-2 h-2 bg-[#1B3F92] rounded-full"></div>
                                        <span>{item.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <img
                                            src={editImage}
                                            alt={item.author}
                                            className="w-5 h-5 rounded-full object-cover"
                                        />
                                        <span>{item.author}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-[#1B3F92] mb-3 group-hover:text-blue-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                                    {item.excerpt}
                                </p>
                                <button className="text-[#1B3F92] font-semibold hover:text-blue-600 transition-colors flex items-center gap-2">
                                    Read More
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Newsletter Section */}
                <div className="text-center">
                    <div className="bg-gradient-to-r from-[#1B3F92]/10 to-blue-100/50 backdrop-blur-sm rounded-3xl p-12 shadow-xl relative overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-32 h-32 bg-[#1B3F92] rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-400 rounded-full blur-3xl"></div>
                        </div>

                        <div className="relative z-10">
                            <div className="inline-block bg-[#1B3F92]/10 text-[#1B3F92] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                📧 Stay Connected
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#1B3F92] mb-6">
                                Never Miss an Update
                            </h3>
                            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                                Subscribe to our newsletter and be the first to know about our latest programs, success stories, and how your support is making a difference.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="flex-1 px-6 py-4 rounded-full border-2 border-[#1B3F92]/20 focus:border-[#1B3F92] focus:outline-none bg-white/80 backdrop-blur-sm shadow-lg"
                                />
                                <button className="bg-gradient-to-r from-[#1B3F92] to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-[#16316E] hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    Subscribe Now
                                </button>
                            </div>
                            <p className="text-sm text-gray-500 mt-4">
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
