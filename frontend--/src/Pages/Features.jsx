import React from 'react'

const features = [
  'Clean & Scalable Code',
  'Modern Tech Stack',
  'Performance Focused',
  'Mobile Responsive',
  'Security Best Practices',
  'Continuous Learning'
]

const Features = () => {
  return (
    <div className="px-5 py-10">
      <h1 className="text-3xl text-center text-purple-500 underline mb-8">
        Platform <span className="text-gray-400">Features</span>
      </h1>

      <ul className="max-w-xl mx-auto space-y-4">
        {features.map((feature, index) => (
          <li
            key={index}
            data-aos="fade-right"
            className="bg-gradient-to-r from-purple-700 to-blue-700 p-1 rounded-lg"
          >
            <div className="bg-black p-4 rounded-lg text-gray-300">
              {feature}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Features
