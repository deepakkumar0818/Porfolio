export type Project = {
  slug: string
  title: string
  description: string
  category: string
  date: string
  technologies: string[]
  links: { demo: string; github: string }
  image?: string
}

export const projects: Project[] = [
  {
    slug: 'erp-manufacturing-system',
    title: 'ERP Manufacturing System',
    description:
      'Enterprise ERP for manufacturing: production planning, procurement, inventory, BOM, finance, QA, and shop-floor tracking with real-time dashboards.',
    category: 'ERP',
    date: '2025',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL'],
    links: { demo: '#', github: '#' },
    image: '/images/projects/erp.png',
  },
  {
    slug: 'doc-spot-doctor-appointment-system',
    title: 'Doc Spot (Doctor Appointment System)',
    description:
      'Multi-clinic booking with doctor schedules, tele-consultation, e-prescriptions, reminders, and payments.',
    category: 'Healthcare',
    date: '2025',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Twilio'],
    links: { demo: '#', github: '#' },
    image: '/images/projects/DocSpot.png',
  },
  {
    slug: 'food-delivery-application',
    title: 'Food Delivery Application',
    description:
      'End-to-end food ordering with restaurant panel, delivery partner app, live tracking, and payments.',
    category: 'Mobile',
    date: '2024',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Maps API'],
    links: { demo: '#', github: '#' },
    image: '/images/projects/FoodDeliveryApp.png',
  },
  {
    slug: 'student-portal',
    title: 'Student Portal',
    description:
      'Student self-service portal for courses, attendance, results, fees, assignments, and notifications.',
    category: 'Web App',
    date: '2024',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis'],
    links: { demo: '#', github: '#' },
    image: '/images/projects/studentPortal.png',
  },
  {
    slug: 'real-estate-management-system',
    title: 'Real Estate Management System',
    description:
      'Property listing and sales CRM with leads, site visits, inventory, and commission workflows.',
    category: 'Real Estate',
    date: '2024',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Mapbox'],
    links: { demo: '#', github: '#' },
    image: '/images/projects/realestate.jpeg',
  },
  {
    slug: 'real-estate-rental-management',
    title: 'Real Estate Rental Management',
    description:
      'Rentals platform for listings, tenant onboarding, leases, rent collection, and maintenance.',
    category: 'Real Estate',
    date: '2024',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    links: { demo: '#', github: '#' },
  },
  {
    slug: 'farmer-procurement-application',
    title: 'Farmer Procurement Application',
    description:
      'Farm procurement with supplier onboarding, purchase cycles, quality checks, and logistics.',
    category: 'Supply Chain',
    date: '2023',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    links: { demo: '#', github: '#' },
    image: '/images/projects/FarmerProcurement.png',
  },
  {
    slug: 'inventory-and-warehousing-system',
    title: 'Inventory & Warehousing System',
    description:
      'Inventory control, warehouse locations, pick-pack-ship, GRN, and barcode-based operations.',
    category: 'ERP',
    date: '2023',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'RabbitMQ'],
    links: { demo: '#', github: '#' },
    image: '/images/projects/wms.jpeg',
  },
  {
    slug: 'accounting-system',
    title: 'Accounting System',
    description:
      'Financial accounting with ledgers, vouchers, GST/VAT, bank reconciliation, and reports.',
    category: 'Finance',
    date: '2023',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL'],
    links: { demo: '#', github: '#' },
    image: '/images/projects/accounting app.jpeg',
  },
  {
    slug: 'hrms',
    title: 'HRMS',
    description:
      'Human Resource Management: recruitment, onboarding, attendance, payroll, and performance.',
    category: 'HR',
    date: '2023',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    links: { demo: '#', github: '#' },
    image: '/images/projects/hrms.jpeg',
  },
  {
    slug: 'school-management-system',
    title: 'School Management System',
    description:
      'End-to-end school operations: admissions, timetable, exams, fees, LMS, and parent app.',
    category: 'EdTech',
    date: '2023',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL'],
    links: { demo: '#', github: '#' },
    image: '/images/projects/school_management_app.jpeg',
  },
  {
    slug: 'fleet-management-system',
    title: 'Fleet Management System',
    description:
      'Vehicle tracking, trip planning, fuel logs, maintenance schedules, and driver scorecards.',
    category: 'Logistics',
    date: '2023',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Maps API'],
    links: { demo: '#', github: '#' },
    image: '/images/projects/fleetmanagement.png',
  },
]

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAdjacentSlugs(slug: string): { prev?: string; next?: string } {
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return {}
  const prev = index > 0 ? projects[index - 1].slug : undefined
  const next = index < projects.length - 1 ? projects[index + 1].slug : undefined
  return { prev, next }
}

export function getRelatedProjects(slug: string, limit = 3): Project[] {
  const current = getProjectBySlug(slug)
  if (!current) return projects.slice(0, limit)
  const sameCategory = projects.filter((p) => p.slug !== slug && p.category === current.category)
  const others = projects.filter((p) => p.slug !== slug && p.category !== current.category)
  return [...sameCategory, ...others].slice(0, limit)
}


