import React from "react";
import homeOfHopeImg from "../../assets/images/home-ofhope-interntinal.gif";
import childImage from "../../assets/images/childimage.jpg";
import childrenGroupImg from "../../assets/images/people-uganda-group-local-kids.webp";
import empowermentImg from "../../assets/images/EMPOWERMENT-PROJECTS.jpg";
import ugandaEducationImg from "../../assets/images/Uganda-Educatio .jpg";
import ourMissionImg from "../../assets/images/Our-Mission.jpg";
import currentImg1 from "../../assets/images/kids/cuurentimag01.jpg";
import currentImg2 from "../../assets/images/kids/cuurentimag02.jpg";
import currentImg3 from "../../assets/images/kids/cuurentimag03.jpg";
import timothyImg from "../../assets/images/kids/timothy-imag.png";
import donationImg from "../../assets/images/dontion-images01.png";
import childsImg from "../../assets/images/chilsdspict_large.jpg";

const HomeActivities = () => (
    <div className="max-w-6xl mx-auto p-6">
        {/* Header Section */}
        <div className="text-center mb-8">
            <img src={homeOfHopeImg} alt="Home of Hope International" className="mx-auto mb-4 rounded-lg shadow-md max-w-md" />
            <h1 className="text-3xl font-bold text-[#1B3F92] mb-4">Our Activities & Programs</h1>
        </div>

        {/* Care and Therapy Section */}
        <div className="mb-8">
            <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-[#1B3F92]">Care and Therapy Services</h2>
                    <p className="mb-4 text-[#1B3F92]">
                        A number of activities are carried in the center/home and focus is put on resident CWDs in the two areas mentioned above.
                        Care is a general responsibility of all Home of Hope staff, they ensure that all the children with disabilities in the home/center
                        are well fed, cleaned, loved and protected. Currently there are thirty (30) children with disabilities in the home who are cared
                        for purely by home of hope.
                    </p>
                </div>
                <img src={childImage} alt="Children with disabilities receiving care" className="rounded-lg shadow-md" />
            </div>

            <div className="grid md:grid-cols-2 gap-6 items-center">
                <img src={currentImg1} alt="Therapy session" className="rounded-lg shadow-md md:order-1" />
                <div className="md:order-2">
                    <p className="mb-4 text-[#1B3F92]">
                        Therapy at the center is aimed at promoting functional independence, strengthening weak muscles through weight bearing activities,
                        prevention of contractures and deformities. All the therapy activities are administered by the organizations' resident occupational
                        therapist and with help of home of hope staff. These activities are done on daily basis at the center.
                    </p>
                </div>
            </div>
        </div>

        {/* Assessment and Outreach Clinics */}
        <div className="mb-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-[#1B3F92]">Assessment and Outreach Clinics</h2>
                    <p className="mb-4 text-[#1B3F92]">
                        Currently the organization does perform assessments of new and old client through its outreach program. This program is carried out
                        in a number of villages in Jinja, Mayuge, Namutumba and Kayunga districts. There are four assessment clinics in a month and these are
                        on every Monday of the week in four selected centers of Butagaya, Nsinze, Kangulumira and Busuyi sub counties.
                    </p>
                </div>
                <img src={childrenGroupImg} alt="Community outreach program" className="rounded-lg shadow-md" />
            </div>
        </div>

        {/* Home and Follow-up Visits */}
        <div className="mb-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
                <img src={currentImg2} alt="Home visit therapy session" className="rounded-lg shadow-md md:order-1" />
                <div className="md:order-2">
                    <h2 className="text-2xl font-bold mb-4 text-[#1B3F92]">Home and Follow-up Visits</h2>
                    <p className="mb-4 text-[#1B3F92]">
                        This activity is intended to assess the clients home environment, give client more therapy time, make adaptions were necessary and further
                        create community awareness on disability in order to reduce on stigma. A lot of focus is put on parent/care giver training during the home visits.
                        Lots of demonstrations are done and parents/caregivers are given opportunities to practice the different therapeutic techniques learnt from the therapist.
                    </p>
                    <p className="mb-4 text-[#1B3F92]">
                        The therapist also assesses the clients' home environment for possible adaptations for easy mobility and productivity. At least up to 8 home visits
                        are made by the home of hope team. The sub counties were this program is carried out includes but not all, Bugembe town council, Kakira town council,
                        Mafubira sub county, Jinja town, Buwenge town council, Namasiga sub county and Kagoma sub county.
                    </p>
                </div>
            </div>
        </div>

        {/* Income Generating Activities */}
        <div className="mb-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-[#1B3F92]">Income Generating Activities</h2>
                    <p className="mb-4 text-[#1B3F92]">
                        Home of Hope gives a certain amount of money to the parent of CWDs on loan. The money is then used to buy raw materials to make crafts like jewelry, mats, bags.
                        Home of hope then finds market for these products. From the profits, the parent can pay back the loan and continue with the business.
                        This activity is meant to help needy parents find a source of income to support their children. The organization also empowers those with running businesses
                        to increase on their capital.
                    </p>
                </div>
                <img src={empowermentImg} alt="Income generating activities and empowerment" className="rounded-lg shadow-md" />
            </div>
        </div>

        {/* Training Workshops */}
        <div className="mb-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
                <img src={ourMissionImg} alt="Training workshops" className="rounded-lg shadow-md md:order-1" />
                <div className="md:order-2">
                    <h2 className="text-2xl font-bold mb-4  text-[#1B3F92]">Training Workshops</h2>
                    <p className="mb-4 text-[#1B3F92]">
                        This program focuses on equipping parents, local leaders, opinion leaders, teachers and the community at large with knowledge on disability.
                        So far Home of Hope has conducted seven workshops over the years. These have been conducted at small scale at home of hope offices.
                        Much emphasis are put on the following areas:
                    </p>
                    <ul className="list-disc list-inside mb-4 text-[#1B3F92]">
                        <li>Training on children with disabilities rights</li>
                        <li>Trainings on income generating activities</li>
                        <li>Training teachers on working with CWDs in schools</li>
                        <li>Trainings on prevention and management of different disabilities in the communities</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Child School Sponsorship */}
        <div className="mb-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-[#1B3F92]">Child School Sponsorship</h2>
                    <p className="mb-4 text-[#1B3F92]">
                        This is a very new program in Home of Hope, currently it cares for the educational needs of three (3) children with disabilities.
                        Two of the above children go to El Shaddi Primary School (with inclusive education) and the other attend her classes at the Home of Hope
                        therapy room with help of a special needs teacher. This program has only lasted a year but still struggling due to inconsistent funding.
                        There is a total number of at least fifty one (51) children with disabilities in the waiting list. Thirty seven (37) of the above have
                        physical disabilities while the remaining (14) of them are deaf.
                    </p>
                </div>
                <img src={ugandaEducationImg} alt="Educational support for children" className="rounded-lg shadow-md" />
            </div>
        </div>

        {/* Epilepsy Medication */}
        <div className="mb-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
                <img src={currentImg3} alt="Medical care and medication" className="rounded-lg shadow-md md:order-1" />
                <div className="md:order-2">
                    <h2 className="text-2xl font-bold mb-4 text-[#1B3F92]">Epilepsy Medication</h2>
                    <p className="mb-4 text-[#1B3F92]">
                        After a research carried out by Home of Hope in its operational areas in Jinja district, it realized that there were a big number of
                        epileptic patients in the villages who were not being treated. So the organization with help of its partners started a free monthly
                        epilepsy medication program. This is carried out during outreach clinics.
                    </p>
                    <p className="mb-4 text-[#1B3F92]">
                        This program is currently reaching an average of up to 70 (seventy) clients per clinic. However there is still need to continue sensitizing
                        the local communities on the condition and the secondary disabilities that may occur as a result of severe epilepsy. The types of drugs
                        used during the clinics include: phenytoin, phenobarbitone, carbamazepine and folic acid.
                    </p>
                </div>
            </div>
        </div>

        {/* Adaptive Aids */}
        <div className="mb-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-[#1B3F92]">Adaptive Aids</h2>
                    <p className="mb-4 text-[#1B3F92]">
                        Many of the children need wheelchairs and adaptive aids. The therapist assesses clients for different appliances according to the client's
                        needs and conditions. The clients are either referred or are provided with appliance by the organization. The organization gives up to a total
                        of 4 appliances to clients in a month. These adaptive aids are classified into two that is those which are made by home of hope and those which
                        are acquired from partner organization.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <p className="mb-2 font-semibold">Those made by Home of Hope:</p>
                            <ul className="list-disc list-inside mb-4 text-sm text-[#1B3F92]">
                                <li>C.P chairs</li>
                                <li>Corner seats</li>
                                <li>Toilet seats</li>
                                <li>Parallel bars</li>
                                <li>Walking frames</li>
                            </ul>
                        </div>
                        <div>
                            <p className="mb-2 font-semibold">Through partnership:</p>
                            <ul className="list-disc list-inside mb-4 text-sm text-[#1B3F92]">
                                <li>Wheel chairs</li>
                                <li>KAFOs (Knee and Foot Orthotics)</li>
                                <li>Artificial limbs</li>
                                <li>Walkers</li>
                                <li>Calipers</li>
                                <li>Standing frames</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <img src={timothyImg} alt="Child using adaptive aids" className="rounded-lg shadow-md" />
            </div>
        </div>

        {/* Nutrition Support */}
        <div className="mb-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
                <img src={childsImg} alt="Children receiving nutrition support" className="rounded-lg shadow-md md:order-1" />
                <div className="md:order-2">
                    <h2 className="text-2xl font-bold mb-4 text-[#1B3F92]">Nutrition Support</h2>
                    <p className="mb-4 text-[#1B3F92]">
                        Over time, Home of Hope has identified many children with severe malnutrition. This is either because of inadequate food or because
                        of poor feeding habits among children with disability especially cerebral palsy. Research shows that there's a close relationship between
                        Cerebral palsy and malnutrition. Most children with cerebral palsy have a problem with their feeding. They either have poor appetite or have
                        problems with digestion.
                    </p>
                    <p className="mb-4 text-[#1B3F92]">
                        Home of Hope works with many children in this category, thus the need to give nutritional support. Three areas are emphasized i.e. Giving
                        of food supplies such as soya porridge, milk and Irish potatoes. Nutrition support is always given at Drop clinics, outreach clinics and during
                        home visits. We mainly concentrated on 3 activities while carrying out this program: At present, Home of Hope are taking care of 40 children with
                        malnutrition. All parents/care takers were given sensitization on nutrition, especially the use of locally available foods, the timing and quantity
                        of food given to their children. Assessing the child's progress, through observation and many other ways.
                    </p>
                </div>
            </div>
        </div>

        {/* Drop-in Clinics */}
        <div className="mb-8 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#1B3F92]">Drop-in Clinics</h2>
            <p className="mb-4 text-[#1B3F92]">
                These clinics are carried out on every Tuesday at Home of Hope therapy room. Clients come from nearby villages and beyond to attend therapy.
                These clinics are conducted by the resident occupational therapist and in support of all Homes of Hope staff. In a day of the clinic an average
                of 7 clients are attended to in addition to our resident clients.
            </p>
        </div>

        {/* Support for Corrective Surgery */}
        <div className="mb-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-blue-800">Support for Corrective Surgery</h2>
                    <p className="mb-4 text-[#1B3F92]">
                        Because Home of Hope does not have surgical services, yet sometimes receive children with cases that need surgery, the organization refer them to
                        places which offer the service. Home of Hope thus offer a certain percentage of the total costs towards the surgery.
                    </p>
                </div>
                <img src={donationImg} alt="Support and donations for medical care" className="rounded-lg shadow-md" />
            </div>
        </div>
    </div>
);

export default HomeActivities;
