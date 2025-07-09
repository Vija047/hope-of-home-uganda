import React from "react";
import Edithsimg from "../assets/images/aboutus/Edith'simg.jpg";
import Edithsimg2 from "../assets/images/aboutus/Edith'simg2.jpg";
import staf01 from "../assets/images/aboutus/staff01jpg.jpg";
import staf02 from "../assets/images/aboutus/staff02.jpg";
import staf03 from "../assets/images/aboutus/staff03.jpg";
import staf04 from "../assets/images/aboutus/staff004.jpg";
import staf05 from "../assets/images/aboutus/staff05.jpg";
import staf06 from "../assets/images/aboutus/staff06.jpg";
import ourmissionImage1 from "../assets/images/aboutus/ourmission01.jpg";

const AboutUs = () => {
    return (
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
            </section>
            {/* Meet Our Staff */}
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
    );
};

export default AboutUs;
