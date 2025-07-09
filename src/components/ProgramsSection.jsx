import React from "react";

export default function ProgramsSection({
    ugandaEducation,
    empowermentProjects,
    ugandaOrphanage,
    ugandaProvidence
}) {
    return (
        <div id="our-support" className="bg-#FFFFFF py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-[#1B3F92] mb-4">
                        Our Programs in Action
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        See how our comprehensive programs are making a real difference in the lives of children and families across Uganda.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                    <div className="space-y-8">
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                            <h3 className="text-2xl font-bold text-[#1B3F92] mb-4">Comprehensive Care Programs</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                From therapy and medical care to education and empowerment, our programs address every
                                aspect of a child's development and well-being.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-[#1B3F92] mb-1">96</div>
                                    <div className="text-sm text-gray-600">Children in Care</div>
                                </div>
                                <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold text-[#1B3F92] mb-1">7</div>
                                    <div className="text-sm text-gray-600">Core Programs</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl">
                        <img
                            src={ugandaEducation}
                            alt="Education Programs"
                            className="w-full h-80 object-cover"
                        />
                        <div className="p-6">
                            <h4 className="text-xl font-bold text-[#1B3F92] mb-2">Education & Development</h4>
                            <p className="text-gray-600">Providing quality education and skill development opportunities for children of all abilities.</p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                        <img
                            src={empowermentProjects}
                            alt="Empowerment Projects"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h4 className="text-lg font-bold text-[#1B3F92] mb-2">Empowerment Projects</h4>
                            <p className="text-gray-600">Building skills and confidence through vocational training and therapeutic programs.</p>
                        </div>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                        <img
                            src={ugandaOrphanage}
                            alt="Orphanage Care"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h4 className="text-lg font-bold text-[#1B3F92] mb-2">Residential Care</h4>
                            <p className="text-gray-600">Providing safe, loving homes for children who need round-the-clock care and support.</p>
                        </div>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                        <img
                            src={ugandaProvidence}
                            alt="Community Support"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h4 className="text-lg font-bold text-[#1B3F92] mb-2">Community Outreach</h4>
                            <p className="text-gray-600">Extending our reach to support families and children in remote communities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
