import React from "react";

export default function EasaLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm shadow-lg">
        <nav className="w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-md bg-green-600 flex items-center justify-center text-white font-bold">
              <img src="/logo.png" alt="EASA Group Logo" />
            </div>
            <div>
              <h1 className="text-lg font-semibold leading-none">EASA Group</h1>
              <p className="text-xs text-gray-500">Solar Energy & Green Hydrogen</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-green-600 transition-colors" href="#services">Services</a>
            <a className="hover:text-green-600 transition-colors" href="#projects">Projects</a>
            <a className="hover:text-green-600 transition-colors" href="#contact">Contact</a>
          </div>

          <div className="md:hidden">
            <button aria-label="Open menu" className="p-2 rounded-md border hover:bg-gray-50 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </nav>
      </header>

      <main className="w-full px-4 sm:px-6 lg:px-8">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center py-12 sm:py-16 lg:py-20">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-medium text-green-700 uppercase">Solar • Clean • Future-ready</p>
            <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight">
              Leading the solar revolution in
              <span className="text-green-600"> the Middle East</span>
            </h2>
            <p className="mt-6 text-gray-600 max-w-xl">EASA Group specializes in utility-scale solar farms, green hydrogen production, and comprehensive asset management services across the MENA region.</p>

            <div className="mt-8 flex flex-col  sm:flex-row gap-4 items-center justify-center">
              <a href="#projects" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-green-600 text-white hover:bg-green-700 transition-colors">View Projects</a>
            </div>


          </div>

          <div className="order-first lg:order-last">
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <div className="relative h-64 sm:h-80 lg:h-96">
                <div className="flex animate-[slide_15s_infinite] h-full">
                  <img src="big-card.png" alt="Solar Farm" className="w-full h-full object-cover flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-12 sm:py-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold">Our Services</h3>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto px-4">Comprehensive solar energy solutions and asset management driving the clean energy transition.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-4 sm:p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
              <img src="https://picsum.photos/400/200?random=20" alt="Asset Management" className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4 sm:mb-6" />
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Asset Management</h4>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">Complete lifecycle management of renewable energy assets with performance optimization and value creation.</p>
              <ul className="text-gray-600 space-y-2 text-sm sm:text-base">
                <li>• Portfolio performance monitoring</li>
                <li>• Preventive maintenance programs</li>
                <li>• Financial optimization</li>
                <li>• Risk management</li>
              </ul>
            </div>

            <div className="p-4 sm:p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
              <img src="https://picsum.photos/400/200?random=21" alt="Solar Energy" className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4 sm:mb-6" />
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Solar Energy</h4>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">Leading solar installations from utility-scale farms to distributed rooftop systems across the Middle East.</p>
              <ul className="text-gray-600 space-y-2 text-sm sm:text-base">
                <li>• Utility-scale solar farms (100MW+)</li>
                <li>• Rooftop solar installations</li>
                <li>• Solar-plus-storage systems</li>
                <li>• Grid integration solutions</li>
                <li>• O&M services</li>
              </ul>
            </div>

            <div className="p-4 sm:p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow sm:col-span-2 lg:col-span-1">
              <img src="https://picsum.photos/400/200?random=22" alt="Green Hydrogen" className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4 sm:mb-6" />
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Green Hydrogen</h4>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">Innovative green hydrogen production facilities powered by solar energy for industrial applications.</p>
              <ul className="text-gray-600 space-y-2 text-sm sm:text-base">
                <li>• Solar-powered electrolysis</li>
                <li>• Hydrogen storage facilities</li>
                <li>• Industrial supply chains</li>
                <li>• Export terminal development</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 sm:py-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold">Projects</h3>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto px-4">Leading solar energy developments across the Middle East, from utility-scale farms to green hydrogen facilities.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Al Dhafra Solar Farm", desc: "2GW utility-scale solar project with bifacial panels", type: "Solar", capacity: "2,000 MW" },
              { title: "NEOM Green Hydrogen", desc: "Solar-powered electrolysis facility for hydrogen export", type: "Hydrogen", capacity: "650 MW" },
              { title: "Mohammed bin Rashid Solar Park", desc: "World's largest single-site solar park", type: "Solar", capacity: "5,000 MW" },
              { title: "Red Sea Hydrogen Hub", desc: "Integrated solar-to-hydrogen production terminal", type: "Hydrogen", capacity: "1,200 MW" },
              { title: "Riyadh Solar Network", desc: "Distributed rooftop solar across commercial buildings", type: "Solar", capacity: "500 MW" },
              { title: "Oman Solar Complex", desc: "Combined solar farm and green hydrogen production", type: "Solar", capacity: "800 MW" }
            ].map((project, i) => (
              <div key={`project-${i}`} className="rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <img 
                  src={`https://picsum.photos/400/250?random=${i + 30}`} 
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                      project.type === 'Solar' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {project.type}
                    </span>
                    <span className="text-xs text-gray-500">{project.capacity}</span>
                  </div>
                  <h5 className="font-semibold text-base sm:text-lg mb-2">{project.title}</h5>
                  <p className="text-sm text-gray-600">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-12 sm:py-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold">Contact Us</h3>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto px-4">Get in touch for solar energy projects, green hydrogen solutions, and asset management services.</p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 sm:p-8">
            <div className="flex justify-between md:grid-cols-2 gap-8 mb-8">
              <div className="text-center md:text-left">
                <h4 className="text-lg font-semibold mb-4">Head Office</h4>
                <p className="text-gray-600">Level 6, Code Business Tower<br />Al-Barsha Road<br />Dubai, United Arab Emirates</p>
              </div>
              
              <div className="text-center md:text-left">
                <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
                <p className="text-gray-600">Tel: +971 50 184 5043 • +971 4 565 5443</p>
                <p className="text-gray-600 mt-2">Email: ceo@easagroup.com</p>
              </div>
            </div>
            
            <div className="text-center">
              <a href="mailto:ceo@easagroup.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                Reach Out
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-4 border-t bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs sm:text-sm text-gray-600">© {new Date().getFullYear()} EASA Group — Solar Energy & Green Hydrogen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}