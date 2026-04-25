
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Clock, 
  Activity, 
  Shield, 
  Users, 
  Stethoscope, 
  Baby, 
  Bone, 
  Droplets,
  Heart,
  Phone
} from 'lucide-react';
import { departments } from '../data/hospitalData';
import Gallery from '../components/Gallery';

const Home = () => {
  const featuredDepartments = departments.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/70 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
          alt="Hospital Building" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tighter">
              ADVANCED <span className="text-red-500">24/7</span> <br/>
              <span className="text-blue-300">EMERGENCY</span> CARE
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-50 font-medium max-w-xl border-l-4 border-red-500 pl-6 py-2">
              Satyajit Nursing Home: Delivering medical excellence and life-saving care in Jaynagar since 1988.
            </p>
            <p className="text-xl mb-8 text-blue-50">
              Satyajit Nursing Home has been a trusted healthcare provider for over 30 years, 
              offering 24x7 emergency care, advanced surgery, and specialized diagnostics.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/appointment" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg flex items-center gap-2"
              >
                Book Appointment <ChevronRight size={20} />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Key Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { title: '24/7 Emergency', icon: <Clock className="text-red-600" />, desc: 'Ready to help 24x7 with trauma care.' },
              { title: 'Advanced ICU', icon: <Activity className="text-blue-600" />, desc: 'Modern critical care facilities.' },
              { title: 'Digital CT Scan', icon: <Shield className="text-blue-600" />, desc: 'Round-the-clock diagnostic services.' },
              { title: 'Laparoscopy', icon: <Stethoscope className="text-blue-600" />, desc: 'Minimally invasive surgical procedures.' },
              { title: 'Oxygen Plant', icon: <Droplets className="text-blue-600" />, desc: 'In-house dedicated oxygen supply.' },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://i.ibb.co/JPwmq8y/img-1-1777010430161.jpg" 
              alt="Operation Theatre" 
              className="rounded-2xl shadow-2xl w-full h-auto object-contain"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Satyajit Nursing Home?</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Founded by Dr. Krishna Gopal Saha, we have been at the forefront of healthcare in South 24 Parganas for over three decades.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: '30+ Years Experience', icon: <Users className="text-blue-600" /> },
                { title: 'Expert Doctors', icon: <Stethoscope className="text-blue-600" /> },
                { title: 'Modern Infrastructure', icon: <Shield className="text-blue-600" /> },
                { title: 'Compassionate Care', icon: <Heart className="text-blue-600" /> },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                  {item.icon}
                  <span className="font-bold text-gray-800">{item.title}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 text-blue-600 font-bold mt-8 hover:underline">
              Learn more about our history <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Departments Preview */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Departments</h2>
              <p className="text-blue-200">Specialized medical care across multiple disciplines.</p>
            </div>
            <Link to="/departments" className="hidden md:block bg-white text-blue-900 px-6 py-2 rounded-full font-bold hover:bg-blue-50">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDepartments.map((dept) => (
              <div key={dept.id} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all group">
                <div className="mb-4 text-blue-300 group-hover:scale-110 transition-transform duration-300">
                  {dept.id === 'orthopedic' && <Bone size={40} />}
                  {dept.id === 'gynecology' && <Baby size={40} />}
                  {dept.id === 'surgery' && <Stethoscope size={40} />}
                  {dept.id === 'medicine' && <Heart size={40} />}
                </div>
                <h3 className="text-xl font-bold mb-2">{dept.name}</h3>
                <p className="text-blue-100 mb-4 text-sm">{dept.description}</p>
                <Link to={`/doctors?dept=${dept.id}`} className="text-blue-300 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Find Doctors <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          
          <Link to="/departments" className="md:hidden block mt-8 bg-white text-blue-900 px-6 py-3 rounded-full font-bold text-center">
            View All Departments
          </Link>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center">
            {/* Image Side */}
            <div className="lg:w-2/5 h-[400px] lg:h-[600px] relative">
              <img 
                src="https://i.ibb.co/8D7Lg51v/Whats-App-Image-2023-06-11-at-8-01-27-PM.jpg" 
                alt="Dr. Krishna Gopal Saha" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent lg:hidden"></div>
              <div className="absolute bottom-6 left-6 text-white lg:hidden">
                <h4 className="font-black text-2xl">Dr. Krishna Gopal Saha</h4>
                <p className="text-blue-200 font-bold text-sm uppercase tracking-widest">Founder & Visionary</p>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-3/5 p-8 md:p-16 lg:p-20 relative">
              <div className="absolute top-10 right-10 text-blue-50">
                <Heart size={120} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
                  <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs">A Message from our Founder</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 italic leading-[1.2]">
                  "Trusted healthcare is not just about medicine, it's about the <span className="text-blue-600">care and compassion</span> we provide to every patient."
                </h2>

                <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                  <p>
                    Since 1988, our mission has been to provide Jaynagar with world-class medical facilities that are both accessible and affordable. We believe that every individual deserves the highest standard of care.
                  </p>
                </div>

                <div className="hidden lg:block">
                  <h4 className="font-black text-3xl text-slate-900">Dr. Krishna Gopal Saha</h4>
                  <p className="text-blue-600 font-bold uppercase tracking-widest mt-1">Founder, Satyajit Nursing Home</p>
                  <p className="text-gray-400 mt-2 text-sm italic">Pioneer in healthcare since 1988</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Gallery />

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Our medical team is available 24/7 for emergencies. For regular checkups, please book your appointment online.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="tel:9434301921" className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-xl shadow-xl flex items-center gap-3">
              <Phone size={24} /> 9434301921
            </a>
            <Link to="/appointment" className="bg-red-600 text-white px-10 py-4 rounded-full font-bold text-xl shadow-xl hover:bg-red-700 transition-colors">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
