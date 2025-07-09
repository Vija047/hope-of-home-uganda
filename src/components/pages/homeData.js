// src/components/pages/homeData.js
// Data for Home page cards and projects

import ourmissionImage from "../../assets/images/OUR-MISSION.jpg";
import ourvisionImage from "../../assets/images/OUR-VISION.jpg";
import ourneedforsupportimage from "../../assets/images/OUR-NEED -FOR -SUPPORT.jpg";
import currentproject01 from "../../assets/images/kids/cuurentimag01.jpg";
import currentproject02 from "../../assets/images/kids/cuurentimag02.jpg";
import currentproject03 from "../../assets/images/kids/cuurentimag03.jpg";

export const cards = [
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

export const projects = [
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
