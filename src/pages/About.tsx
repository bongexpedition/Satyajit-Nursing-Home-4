
import { Activity, Shield, Users, Stethoscope, Heart, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-blue-700 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Satyajit Nursing Home</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            A legacy of trust, care, and medical excellence in Jaynagar since 1988.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" 
                alt="Hospital Interior" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">Our History & Mission</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Satyajit Nursing Home, established in 1988, is a trusted multi-specialty healthcare center located in Jaynagar, South 24 Parganas, West Bengal. Founded by <strong>Dr. Krishna Gopal Saha</strong>, the institution has been serving the community for more than three decades with advanced, affordable, and compassionate medical care.
                </p>
                <p>
                  The nursing home is equipped with modern infrastructure including ICU facilities, operation theatres, and a 24×7 CT scan unit. With a dedicated team of experienced doctors and healthcare professionals, we are committed to providing high-quality treatment and ensuring patient satisfaction through continuous care and advanced medical technology.
                </p>
                <p>
                  Our mission is to provide accessible healthcare services to all sections of society without compromising on quality or medical ethics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Units Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Specialized Units</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Nursing Home', desc: 'Full-service inpatient and outpatient care with dedicated nursing staff.' },
              { title: 'Diagnostic Centre', desc: 'Advanced pathology and radiology services for accurate diagnosis.' },
              { title: 'CT Scan Unit', desc: 'Round-the-clock specialized imaging services with high-precision equipment.' },
            ].map((unit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-600">
                <h3 className="text-xl font-bold mb-4">{unit.title}</h3>
                <p className="text-gray-600">{unit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">35+</div>
            <div className="text-blue-100 uppercase tracking-wider font-semibold">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">30+</div>
            <div className="text-blue-100 uppercase tracking-wider font-semibold">Specialist Doctors</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">100k+</div>
            <div className="text-blue-100 uppercase tracking-wider font-semibold">Patients Served</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-blue-100 uppercase tracking-wider font-semibold">Emergency Support</div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Patient Centricity', desc: 'Putting patient needs and comfort at the heart of everything we do.', icon: <Heart className="text-red-500" /> },
              { title: 'Medical Excellence', desc: 'Maintaining the highest standards of medical practice and clinical outcomes.', icon: <Stethoscope className="text-blue-600" /> },
              { title: 'Affordability', desc: 'Providing high-quality medical services that are accessible and cost-effective.', icon: <CheckCircle className="text-green-500" /> },
              { title: 'Advanced Technology', desc: 'Continuously upgrading our facilities with modern medical equipment.', icon: <Activity className="text-blue-600" /> },
              { title: 'Integrity', desc: 'Upholding honesty and ethical standards in all our medical dealings.', icon: <Shield className="text-purple-600" /> },
              { title: 'Experienced Team', desc: 'Collaborating with the most skilled healthcare professionals.', icon: <Users className="text-orange-500" /> },
            ].map((value, idx) => (
              <div key={idx} className="flex gap-4 p-6 rounded-xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all">
                <div className="flex-shrink-0 mt-1">{value.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
