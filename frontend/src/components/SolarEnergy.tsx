import React from "react";

export default function SolarEnergy() {
  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm shadow-lg">
        <nav className="w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-green-600 flex items-center justify-center text-white font-bold">E</div>
            <div>
              <h1 className="text-lg font-semibold leading-none">EASA Group</h1>
              <p className="text-xs text-gray-500">Solar Energy & Green Hydrogen</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-green-600 transition-colors" href="/">Home</a>
            <a className="hover:text-green-600 transition-colors" href="/asset-management">Asset Management</a>
            <a className="hover:text-green-600 transition-colors" href="/green-hydrogen">Green Hydrogen</a>
          </div>
        </nav>
      </header>

      <main className="w-full px-4 sm:px-6 lg:px-8">
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Solar Energy Solutions</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Leading solar installations from utility-scale farms to distributed rooftop systems across the Middle East, powering the future with clean energy.</p>
            </div>

            <div className="mb-12">
              <img src="/solar.png" alt="Solar Energy" className="w-full h-64 sm:h-96 object-cover rounded-2xl shadow-2xl" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Solar Technology Leadership</h2>
                <p className="text-gray-600 mb-6">EASA Group is at the forefront of solar energy development in the Middle East, delivering cutting-edge photovoltaic and concentrated solar power solutions. Our expertise spans the entire solar value chain, from project development to long-term operations.</p>
                
                <h3 className="text-xl font-semibold mb-4">Our Solar Solutions</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Utility-scale solar farms (100MW+ capacity)</li>
                  <li>• Commercial and industrial rooftop installations</li>
                  <li>• Solar-plus-storage hybrid systems</li>
                  <li>• Grid integration and smart inverter solutions</li>
                  <li>• Concentrated Solar Power (CSP) with thermal storage</li>
                  <li>• Floating solar photovoltaic systems</li>
                  <li>• Operations & maintenance services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Project Portfolio</h2>
                <div className="space-y-6">
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Total Capacity</h4>
                    <p className="text-2xl font-bold text-yellow-600">8+ GW</p>
                    <p className="text-sm text-gray-600">Solar projects developed and managed</p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">CO₂ Reduction</h4>
                    <p className="text-2xl font-bold text-green-600">4.2M tons</p>
                    <p className="text-sm text-gray-600">Annual carbon emissions avoided</p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Energy Generation</h4>
                    <p className="text-2xl font-bold text-blue-600">15+ TWh</p>
                    <p className="text-sm text-gray-600">Clean energy produced annually</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Technology Focus</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-600">Bifacial solar panels with tracking systems</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600">Advanced inverter technology</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600">AI-powered performance monitoring</span>
                    </div>
                  </div>
                </div>
              </div>
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