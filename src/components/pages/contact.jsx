import React from 'react';
import ContactUs from '../ContactUs';
import Footer from '../Footer';

export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="pt-16">
                <ContactUs />
            </div>
            <Footer />
        </div>
    );
}
