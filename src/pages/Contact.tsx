
import { Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-blue-700 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We are here to help you. Reach out to us via phone, email, or visit our facility.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Contact Cards */}
            <div className="bg-gray-50 p-8 rounded-3xl text-center border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Phone Numbers</h3>
              <p className="text-gray-600 mb-2 font-semibold text-lg">9547475227</p>
              <p className="text-gray-600 mb-2 font-semibold text-lg">9434301921</p>
              <p className="text-red-500 font-bold mt-4 uppercase tracking-wider text-xs">24/7 Emergency Line</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl text-center border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Location</h3>
              <p className="text-gray-600 leading-relaxed">
                Jaynagar, South 24 Parganas,<br />
                West Bengal, India - 743337
              </p>
              <p className="text-blue-600 font-bold mt-4 uppercase tracking-wider text-xs">Near Railway Station</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl text-center border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Working Hours</h3>
              <p className="text-gray-600 mb-2">Emergency: <span className="font-bold">24x7</span></p>
              <p className="text-gray-600 mb-2">OPD: <span className="font-bold">9:00 AM - 8:00 PM</span></p>
              <p className="text-gray-600">Pharmacy: <span className="font-bold">24x7</span></p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            {/* Map Placeholder */}
            <div className="lg:w-1/2 bg-gray-200 rounded-3xl min-h-[400px] flex items-center justify-center relative overflow-hidden shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                alt="Map Background" 
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="relative z-10 text-center p-8">
                <MapPin size={48} className="text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Find Us on Google Maps</h3>
                <p className="text-gray-600 mb-6">Visit Satyajit Nursing Home in Jaynagar</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors inline-block"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-gray-50"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-gray-50"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-gray-50"
                />
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-gray-50"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
                >
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Is the CT scan facility available at night?', a: 'Yes, our CT scan unit and diagnostic services are available 24 hours a day, 7 days a week.' },
              { q: 'How can I book an appointment with Dr. Krishna Gopal Saha?', a: 'Dr. Krishna Gopal Saha is available daily. You can book an appointment through our online form or by calling 9434301921.' },
              { q: 'Does the nursing home have ICU facilities?', a: 'Yes, we have a fully equipped ICU with advanced monitoring and life support systems.' },
              { q: 'Do you accept health insurance?', a: 'We accept several major health insurance policies. Please contact our reception for the updated list of empanelled insurance providers.' }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-lg mb-2 text-blue-700">Q: {faq.q}</h4>
                <p className="text-gray-600">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
