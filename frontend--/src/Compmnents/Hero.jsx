import React from 'react'
import 'boxicons/css/boxicons.min.css'
import Spline from '@splinetool/react-spline'

const Hero = () => {
    return (
        <main className='flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]'>

            {/* 3D Robot */}
            {<Spline data-aos='fade-zoom-in' data-aos-easing='ease-in-back' data-aos-delay='300' data-aos-offset='0' data-aos-duration='3000' className='absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] h-full' scene="https://prod.spline.design/4hociAAZcACSCST5/scene.splinecode" />}


            <div data-aos='fade-right' data-aos-offset='300' data-aos-easing='ease-in-sine' className='w-fit ml-2 px-1 py-1 bg-gradient-to-r from-purple-700 to-blue-700 shadow-[0_0_15px] shadow-purple-800'>
                <div className='max-w-2xl z-10 md:mt-[60%] lg:mt-0 bg-black p-1 rounded-lg'>
                    {/* Tag Box With Gradient Border */}
                    <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-blue-500 to-purple-600 shadow-[0_0_15px] shadow-purple-800 rounded-full'>
                        <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1'>
                            <i class='bx bx-diamond'></i>
                            3D Experiment
                        </div>
                    </div>
                    {/* Main Heading */}
                    <h1 className='text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold -tracking-wider my-6'>
                        Interactive
                        <br />
                        Web Experience
                    </h1>
                    {/* Description */}
                    <p className='text-base sm:text-lg -tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem] mb-2'>
                        This project represents my learning curve as a Software Engineering student at HIT. The 3D object was sourced from a YouTube video description and used to experiment with frontend integration and pointer interactions. The project motivated me to begin learning Spline to create my own 3D assets going forward.
                    </p>
                    {/* Buttons */}
                    <div className='flex gap-2'>
                        <a className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold -tracking-wider transition-all  duration-500 hover:bg-[#1a1a1a]' href='#'>Documentation <i class='bx bx-link-external'></i></a>
                        <a className='border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold -tracking-wider transition-all  duration-500 hover:bg-gray-800 bg-gray-700' href='#'>GetStarted <i class='bx bx-link-external'></i></a>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Hero
