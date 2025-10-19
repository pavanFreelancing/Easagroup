import React from "react";

export default function GreenHydrogen() {
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
            <a className="hover:text-green-600 transition-colors" href="/solar-energy">Solar Energy</a>
          </div>
        </nav>
      </header>

      <main className="w-full px-4 sm:px-6 lg:px-8">
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Green Hydrogen Production</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Innovative green hydrogen production facilities powered by solar energy for industrial applications and export markets.</p>
            </div>

            <div className="mb-12">
              <img src="/green.png" alt="Green Hydrogen" className="w-full h-64 sm:h-96 object-cover rounded-2xl shadow-2xl" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">The Future of Clean Energy</h2>
                <p className="text-gray-600 mb-6">Green hydrogen represents the next frontier in clean energy technology. EASA Group is pioneering large-scale green hydrogen production using renewable solar energy, creating a carbon-free fuel for industries, transportation, and energy storage.</p>
                
                <h3 className="text-xl font-semibold mb-4">Our Hydrogen Solutions</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Solar-powered electrolysis facilities</li>
                  <li>• High-pressure hydrogen storage systems</li>
                  <li>• Industrial hydrogen supply chains</li>
                  <li>• Green ammonia production for export</li>
                  <li>• Hydrogen refueling infrastructure</li>
                  <li>• Export terminal development</li>
                  <li>• Power-to-X solutions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Production Capabilities</h2>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Production Capacity</h4>
                    <p className="text-2xl font-bold text-blue-600">500+ MW</p>
                    <p className="text-sm text-gray-600">Electrolysis capacity in development</p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Hydrogen Output</h4>
                    <p className="text-2xl font-bold text-green-600">200 tons/day</p>
                    <p className="text-sm text-gray-600">Green hydrogen production target</p>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Export Potential</h4>
                    <p className="text-2xl font-bold text-purple-600">1M tons/year</p>
                    <p className="text-sm text-gray-600">Green ammonia export capacity</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Applications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600">Steel and cement industry decarbonization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600">Heavy-duty transportation fuel</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-600">Long-duration energy storage</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-600">International energy export</span>
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