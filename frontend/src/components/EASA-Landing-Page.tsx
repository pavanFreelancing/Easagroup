
export default function EasaLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm shadow-lg">
        <nav className="w-full px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-green-600 flex items-center justify-center text-white font-bold">E</div>
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

      <main className="w-full px-6 lg:px-8">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-20">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-medium text-green-700 uppercase">Solar • Clean • Future-ready</p>
            <h2 className="mt-6 text-4xl lg:text-5xl font-extrabold leading-tight">
              Leading the solar revolution in
              <span className="text-green-600"> the Middle East</span>
            </h2>
            <p className="mt-6 text-gray-600 max-w-xl">EASA Group specializes in utility-scale solar farms, green hydrogen production, and comprehensive asset management services across the MENA region.</p>

            <div className="mt-8 flex sm:flex-row gap-4 items-center justify-center">
              <a href="#projects" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-green-600 text-white hover:bg-green-700 transition-colors">View Projects</a>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg text-sm text-gray-600">
              <div className="space-y-1">
                <div className="text-xs text-gray-500">Head Office</div>
                <div className="font-medium">Level 6, Code Business Tower, Al-Barsha Road, Dubai, United Arab Emirates</div>
              </div>

              <div className="space-y-1">
                <div className="text-xs text-gray-500">Contact</div>
                <div className="font-medium">Tel: +971 50 184 5043 • +971 4 565 5443</div>
                <div className="font-medium">Email: md@easagroup.com</div>
              </div>
            </div>
          </div>

          <div className="order-first lg:order-last">
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <div className="relative h-96">
                <div className="flex animate-[slide_15s_infinite] h-full">
                  <img src="big-card.png" alt="Solar Farm" className="w-full h-full object-cover flex-shrink-0" />
                 
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">Our Services</h3>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">Comprehensive solar energy solutions and asset management driving the clean energy transition.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border shadow-lg hover:shadow-xl transition-shadow">
              <img src="https://picsum.photos/400/200?random=20" alt="Asset Management" className="w-full h-48 object-cover rounded-lg mb-6" />
              <h4 className="text-xl font-semibold mb-4">Asset Management</h4>
              <p className="text-gray-600 mb-4">Complete lifecycle management of renewable energy assets with performance optimization and value creation.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Portfolio performance monitoring</li>
                <li>• Preventive maintenance programs</li>
                <li>• Financial optimization</li>
                <li>• Risk management</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border shadow-lg hover:shadow-xl transition-shadow">
              <img src="https://picsum.photos/400/200?random=21" alt="Solar Energy" className="w-full h-48 object-cover rounded-lg mb-6" />
              <h4 className="text-xl font-semibold mb-4">Solar Energy</h4>
              <p className="text-gray-600 mb-4">Leading solar installations from utility-scale farms to distributed rooftop systems across the Middle East.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Utility-scale solar farms (100MW+)</li>
                <li>• Rooftop solar installations</li>
                <li>• Solar-plus-storage systems</li>
                <li>• Grid integration solutions</li>
                <li>• O&M services</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border shadow-lg hover:shadow-xl transition-shadow">
              <img src="https://picsum.photos/400/200?random=22" alt="Green Hydrogen" className="w-full h-48 object-cover rounded-lg mb-6" />
              <h4 className="text-xl font-semibold mb-4">Green Hydrogen</h4>
              <p className="text-gray-600 mb-4">Innovative green hydrogen production facilities powered by solar energy for industrial applications.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Solar-powered electrolysis</li>
                <li>• Hydrogen storage facilities</li>
                <li>• Industrial supply chains</li>
                <li>• Export terminal development</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">Projects Done Till Now</h3>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">Leading solar energy developments across the Middle East, from utility-scale farms to green hydrogen facilities.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Al Dhafra Solar Farm", desc: "2GW utility-scale solar project with bifacial panels", type: "Solar", capacity: "2,000 MW" },
              { title: "NEOM Green Hydrogen", desc: "Solar-powered electrolysis facility for hydrogen export", type: "Hydrogen", capacity: "650 MW" },
              { title: "Mohammed bin Rashid Solar Park", desc: "World's largest single-site solar park", type: "Solar", capacity: "5,000 MW" },
              { title: "Red Sea Hydrogen Hub", desc: "Integrated solar-to-hydrogen production terminal", type: "Hydrogen", capacity: "1,200 MW" },
              { title: "Riyadh Solar Network", desc: "Distributed rooftop solar across commercial buildings", type: "Solar", capacity: "500 MW" },
              { title: "Oman Solar Complex", desc: "Combined solar farm and green hydrogen production", type: "Solar", capacity: "800 MW" }
            ].map((project, i) => (
              <div key={`project-${i}`} className="rounded-lg overflow-hidden border shadow-lg hover:shadow-2xl transition-shadow">
                <img 
                  src={`https://picsum.photos/400/250?random=${i + 30}`} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                      project.type === 'Solar' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {project.type}
                    </span>
                    <span className="text-xs text-gray-500">{project.capacity}</span>
                  </div>
                  <h5 className="font-semibold text-lg mb-2">{project.title}</h5>
                  <p className="text-sm text-gray-600">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">Contact Us</h3>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">Get in touch for solar energy projects, green hydrogen solutions, and asset management services.</p>
          </div>

          <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-6">Send us a message</h4>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input id="name" type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input id="email" type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea id="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Tell us about your project"></textarea>
                  </div>
                  <a href="mailto:ceo@easagroup.com" className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors inline-block text-center">Send Message</a>
                </form>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-gray-900">Head Office</h5>
                    <p className="text-gray-600">Level 6, Code Business Tower<br />Al-Barsha Road<br />Dubai, United Arab Emirates</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">Phone</h5>
                    <p className="text-gray-600">+971 50 184 5043<br />+971 4 565 5443</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">Email</h5>
                    <p className="text-gray-600">ceo@easagroup.com</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">Business Hours</h5>
                    <p className="text-gray-600">Sunday - Thursday: 9:00 AM - 6:00 PM<br />Friday - Saturday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-4 border-t">
        <div className="w-full px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} EASA Group — Solar Energy & Green Hydrogen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}