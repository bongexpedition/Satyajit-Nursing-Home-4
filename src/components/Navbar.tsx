
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Departments', path: '/departments' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Appointment', path: '/appointment' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-blue-600 text-white py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={14} /> 24x7 Emergency: 9434301921</span>
            <span className="flex items-center gap-2"><Clock size={14} /> Established: 1988</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} /> Jaynagar, South 24 Parganas, WB
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="/logo.png" 
                alt="Satyajit Nursing Home Logo" 
                className="relative w-14 h-14 object-contain rounded-lg border border-gray-100 bg-white p-1 shadow-sm"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter leading-none flex items-center gap-1">
                SATYAJIT <span className="text-red-600 block w-1.5 h-1.5 rounded-full animate-pulse mt-1"></span>
              </span>
              <div className="flex items-center gap-2">
                <span className="h-[1px] w-4 bg-blue-600"></span>
                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-blue-700 uppercase">
                  Nursing Home & Diagnostic
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  isActive(link.path) ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/appointment"
              className="bg-red-600 text-white px-7 py-3 rounded-xl font-extrabold hover:bg-red-700 transition-all shadow-[0_4px_20px_rgba(220,38,38,0.3)] hover:shadow-[0_6px_25px_rgba(220,38,38,0.4)] active:scale-95 uppercase text-sm tracking-wider flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-medium ${
                isActive(link.path) ? 'text-blue-600' : 'text-gray-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/appointment"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-bold text-center"
            onClick={() => setIsOpen(false)}
          >
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
