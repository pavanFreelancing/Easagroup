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
            <p className="inline-flex items-center gap-2 text-sm font-medium text-green-700 uppercase animate-[fadeInUp_1s_ease-out]">Solar • Clean • Future-ready</p>
            <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight animate-[fadeInUp_1s_ease-out]">
              Leading the solar revolution in
              <span className="text-green-600"> the Middle East</span>
            </h2>
            <p className="mt-6 text-gray-600 max-w-xl animate-[fadeInUp_1s_ease-out]">EASA Group specializes in utility-scale solar farms, green hydrogen production, and comprehensive asset management services across the MENA region.</p>

            <div className="mt-8 flex flex-col  sm:flex-row gap-4 items-center justify-center animate-[fadeInUp_1s_ease-out]">
              <a href="#projects" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-green-600 text-white hover:bg-green-700 transition-colors">View Projects</a>
            </div>


          </div>

          <div className="order-first lg:order-last">
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <div className="relative h-64 sm:h-80 lg:h-96">
                <div className="flex h-full">
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
              <img src="/asset.png" alt="Asset Management" className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4 sm:mb-6" />
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Asset Management</h4>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">Complete lifecycle management of renewable energy assets with performance optimization and value creation.</p>
              <ul className="text-gray-600 space-y-2 text-sm sm:text-base mb-6">
                <li>• Portfolio performance monitoring</li>
                <li>• Preventive maintenance programs</li>
                <li>• Financial optimization</li>
                <li>• Risk management</li>
              </ul>
              <a href="/asset-management" className="inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors">Know More</a>
            </div>

            <div className="p-4 sm:p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
              <img src="/solar.png" alt="Solar Energy" className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4 sm:mb-6" />
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Solar Energy</h4>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">Leading solar installations from utility-scale farms to distributed rooftop systems across the Middle East.</p>
              <ul className="text-gray-600 space-y-2 text-sm sm:text-base mb-6">
                <li>• Utility-scale solar farms (100MW+)</li>
                <li>• Rooftop solar installations</li>
                <li>• Solar-plus-storage systems</li>
                <li>• Grid integration solutions</li>
                <li>• O&M services</li>
              </ul>
              <a href="/solar-energy" className="inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors">Know More</a>
            </div>

            <div className="p-4 sm:p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow sm:col-span-2 lg:col-span-1">
              <img src="/green.png" alt="Green Hydrogen" className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4 sm:mb-6" />
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Green Hydrogen</h4>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">Innovative green hydrogen production facilities powered by solar energy for industrial applications.</p>
              <ul className="text-gray-600 space-y-2 text-sm sm:text-base mb-6">
                <li>• Solar-powered electrolysis</li>
                <li>• Hydrogen storage facilities</li>
                <li>• Industrial supply chains</li>
                <li>• Export terminal development</li>
              </ul>
              <a href="/green-hydrogen" className="inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors">Know More</a>
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
              { 
                title: "Al Dhafra Solar Farm", 
                desc: "World's largest single-site solar project featuring 4 million bifacial panels with advanced tracking systems in Abu Dhabi desert", 
                type: "Solar", 
                
                features: ["Bifacial panels", "Single-axis tracking", "Desert installation"]
              },
              { 
                title: "NEOM Green Hydrogen", 
                desc: "Revolutionary green hydrogen facility powered entirely by renewable energy, producing clean fuel for global export markets", 
                type: "Hydrogen", 
              
                features: ["Solar-powered electrolysis", "Export terminal", "Zero emissions"]
              },
              { 
                title: "Mohammed bin Rashid Solar Park", 
                desc: "Iconic solar park combining photovoltaic and concentrated solar power technologies with molten salt storage systems", 
                type: "Solar", 
                
                features: ["CSP + PV hybrid", "Thermal storage", "Visitor center"]
              },
              { 
                title: "Red Sea Hydrogen Hub", 
                desc: "Integrated renewable energy complex producing green hydrogen and ammonia for industrial applications and shipping fuel", 
                type: "Hydrogen", 
                
                features: ["Green ammonia", "Port facilities", "Industrial supply"]
              },
              { 
                title: "Riyadh Solar Network", 
                desc: "Comprehensive distributed solar program across government buildings and commercial facilities throughout Riyadh metropolitan area", 
                type: "Solar", 
                features: ["Rooftop systems", "Grid integration", "Smart monitoring"]
              },
              { 
                title: "Oman Solar Complex", 
                desc: "Multi-technology renewable energy facility combining large-scale solar generation with green hydrogen production capabilities", 
                type: "Solar", 
               
                features: ["Hybrid technology", "Hydrogen ready", "Industrial zone"]
              }
            ].map((project, i) => (
              <div key={`project-${i}`} className="rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <div className="flex animate-[slide_12s_infinite] h-full">
                    <img src={i === 0 ? '/solar1.jpg' : i === 1 ? '/green1.jpg' : i === 2 ? '/solar3.jpg' : i === 3 ? '/green5.jpg' : i === 4 ? '/solar4.jpg' : '/solar5.jpg'} alt={`${project.title} 1`} className="w-full h-full object-cover flex-shrink-0" />
                    <img src={i === 0 ? '/solar2.jpg' : i === 1 ? '/green2.jpg' : i === 2 ? '/solar.png' : i === 3 ? '/green4.jpg' : i === 4 ? '/solar1.jpg' : '/solar3.jpg'} alt={`${project.title} 2`} className="w-full h-full object-cover flex-shrink-0" />
                    <img src={i === 0 ? '/solar3.jpg' : i === 1 ? '/green.png' : i === 2 ? '/solar4.jpg' : i === 3 ? '/green3.jpg' : i === 4 ? '/solar.png' : '/solar6.jpg'} alt={`${project.title} 3`} className="w-full h-full object-cover flex-shrink-0" />
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                      project.type === 'Solar' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {project.type}
                    </span>
                    {/* <span className="text-xs text-gray-500">{project.capacity}</span> */}
                  </div>
                  <h5 className="font-semibold text-base sm:text-lg mb-2">{project.title}</h5>
                  <p className="text-sm text-gray-600 mb-3">{project.desc}</p>
                 
                  
                  <div className="mt-3 flex flex-wrap gap-1">
                    {project.features.map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
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