


const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    title: "Advanced Operation Theatre",
    category: "Surgery"
  },
  {
    url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    title: "Modern ICU Facilities",
    category: "Critical Care"
  },
  {
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    title: "24x7 Digital CT Scan",
    category: "Diagnostics"
  },
  {
    url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    title: "Pathology Laboratory",
    category: "Diagnostics"
  },
  {
    url: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
    title: "Patient Recovery Ward",
    category: "Nursing Home"
  },
  {
    url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    title: "Laparoscopic Unit",
    category: "Surgery"
  }
];

const Gallery = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs">Our Infrastructure</span>
            <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Hospital Gallery</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Glimpse into our state-of-the-art medical facilities and high-precision diagnostic units.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl shadow-lg aspect-[4/3]"
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-2">{image.category}</span>
                <h4 className="text-white text-xl font-bold">{image.title}</h4>
              </div>
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                SATYAJIT
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
