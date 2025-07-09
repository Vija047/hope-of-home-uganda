import React from "react";
import peopleUgandaGroup from "../../assets/images/people-uganda-group-local-kids.webp";
// Import multiple images for report cards
import child01Image from "../../assets/images/kids/child01.jpg";
import child02Image from "../../assets/images/kids/child02.jpg";
import child03Image from "../../assets/images/kids/child03.jpg";
import child04Image from "../../assets/images/kids/child04.jpg";
import child05Image from "../../assets/images/kids/child05.jpg";
import child06Image from "../../assets/images/kids/child06.jpg";
import child07Image from "../../assets/images/kids/child07.jpg";
import child08Image from "../../assets/images/kids/child08.jpg";
import child09Image from "../../assets/images/kids/child09.jpg";
import currentImage01 from "../../assets/images/kids/cuurentimag01.jpg";
import currentImage02 from "../../assets/images/kids/cuurentimag02.jpg";
import currentImage03 from "../../assets/images/kids/cuurentimag03.jpg";
import ourMissionImage from "../../assets/images/Our-Mission.jpg";
import ourVisionImage from "../../assets/images/OUR-VISION.jpg";
import ourNeedImage from "../../assets/images/OUR-NEED -FOR -SUPPORT.jpg";
import ugandaEducationImage from "../../assets/images/Uganda-Educatio .jpg";
import ugandaOrphanageImage from "../../assets/images/Uganda-Orphanage-Home-Foundation-jpg.jpg";
import ugandaProvidenceImage from "../../assets/images/uganda-providence-pg.jpg";

// Import all reports
import april2024Report from "../../assets/reports-pdf/april_2024.pdf";
import april2025Report from "../../assets/reports-pdf/april_2025.pdf";
import august2023Report from "../../assets/reports-pdf/august_2023.pdf";
import endOfYear2024Report from "../../assets/reports-pdf/end_of_year_2024.pdf";
import feb2024Report from "../../assets/reports-pdf/feb_2024.pdf";
import febMar2025Report from "../../assets/reports-pdf/feb_mar__2025.pdf";
import jan2025Report from "../../assets/reports-pdf/jan_2025.pdf";
import july2024Report from "../../assets/reports-pdf/july_2024_report.pdf";
import june2023Report from "../../assets/reports-pdf/june_2023.pdf";
import june2024Report from "../../assets/reports-pdf/june_2024.pdf";
import march2024Report from "../../assets/reports-pdf/march_2024.pdf";
import may2024Report from "../../assets/reports-pdf/may_2024.pdf";
import nov2023Report from "../../assets/reports-pdf/nov_2023.pdf";
import nov2024Report from "../../assets/reports-pdf/nov_2024_report.pdf";
import oct2023Report from "../../assets/reports-pdf/oct_2023.pdf";
import oct2024Report from "../../assets/reports-pdf/oct_2024_report.pdf";
import july2023Report from "../../assets/reports-pdf/our_july_2023.pdf";
import may2023Report from "../../assets/reports-pdf/our_may_2023.pdf";
import sept2024Report from "../../assets/reports-pdf/sept__2024_report.pdf";

// Report data organized by year and month
const reports = [
    // 2025 Reports
    {
        year: 2025,
        reports: [
            {
                month: "April",
                file: april2025Report,
                description: "April 2025 updates on our educational programs, health initiatives, and community outreach efforts. See how your support is making a lasting impact in the lives of children in Uganda.",
                image: ugandaEducationImage
            },
            {
                month: "February-March",
                file: febMar2025Report,
                description: "Combined report covering our activities in February and March 2025, featuring special educational events, health campaigns, and facility improvements.",
                image: ourVisionImage
            },
            {
                month: "January",
                file: jan2025Report,
                description: "Our first report of 2025 highlights new year initiatives, expansion plans, and success stories from the children at Home of Hope Uganda.",
                image: child01Image
            }
        ]
    },
    // 2024 Reports
    {
        year: 2024,
        reports: [
            {
                month: "End of Year",
                file: endOfYear2024Report,
                description: "Annual summary of our achievements, challenges, and milestones throughout 2024. This comprehensive report includes financial transparency and future planning.",
                image: ugandaOrphanageImage
            },
            {
                month: "November",
                file: nov2024Report,
                description: "November 2024 report showcasing our holiday preparations, educational programs, and community engagement activities as we approach year-end.",
                image: child02Image
            },
            {
                month: "October",
                file: oct2024Report,
                description: "October 2024 update on our ongoing projects, health initiatives, and educational programs at Home of Hope Uganda.",
                image: child03Image
            },
            {
                month: "September",
                file: sept2024Report,
                description: "September 2024 report highlighting our back-to-school activities, health checkups, and facility improvements for the children.",
                image: child04Image
            },
            {
                month: "July",
                file: july2024Report,
                description: "July 2024 report highlights educational empowerment, health initiatives, and community engagement. Your support continues to bring positive change to vulnerable children in Uganda.",
                image: child05Image
            },
            {
                month: "June",
                file: june2024Report,
                description: "June 2024 update on summer activities, educational progress, and healthcare initiatives for the children at Home of Hope Uganda.",
                image: child06Image
            },
            {
                month: "May",
                file: may2024Report,
                description: "May 2024 report covering our spring initiatives, new admissions, and progress in our vocational training programs for older children.",
                image: currentImage01
            },
            {
                month: "April",
                file: april2024Report,
                description: "April 2024 updates on our educational achievements, health programs, and community outreach activities.",
                image: child07Image
            },
            {
                month: "March",
                file: march2024Report,
                description: "March 2024 report detailing our quarterly achievements, educational milestones, and facility improvements.",
                image: child08Image
            },
            {
                month: "February",
                file: feb2024Report,
                description: "February 2024 report covering health initiatives, educational programs, and special events at Home of Hope Uganda.",
                image: child09Image
            }
        ]
    },
    // 2023 Reports
    {
        year: 2023,
        reports: [
            {
                month: "November",
                file: nov2023Report,
                description: "November 2023 report highlighting our preparation for the holiday season, academic achievements, and community involvement.",
                image: currentImage02
            },
            {
                month: "October",
                file: oct2023Report,
                description: "October 2023 updates on our fall activities, educational progress, and health initiatives at Home of Hope Uganda.",
                image: currentImage03
            },
            {
                month: "August",
                file: august2023Report,
                description: "August 2023 report covering summer programs, educational achievements, and facility improvements for our children.",
                image: ourMissionImage
            },
            {
                month: "July",
                file: july2023Report,
                description: "July 2023 report showcasing our mid-year achievements, health campaigns, and success stories from the children.",
                image: ourNeedImage
            },
            {
                month: "June",
                file: june2023Report,
                description: "June 2023 updates on educational programs, facility improvements, and community engagement activities.",
                image: ugandaProvidenceImage
            },
            {
                month: "May",
                file: may2023Report,
                description: "May 2023 report highlighting spring initiatives, health checkups, and educational progress at Home of Hope Uganda.",
                image: ourVisionImage
            }
        ]
    }
];

