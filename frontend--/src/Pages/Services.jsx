import React from 'react'

const services = [
  {
    title: 'Frontend Development',
    desc: 'Responsive, accessible and modern UIs using React, Tailwind CSS and modern JS.'
  },
  {
    title: 'Backend Development',
    desc: 'Secure APIs, authentication systems and databases using Node.js & Express.'
  },
  {
    title: 'Full-Stack Applications',
    desc: 'Complete solutions from database to deployment.'
  },
  {
    title: 'UI / UX Design',
    desc: 'Clean, user-friendly interfaces focused on real users.'
  },
  {
    title: 'API Integration',
    desc: 'Connecting third-party services, payment gateways and cloud tools.'
  }
]

const Services = () => {
  return (
    <div className="px-5 py-10">
      <h1 className="text-3xl text-center text-purple-500 underline mb-10">
        My <span className="text-gray-400">Services</span>
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-black border border-purple-700 rounded-xl p-5 shadow-[0_0_15px] shadow-purple-800 hover:scale-105 transition"
          >
            <h2 className="text-xl text-blue-500 mb-2">{service.title}</h2>
            <p className="text-gray-400">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
