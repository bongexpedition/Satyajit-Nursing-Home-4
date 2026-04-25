
import { Link } from 'react-router-dom';
import { 
  Bone, 
  Baby, 
  Stethoscope, 
  Activity, 
  Droplets, 
  Smile, 
  Ear, 
  Brain,
  ChevronRight
} from 'lucide-react';
import { departments } from '../data/hospitalData';

const getIcon = (id: string) => {
  switch (id) {
    case 'orthopedic': return <Bone size={40} />;
    case 'gynecology': return <Baby size={40} />;
    case 'surgery': return <Stethoscope size={40} />;
    case 'medicine': return <Activity size={40} />;
    case 'urology': return <Droplets size={40} />;
    case 'pediatrics': return <Smile size={40} />;
    case 'ent': return <Ear size={40} />;
    case 'neurology': return <Brain size={40} />;
    default: return <Stethoscope size={40} />;
  }
};

const Departments = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-blue-700 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Departments</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Comprehensive multi-specialty healthcare services tailored to your needs.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept) => (
              <div key={dept.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="h-2 bg-blue-600"></div>
                <div className="p-8">
                  <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {getIcon(dept.id)}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{dept.name}</h3>
                  <p className="text-gray-600 mb-8 min-h-[60px]">
                    {dept.description}
                  </p>
                  <div className="flex flex-col gap-3">
                    <Link 
                      to={`/doctors?dept=${dept.id}`} 
                      className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      View Doctors <ChevronRight size={18} />
                    </Link>
                    <Link 
                      to="/appointment" 
                      className="inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Advanced Surgical Facilities</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Laparoscopic Surgery',
              'Orthopedic Surgery',
              'Gynecology Surgery',
              'General Surgery',
              'Urological Procedures',
              'Emergency Trauma Surgery',
              'ENT Surgery',
              'Pediatric Procedures'
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <span className="font-semibold text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Departments;
