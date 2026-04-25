
import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, Calendar, Award, ChevronRight } from 'lucide-react';
import { doctors, departments } from '../data/hospitalData';

const Doctors = () => {
  const [searchParams] = useSearchParams();
  const initialDept = searchParams.get('dept') || 'all';
  
  const [selectedDept, setSelectedDept] = useState(initialDept);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setSelectedDept(initialDept);
  }, [initialDept]);

  const filteredDoctors = doctors.filter(doctor => {
    const matchesDept = selectedDept === 'all' || doctor.departmentId === selectedDept;
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         doctor.qualification.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <section className="bg-blue-700 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Medical Specialists</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Meet our team of highly qualified and experienced doctors dedicated to your health.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="bg-white p-6 rounded-2xl shadow-md mb-12 -mt-20 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by name or qualification..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <select
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none bg-white"
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                >
                  <option value="all">All Departments</option>
                  {departments.map(dept => (
                    <option key={dept.id} value={dept.id}>{dept.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center justify-end">
                <p className="text-gray-500 font-medium">
                  Showing {filteredDoctors.length} Doctors
                </p>
              </div>
            </div>
          </div>

          {/* Doctors Grid */}
          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredDoctors.map((doctor) => {
                const dept = departments.find(d => d.id === doctor.departmentId);
                return (
                  <div key={doctor.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all border border-gray-100 group">
                    <div className="h-3 bg-blue-600"></div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-700 font-bold text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                          {doctor.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                        </div>
                        <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          {dept?.name}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                      <div className="flex items-center gap-2 text-gray-500 mb-4">
                        <Award size={16} />
                        <span className="text-sm font-medium">{doctor.qualification}</span>
                      </div>
                      
                      <div className="space-y-3 pt-4 border-t border-gray-100 mb-6">
                        <div className="flex items-start gap-3">
                          <Calendar className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                          <div>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-tighter">Availability</p>
                            <p className="text-sm text-gray-700 font-medium">{doctor.availability}</p>
                          </div>
                        </div>
                      </div>

                      <Link 
                        to={`/appointment?doctor=${doctor.id}&dept=${doctor.departmentId}`}
                        className="w-full bg-gray-900 text-white font-bold py-3 rounded-xl hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                      >
                        Book Appointment <ChevronRight size={18} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-dashed border-gray-300">
              <h3 className="text-2xl font-bold text-gray-400 mb-2">No doctors found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
              <button 
                onClick={() => {setSelectedDept('all'); setSearchTerm('');}}
                className="mt-6 text-blue-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Doctors;
