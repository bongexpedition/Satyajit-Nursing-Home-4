
import { Phone, Calendar, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileBottomNav = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 grid grid-cols-3 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
      <a 
        href="tel:9434301921" 
        className="flex flex-col items-center justify-center py-3 border-r border-gray-100 bg-red-600 text-white"
      >
        <Phone size={20} />
        <span className="text-[10px] font-bold uppercase mt-1">Call Now</span>
      </a>
      <Link 
        to="/appointment" 
        className="flex flex-col items-center justify-center py-3 border-r border-gray-100 bg-blue-700 text-white"
      >
        <Calendar size={20} />
        <span className="text-[10px] font-bold uppercase mt-1">Book</span>
      </Link>
      <a 
        href="https://wa.me/919547475227" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex flex-col items-center justify-center py-3 bg-green-500 text-white"
      >
        <MessageCircle size={20} />
        <span className="text-[10px] font-bold uppercase mt-1">WhatsApp</span>
      </a>
    </div>
  );
};

export default MobileBottomNav;
