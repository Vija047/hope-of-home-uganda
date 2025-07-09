import React from 'react';
import Footer from '../Footer';

export default function Services() {
    const services = [
        {
            id: 1,
            title: "Child Care Services",
            description: "Comprehensive care for children with disabilities, including daily living support, medical care, and emotional support.",
            icon: "👶",
            features: [
                "24/7 Care Support",
                "Medical Assistance",
                "Nutritional Support",
                "Emotional Care"
            ]
        },
        {
            id: 2,
            title: "Educational Programs",
            description: "Specialized educational programs designed to help children with disabilities reach their full potential.",
            icon: "📚",
            features: [
                "Special Education",
                "Skill Development",
                "Literacy Programs",
                "Vocational Training"
            ]
        },
        {
            id: 3,
            title: "Healthcare Services",
            description: "Essential healthcare services including regular check-ups, medication management, and therapeutic interventions.",
            icon: "🏥",
            features: [
                "Medical Check-ups",
                "Therapy Sessions",
                "Medication Management",
                "Health Monitoring"
            ]
        },
        {
            id: 4,
            title: "Community Outreach",
            description: "Programs that extend our support beyond our facility to reach more families in the community.",
            icon: "🤝",
            features: [
                "Family Support",
                "Community Education",
                "Awareness Programs",
                "Resource Sharing"
            ]
        },
        {
            id: 5,
            title: "Empowerment Programs",
            description: "Programs focused on empowering children and families to become more independent and self-sufficient.",
            icon: "💪",
            features: [
                "Life Skills Training",
                "Independence Support",
                "Confidence Building",
                "Leadership Development"
            ]
        },
        {
            id: 6,
            title: "Nutrition Programs",
            description: "Ensuring proper nutrition for healthy growth and development of all children in our care.",
            icon: "🥗",
            features: [
                "Balanced Meals",
                "Nutritional Assessment",
                "Dietary Planning",
                "Feeding Support"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="pt-24 pb-16">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-block bg-[#1B3F92]/10 text-[#1B3F92] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            🎯 Our Services
                        </div>
                        <h1 className="text-5xl font-bold text-[#1B3F92] mb-6">
                            What We Offer
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            We provide comprehensive services to support children with disabilities and their families,
                            helping them thrive and reach their full potential.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div key={service.id} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <div className="text-center mb-6">
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h3 className="text-2xl font-bold text-[#1B3F92] mb-4">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                </div>

                                <div className="space-y-3">
                                    {service.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-[#1B3F92] rounded-full"></div>
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-16">
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                            <h3 className="text-3xl font-bold text-[#1B3F92] mb-4">
                                Ready to Make a Difference?
                            </h3>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                Your support helps us continue providing these essential services to children who need them most.
                                Every contribution makes a real difference in their lives.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-[#1B3F92] text-white px-8 py-4 rounded-full hover:bg-blue-600 transition-colors font-semibold">
                                    Donate Now
                                </button>
                                <button className="border-2 border-[#1B3F92] text-[#1B3F92] px-8 py-4 rounded-full hover:bg-[#1B3F92] hover:text-white transition-colors font-semibold">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
