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
        <div id="about" className="bg-gradient-to-br from-white to-blue-50 min-h-screen font-sans">
            <h1 className="text-5xl font-black text-[#1B3F92] text-center py-12 bg-gradient-to-r from-[#1B3F92]/10 to-blue-100/30 rounded-b-3xl shadow-lg mb-8 tracking-tight">About Us</h1>
            {/* Edith Lukabwe */}
            <section id="our-story" className="max-w-7xl mx-auto py-16 px-4 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl p-8">
                    <div>
                        <img
                            src={Edithsimg}
                            alt="Edith and Derrick"
                            className="w-full h-auto rounded-2xl shadow-lg mb-4 object-cover"
                        />
                        <p className="text-sm text-gray-600 mb-4">Edith with her son Derrick</p>
                        <p className="text-justify mb-3 text-[#1B3F92]">In 2000, God blessed me with my son Derrick. Shortly after birth, he faced severe health challenges and was diagnosed with multiple disabilities. Despite hardships, my family stayed strong, seeking care and support for him.</p>
                        <p className="text-justify mb-3 text-[#1B3F92]">In 2004, I joined a local charity to help other families with disabled children. I soon realized many children were abandoned due to disabilities and started caring for them in my own community.</p>
                    </div>
                    <div>
                        <img
                            src={Edithsimg2}
                            alt="Edith Story"
                            className="w-full h-auto rounded-2xl shadow-lg mb-4 object-cover"
                        />
                        <p className="text-sm text-gray-600 mb-4">Edith Lukabwe at International Volunteer Day</p>
                        <p className="text-justify mb-3 text-[#1B3F92]">After an accident in 2006, I felt called by God to fully dedicate my life to these children. With support from friends, I founded Home of Hope in 2007 with just six children.</p>
                        <p className="text-justify mb-3 text-[#1B3F92]">Today, I care for nearly 100 abandoned children with disabilities, providing love, therapy, and hope for their future.</p>
                        <p className="text-justify font-semibold text-[#1B3F92]">~ Edith Lukabwe</p>
                    </div>
                </div>
            </section>
            {/* Meet Our Staff */}
            <section id="our-team" className="max-w-7xl mx-auto py-16 px-4 md:px-16">
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl p-8">
                    <h2 className="text-4xl font-bold text-[#1B3F92] mb-6 text-center">Meet Our Staff</h2>
                    <p className="mb-3 text-[#1B3F92] text-center">Our dedicated and compassionate staff give so much of themselves to provide loving care for the more than one hundred children at Home of Hope. Many of the children have severe disabilities and are extremely fragile requiring constant companionship, vigilance and special care.</p>
                    <p className="mb-3 text-[#1B3F92] text-center">Paid through your donations, our wonderful staff members have been known to give their own money to help purchase medicines, equipment and clothing for the children, a testament to the wonderful people they are.</p>
                    <p className="text-[#1B3F92] text-center mb-8">To our incredible staff, God bless you and we could not do it without you!</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8">
                        <img src={staf01} alt="Staff 1" className="w-full h-56 object-cover rounded-xl shadow-md" />
                        <img src={staf02} alt="Staff 2" className="w-full h-56 object-cover rounded-xl shadow-md" />
                        <img src={staf03} alt="Staff 3" className="w-full h-56 object-cover rounded-xl shadow-md" />
                        <img src={staf04} alt="Staff 4" className="w-full h-56 object-cover rounded-xl shadow-md" />
                        <img src={staf05} alt="Staff 5" className="w-full h-56 object-cover rounded-xl shadow-md" />
                        <img src={staf06} alt="Staff 6" className="w-full h-56 object-cover rounded-xl shadow-md" />
                    </div>
                </div>
            </section>
            {/* Our Mission */}
            <section id="our-mission" className="max-w-7xl mx-auto py-16 px-4 md:px-16">
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl p-8">
                    <h2 className="text-4xl font-bold text-[#1B3F92] mb-6 text-center">Our Mission</h2>
                    <p className="mb-4 text-[#1B3F92] text-center">Home of Hope is a registered community based organization in the Jinja district in Uganda. The organization has a home specifically for children with disabilities...</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-[#1B3F92] text-lg">
                        <li>Center based therapy and care</li>
                        <li>Assessment Clinics/outreach clinics</li>
                        <li>Home Visits</li>
                        <li>Epilepsy Medication</li>
                        <li>Adaptive Aids</li>
                        <li>Drop in clinics</li>
                        <li>Support for Corrective Surgery</li>
                        <li>Nutrition support</li>
                        <li>Income generating activities</li>
                        <li>Training workshops</li>
                        <li>Child School Sponsorship</li>
                    </ul>
                    <img src={ourmissionImage1} alt="Mission" className="w-full h-80 object-cover rounded-xl shadow-md mx-auto" />
                </div>
            </section>
            {/* Our Vision */}
            <section id="our-vision" className="max-w-7xl mx-auto py-16 px-4 md:px-16 text-center">
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl p-8">
                    <h2 className="text-4xl font-bold text-[#1B3F92] mb-6">Our Vision</h2>
                    <p className="italic mb-6 max-w-3xl mx-auto text-[#1B3F92] text-lg">
                        “At Home of Hope, we are striving for socially accepted, included, well cared for, and involved community of children with multiple disabilities with self-help skills to live an independent life.”<br />~ Edith Lukabwe
                    </p>
                    <div className="flex justify-center">
                        <video
                            controls
                            className="w-full md:w-2/3 rounded-xl shadow-md"
                            src="/videos/video03.mp4"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
