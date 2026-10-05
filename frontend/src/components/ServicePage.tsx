import { useParams, Navigate } from 'react-router-dom'

type Service = {
  title: string
  image: string
  intro: string
  approach: string
  services: string[]
  highlights: { title: string; text: string; tone: string }[]
}

const SERVICES: Record<string, Service> = {
  'port-construction': {
    title: 'Port Construction',
    image: '/port-construction.jpg',
    intro: 'Design and construction of new ports, terminals and marine infrastructure.',
    approach: 'EASA Group delivers port and marine infrastructure projects from feasibility through commissioning. We combine marine engineering expertise with disciplined project delivery to build facilities that are safe, durable and ready to handle future trade volumes.',
    services: [
      'Quay walls, berths and jetties',
      'Dredging and land reclamation',
      'Terminal and container yard development',
      'Breakwaters and coastal protection',
      'Port utilities and supporting infrastructure',
      'Quality, safety and regulatory compliance',
    ],
    highlights: [
      { title: 'Marine Engineering', text: 'Specialist design for harsh coastal and desert-port conditions.', tone: 'green' },
      { title: 'Delivery', text: 'Programme-driven construction with cost and schedule control.', tone: 'blue' },
      { title: 'Safety', text: 'Strict HSE standards across every marine and land-side works package.', tone: 'yellow' },
    ],
  },
  'port-management': {
    title: 'Port Management',
    image: '/port-management.jpg',
    intro: 'Operating and managing ports for efficient cargo handling and vessel turnaround.',
    approach: 'EASA Group manages port and terminal operations with a focus on throughput, reliability and safety. Our teams coordinate vessels, cargo and equipment so that ports run efficiently and customers get predictable turnaround times.',
    services: [
      'Terminal and berth operations',
      'Cargo and container handling',
      'Vessel traffic and berth scheduling',
      'Port equipment and facilities maintenance',
      'Logistics and supply chain integration',
      'Performance reporting and compliance',
    ],
    highlights: [
      { title: 'Operations', text: 'Round-the-clock terminal operations and berth planning.', tone: 'green' },
      { title: 'Logistics', text: 'Seamless links between sea, road and rail networks.', tone: 'blue' },
      { title: 'Reliability', text: 'Preventive maintenance to keep equipment and berths available.', tone: 'yellow' },
    ],
  },
  'global-insurance': {
    title: 'Global Insurance',
    image: '/insurance.jpg',
    intro: 'Tailored insurance solutions protecting assets, projects and operations worldwide.',
    approach: 'EASA Group works with international insurers and brokers to structure the right protection for large assets and complex projects. We help clients understand their risk, secure suitable cover and manage claims when they arise.',
    services: [
      'Property and project insurance',
      'Marine and cargo cover',
      'Energy and industrial risk',
      'Construction and engineering all-risk',
      'Risk assessment and advisory',
      'Claims advisory and support',
    ],
    highlights: [
      { title: 'Global Reach', text: 'Access to international insurance markets and capacity.', tone: 'green' },
      { title: 'Tailored Cover', text: 'Programmes structured around each client\'s specific risks.', tone: 'blue' },
      { title: 'Claims Support', text: 'Hands-on guidance through the claims process.', tone: 'yellow' },
    ],
  },
  'heavy-machinery': {
    title: 'Heavy Machinery',
    image: '/machinery.jpg',
    intro: 'Supply and leasing of heavy equipment for construction, infrastructure and industrial projects.',
    approach: 'EASA Group supplies reliable heavy equipment to contractors and project owners. From earthmoving to foundation works, we match the right machines to the job and back them with maintenance and operator support.',
    services: [
      'Trucks',
      'Excavators',
      'Piling machines',
      'Equipment sales and leasing',
      'Maintenance and spare parts',
      'Operator and technical support',
    ],
    highlights: [
      { title: 'Fleet', text: 'Trucks, excavators and piling machines for demanding sites.', tone: 'green' },
      { title: 'Flexible Terms', text: 'Options to buy or lease to suit project duration.', tone: 'blue' },
      { title: 'Support', text: 'Servicing and technical support to minimise downtime.', tone: 'yellow' },
    ],
  },
  'diesel-trading': {
    title: 'Diesel Trading',
    image: '/diesel.jpg',
    intro: 'Reliable sourcing and supply of diesel for industrial, commercial and marine customers.',
    approach: 'EASA Group sources and supplies diesel to customers who depend on consistent, quality-assured fuel. We manage procurement, storage access and delivery so that clients can focus on their own operations.',
    services: [
      'Bulk diesel supply',
      'Storage and terminal access',
      'Road, rail and marine delivery',
      'Quality-assured fuel',
      'Contract and spot supply',
      'Regulatory and documentation support',
    ],
    highlights: [
      { title: 'Supply', text: 'Dependable sourcing for ongoing and one-off requirements.', tone: 'green' },
      { title: 'Quality', text: 'Fuel supplied to agreed specifications.', tone: 'blue' },
      { title: 'Delivery', text: 'Coordinated transport and storage to your site or vessel.', tone: 'yellow' },
    ],
  },
}

const TONES: Record<string, { box: string; head: string }> = {
  green: { box: 'bg-green-50', head: 'text-green-800' },
  blue: { box: 'bg-blue-50', head: 'text-blue-800' },
  yellow: { box: 'bg-yellow-50', head: 'text-yellow-800' },
}

export default function ServicePage() {
  const { slug = '' } = useParams()
  const service = SERVICES[slug]
  if (!service) return <Navigate to="/" replace />

  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm shadow-lg">
        <nav className="w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-md bg-green-600 flex items-center justify-center text-white font-bold">
              <img src="/logo.png" alt="EASA Group Logo" />
            </div>
            <div>
              <h1 className="text-lg font-semibold leading-none">EASA Group</h1>
              <p className="text-xs text-gray-500">Solar Energy & Green Hydrogen</p>
            </div>
          </a>
          <div className="flex items-center gap-4 sm:gap-6 text-sm">
            <a className="hover:text-green-600 transition-colors" href="/">Home</a>
            <a className="hover:text-green-600 transition-colors" href="/#services">Services</a>
            <a className="hover:text-green-600 transition-colors" href="/#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main className="w-full px-4 sm:px-6 lg:px-8">
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">{service.title}</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{service.intro}</p>
            </div>

            <div className="mb-12">
              <img src={service.image} alt={service.title} className="w-full h-64 sm:h-96 object-cover rounded-2xl shadow-2xl" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Our Approach</h2>
                <p className="text-gray-600 mb-6">{service.approach}</p>

                <h3 className="text-xl font-semibold mb-4">Key Services</h3>
                <ul className="space-y-3 text-gray-600">
                  {service.services.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Why EASA Group</h2>
                <div className="space-y-6">
                  {service.highlights.map((h) => (
                    <div key={h.title} className={`${TONES[h.tone].box} p-6 rounded-lg`}>
                      <h4 className={`font-semibold ${TONES[h.tone].head} mb-2`}>{h.title}</h4>
                      <p className="text-sm text-gray-600">{h.text}</p>
                    </div>
                  ))}
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
  )
}
