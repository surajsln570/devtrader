// Footer.jsx
import React from "react";
import Address from "./contact/Address";
import Email from "./contact/Email";
import Phone from "./contact/Phone";


export default function Footer({ className }) {
  return (
    <footer className={`bg-black text-white px-6 md:px-20 py-12 ${className}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Dev Trader Group</h2>
          <p className="text-gray-300 text-sm">
            <b className="text-yellow-400">Dev Trader Group is built on 45 years</b> of experience and trust. Founded by <b className="text-yellow-400">Ram Tej Chauhan</b> in Seur Chamurkha, Sultanpur (UP), we are committed to delivering reliable and high-quality construction work.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-blue-500 transition">Become a Partner</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Career</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Mission & Vision</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-white">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <Address />
          <Phone>+919598063467</Phone>
          <Phone>+919453622570</Phone>
          <Email>surajsln570@gmail.com</Email>
          <Email>surajchauhansln@gmail.com</Email>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} All rights reserved - Dev Trader. Designed by GR Group Software Solutions 
      </div>
    </footer>
  );
}
