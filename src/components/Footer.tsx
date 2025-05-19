import React from 'react';
import { GraduationCap, MapPin, Phone, Mail, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1 - Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">Data Engineering School</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming careers through expert-led data engineering education. 
              Our comprehensive curriculum and job guarantee ensure your success in the data industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#curriculum" className="text-gray-400 hover:text-white transition-colors">Curriculum</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
              <li><a 
                href={`https://wa.me/919391946765?text=I'm%20interested%20in%20learning%20more%20about%20Data%20Engineering%20School`} 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact Us
              </a></li>
            </ul>
          </div>
          
          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Hyderabad, Telangana, India
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                <a 
                  href="tel:+919391946765" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +91 939-194-6765
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                <a 
                  href="mailto:info@dataengineeringschool.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@dataengineeringschool.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Data Engineering School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;