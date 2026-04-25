
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Calendar as CalendarIcon, 
  User, 
  Phone, 
  Stethoscope, 
  MessageSquare,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { departments, doctors } from '../data/hospitalData';

const Appointment = () => {
  const [searchParams] = useSearchParams();
  const initialDept = searchParams.get('dept') || '';
  const initialDoctor = searchParams.get('doctor') || '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: initialDept,
    doctor: initialDoctor,
    date: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [availableDoctors, setAvailableDoctors] = useState(doctors);

  useEffect(() => {
    if (formData.department) {
      setAvailableDoctors(doctors.filter(d => d.departmentId === formData.department));
    } else {
      setAvailableDoctors(doctors);
    }
  }, [formData.department]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center container mx-auto px-4 py-20">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 text-center border border-green-50">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Appointment Requested!</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Thank you, <strong>{formData.name}</strong>. Your request for an appointment with 
            <strong> {doctors.find(d => d.id === formData.doctor)?.name || 'our specialist'}</strong> has been received. 
            We will contact you shortly at <strong>{formData.phone}</strong> to confirm your slot.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-gray-50">
      <section className="bg-blue-700 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Appointment</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Easy online booking for all our specialist doctors. Select your preferred department and doctor below.
          </p>
        </div>
      </section>

      <section className="py-20 -mt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Form Side */}
            <div className="lg:w-2/3 p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                <CalendarIcon className="text-blue-600" /> Patient & Appointment Details
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                      <User size={16} /> Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-gray-50"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                      <Phone size={16} /> Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-gray-50"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                      <Stethoscope size={16} /> Department *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-gray-50"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value, doctor: '' })}
                    >
                      <option value="">Select Department</option>
                      {departments.map(dept => (
                        <option key={dept.id} value={dept.id}>{dept.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                      <User size={16} /> Specialist Doctor *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-gray-50"
                      value={formData.doctor}
                      onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                    >
                      <option value="">Select Doctor</option>
                      {availableDoctors.map(doc => (
                        <option key={doc.id} value={doc.id}>{doc.name} ({doc.qualification})</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                      <CalendarIcon size={16} /> Preferred Date *
                    </label>
                    <input
                      required
                      type="date"
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-gray-50"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                      <Clock size={16} /> Time Preference
                    </label>
                    <select
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-gray-50"
                      onChange={(e) => console.log(e.target.value)}
                    >
                      <option value="morning">Morning (10 AM - 1 PM)</option>
                      <option value="evening">Evening (5 PM - 8 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                    <MessageSquare size={16} /> Message / Symptoms (Optional)
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-gray-50"
                    placeholder="Briefly describe your symptoms or reason for visit"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 text-xl"
                >
                  Request Appointment
                </button>
              </form>
            </div>

            {/* Info Side */}
            <div className="lg:w-1/3 bg-gray-900 text-white p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">Booking Information</h3>
                <ul className="space-y-8">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Confirmation</h4>
                      <p className="text-gray-400 text-sm">After submission, our team will call you within 2-4 hours to confirm your slot.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Emergency Case?</h4>
                      <p className="text-gray-400 text-sm">In case of emergency, please do not wait for an online appointment. Call us immediately.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-12 p-6 bg-white/10 rounded-2xl border border-white/20">
                <h4 className="font-bold mb-4 text-blue-400">Helpline Numbers</h4>
                <div className="space-y-2">
                  <a href="tel:9547475227" className="block text-xl font-bold hover:text-blue-400 transition-colors">9547475227</a>
                  <a href="tel:9434301921" className="block text-xl font-bold hover:text-blue-400 transition-colors">9434301921</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
