import React from 'react';
import {
  Car,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaThreads
} from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Socials */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-cyan-500" />
              <span className="text-xl font-bold">Vapd Dashsteam</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Premium car wash services with eco-friendly products. We bring the shine back to your vehicle with professional care and attention to detail.
            </p>
            <div className="flex space-x-4 text-xl">
              <a href="https://www.facebook.com/DashSteamVAP" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-500">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/dashsteamvap/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-500">
                <FaInstagram />
              </a>
              <a href="https://x.com/DashSteamVAP" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-500">
                <FaXTwitter />
              </a>
              <a href="https://www.linkedin.com/company/dashsteamvap/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-500">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/7488928997" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-500">
                <FaWhatsapp />
              </a>
              <a href="https://www.threads.net/@dashsteamvap" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-500">
                <FaThreads />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Foam Wash</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Interior Detailing</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Ceramic Coating</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Wax & Polish</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 7488928997</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>vapddashsteam@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>
                  Basudhara Complex, South Collectoriate Road,<br />
                  Opp. Reliance Smart Point, Buxar, Bihar 802103
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-400 flex flex-wrap justify-between gap-4">
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Contact us</a>
            <a href="#" className="hover:text-white">FAQs</a>
            <a href="#" className="hover:text-white">Terms and conditions</a>
            <a href="#" className="hover:text-white">Cookie policy</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
          <p className="text-center w-full mt-6 text-xs text-gray-500">
            &copy; 2025 - Vapd Dashsteam Car Wash. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
