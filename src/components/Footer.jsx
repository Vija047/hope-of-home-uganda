export default function Footer() {
    return (
        <footer className="bg-[#1B3F92] text-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-bold">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#about" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#supporters" className="text-blue-200 hover:text-white transition-colors">Our Mission</a></li>
                            <li><a href="#current-projects" className="text-blue-200 hover:text-white transition-colors">Current Projects</a></li>
                            <li><a href="#contact-us" className="text-blue-200 hover:text-white transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-bold">Support Us</h4>
                        <ul className="space-y-3">
                            <li><a href="/donation" className="text-blue-200 hover:text-white transition-colors">Make a Donation</a></li>
                            <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Volunteer</a></li>
                            <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Partnership</a></li>
                            <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Sponsor a Child</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/20 mt-12 pt-8 text-center">
                    <p className="text-blue-200 mb-4">
                        © {new Date().getFullYear()} Home of Hope Uganda. All rights reserved.
                    </p>
                    <p className="text-blue-300 text-sm">
                        Built with 💝 to spread hope and create lasting change.
                    </p>
                </div>
            </div>
        </footer>
    );
}
