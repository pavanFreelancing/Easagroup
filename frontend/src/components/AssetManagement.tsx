
export default function AssetManagement() {
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
            <a className="hover:text-green-600 transition-colors" href="/solar-energy">Solar Energy</a>
            <a className="hover:text-green-600 transition-colors" href="/green-hydrogen">Green Hydrogen</a>
          </div>
        </nav>
      </header>

      <main className="w-full px-4 sm:px-6 lg:px-8">
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Asset Management</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Complete lifecycle management of renewable energy assets with performance optimization and long-term value creation.</p>
            </div>

            <div className="mb-12">
              <img src="/asset.png" alt="Asset Management" className="w-full h-64 sm:h-96 object-cover rounded-2xl shadow-2xl" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Our Approach</h2>
                <p className="text-gray-600 mb-6">EASA Group provides comprehensive asset management services for renewable energy portfolios, ensuring optimal performance and maximum returns throughout the asset lifecycle. Our data-driven approach combines advanced monitoring technologies with expert analysis to deliver superior results.</p>
                
                <h3 className="text-xl font-semibold mb-4">Key Services</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Portfolio performance monitoring and analytics</li>
                  <li>• Preventive and corrective maintenance programs</li>
                  <li>• Financial optimization and cost management</li>
                  <li>• Risk assessment and mitigation strategies</li>
                  <li>• Regulatory compliance and reporting</li>
                  <li>• Asset valuation and due diligence</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Performance Metrics</h2>
                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Portfolio Size</h4>
                    <p className="text-2xl font-bold text-green-600">2.5+ GW</p>
                    <p className="text-sm text-gray-600">Under management across MENA region</p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Availability Rate</h4>
                    <p className="text-2xl font-bold text-blue-600">98.5%</p>
                    <p className="text-sm text-gray-600">Average system availability</p>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Cost Reduction</h4>
                    <p className="text-2xl font-bold text-yellow-600">15%</p>
                    <p className="text-sm text-gray-600">Average O&M cost optimization</p>
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