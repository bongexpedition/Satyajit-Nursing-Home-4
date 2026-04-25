
import { MessageCircle, Phone } from 'lucide-react';

const QuickContact = () => {
  return (
    <div className="hidden md:flex fixed bottom-6 right-6 flex-col gap-4 z-50">
      <a
        href="https://wa.me/919547475227"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center"
        title="WhatsApp Us"
      >
        <MessageCircle size={28} />
      </a>
      <a
        href="tel:9434301921"
        className="bg-red-600 text-white p-4 rounded-full shadow-2xl hover:bg-red-700 transition-all hover:scale-110 flex items-center justify-center animate-pulse"
        title="Emergency Call"
      >
        <Phone size={28} />
      </a>
    </div>
  );
};

export default QuickContact;
