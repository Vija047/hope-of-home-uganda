import React from "react";

export default function CurrentProjects({ projects }) {
    return (
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
    );
}
