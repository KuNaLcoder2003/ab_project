// // import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// import { GithubIcon , TwitchIcon , FacebookIcon } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-50 border-t border-gray-200">
//       <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-600">
        
//         {/* Logo & Branding */}
//         <div className="text-center md:text-left">
//           <h2 className="text-xl font-semibold text-gray-800">YourCompany</h2>
//           <p className="text-xs text-gray-500">© {new Date().getFullYear()} All rights reserved.</p>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex flex-wrap justify-center md:justify-start gap-4">
//           <a href="/about" className="hover:text-gray-900 transition">About</a>
//           <a href="/services" className="hover:text-gray-900 transition">Services</a>
//           <a href="/contact" className="hover:text-gray-900 transition">Contact</a>
//           <a href="/privacy" className="hover:text-gray-900 transition">Privacy Policy</a>
//         </div>

//         {/* Social Media Icons */}
//         <div className="flex gap-4">
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition">
//             <GithubIcon size={18} />
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition">
//             <FacebookIcon size={18} />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition">
//             <TwitchIcon size={18} />
//           </a>
//         </div>
        
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 text-lg mb-4">Company</h3>
            <div className="flex flex-col space-y-2">
              <span className="text-gray-600 font-medium text-xl">BrandName</span>
              <p className="text-gray-500 mt-2 text-sm">Creating beautiful digital experiences with modern technologies.</p>
              <div className="flex mt-4 space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-700">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-700">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-700">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-700">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-700">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-700 transition">Home</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 transition">About</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 transition">Services</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 transition">Portfolio</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 transition">Contact</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-700 transition">Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 transition">Documentation</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 transition">FAQ</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 transition">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-gray-400 mt-0.5" />
                <span className="text-gray-500">123 Business Avenue, Suite 100, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-gray-400" />
                <span className="text-gray-500">(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-gray-400" />
                <span className="text-gray-500">contact@company.com</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© {currentYear} BrandName. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Privacy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Terms</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