export default function MonthlyReports() {
    return (
        <section className="bg-white min-h-screen font-sans">
            {/* Header with background image */}
            <div className="relative py-24 px-4 mb-12">
                {/* Background image with overlay */}


                {/* Header content */}
                <div className="max-w-6xl mx-auto relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-[#1B3F92] mb-6 leading-tight">
                        Monthly Impact Reports
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Transparency is at the heart of what we do. Our monthly reports provide detailed updates on our activities,
                        progress, challenges, and the impact of your generous support on the lives of vulnerable children in Uganda.
                    </p>
                </div>
            </div>

            {/* Reports content */}
            <div className="max-w-6xl mx-auto px-4 pb-24">
                {reports.map((yearGroup) => (
                    <div key={yearGroup.year} className="mb-16">
                        <h2 className="text-3xl font-bold text-[#1B3F92] mb-8 pb-2 border-b-2 border-blue-200">
                            {yearGroup.year} Reports
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {yearGroup.reports.map((report, index) => (
                                <div
                                    key={`${yearGroup.year}-${report.month}`}
                                    className="bg-white/80 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={report.image}
                                            alt={`${report.month} ${yearGroup.year} Report`}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-[#1B3F92] mb-2">
                                            {report.month} {yearGroup.year}
                                        </h3>
                                        <p className="text-gray-700 mb-4 text-sm line-clamp-3">
                                            {report.description}
                                        </p>
                                        <a
                                            href={report.file}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block bg-gradient-to-r from-[#1B3F92] to-blue-600 text-white font-bold px-5 py-2 rounded-full shadow-md hover:from-[#16316E] hover:to-blue-700 transition-all duration-300 text-sm"
                                        >
                                            View Report (PDF)
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="bg-white/80 rounded-3xl shadow-xl p-8 mt-12">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <img
                            src={ugandaOrphanageImage}
                            alt="Children in Uganda"
                            className="w-48 h-48 object-cover rounded-2xl shadow-lg border-4 border-[#1B3F92]"
                        />
                        <div>
                            <h3 className="text-2xl font-bold text-[#1B3F92] mb-4">Need More Information?</h3>
                            <p className="text-gray-700 mb-6">
                                If you'd like more detailed information about our projects, finances, or how your donations are making an impact,
                                please don't hesitate to contact us. We're committed to complete transparency and accountability.
                            </p>
                            <a
                                href="#contact-us"
                                className="inline-block bg-gradient-to-r from-[#1B3F92] to-blue-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:from-[#16316E] hover:to-blue-700 transition-all duration-300"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Us Section */}
                <div id="contact-us" className="bg-white rounded-3xl shadow-xl p-8 mt-12">
                    <h2 className="text-3xl font-bold text-[#1B3F92] mb-4">Contact Us</h2>
                    <p className="text-gray-700 mb-4">For further information about our services contact us at:</p>
                    <div className="mb-2">
                        <span className="font-bold">HOME OF HOPE</span><br />
                        P.O.BOX 5047<br />
                        JINJA, UGANDA
                    </div>
                    <div className="mb-2">
                        <span className="font-bold">Email:</span> <a href="mailto:edith.homeofhope@outlook.com" className="text-blue-700 underline">edith.homeofhope@outlook.com</a>
                    </div>
                    <div>
                        <span className="font-bold">Tel:</span> <span className="font-bold">+256 772 183 058</span> / <span className="font-bold">+256 702 617 204</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
