import React from 'react'

const skills = [
    'React',
    'JavaScript',
    'Tailwind CSS',
    'Node.js',
    'Express',
    'MongoDB',
    'Git & GitHub'
]

const Developer = () => {
    return (
        <div className="px-5 py-10 text-center">
            <h1 className="text-3xl text-purple-500 underline mb-5">
                The <span className="text-gray-400">Developer</span>
            </h1>

            <p className="max-w-2xl mx-auto text-slate-300 mb-8">
                I am a Software Engineering student <span className='font-semibold text-blue-600'>(Tatenda Ainos Junior Makura)</span> at the Harare Institute of Technology(HIT) focused on building real-world,
                scalable and impactful digital solutions using modern technologies.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                    <span key={index} data-aos="zoom-in" className="px-5 py-2 bg-black border border-blue-600 rounded-full text-blue-400">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Developer
