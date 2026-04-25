
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Share2, Info } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex flex-col mb-6">
              <span className="text-2xl font-bold text-white leading-tight">SATYAJIT</span>
              <span className="text-sm font-semibold tracking-widest text-blue-400 uppercase">Nursing Home</span>
            </Link>
            <p className="mb-6 text-gray-400">
              Providing advanced and affordable healthcare since 1988. Trusted by thousands for 30+ years in South 24 Parganas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><Globe size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Share2 size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Info size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/departments" className="hover:text-blue-400 transition-colors">Departments</Link></li>
              <li><Link to="/doctors" className="hover:text-blue-400 transition-colors">Our Doctors</Link></li>
              <li><Link to="/appointment" className="hover:text-blue-400 transition-colors">Book Appointment</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Top Departments</h3>
            <ul className="space-y-4">
              <li><Link to="/departments" className="hover:text-blue-400 transition-colors">Orthopedic</Link></li>
              <li><Link to="/departments" className="hover:text-blue-400 transition-colors">Gynecology</Link></li>
              <li><Link to="/departments" className="hover:text-blue-400 transition-colors">General Surgery</Link></li>
              <li><Link to="/departments" className="hover:text-blue-400 transition-colors">Medicine</Link></li>
              <li><Link to="/departments" className="hover:text-blue-400 transition-colors">Pediatrics</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-400 mt-1" size={18} />
                <span>Jaynagar, South 24 Parganas, West Bengal - 743337</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-400" size={18} />
                <span>9547475227 / 9434301921</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-400" size={18} />
                <span>info@satyajitnursinghome.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Powered by Nexionize. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
