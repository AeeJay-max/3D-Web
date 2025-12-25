import React from 'react'
import Image from '../assets/Image.jpg'
import { Link } from 'react-router'

const About = () => {
    return (
        <div>
            <div className='items-center text-center '>
                <p className='text-2xl p-5 text-purple-500 underline'>About <span className='text-gray-400 font-medium'>Me</span></p>
            </div>
            <div className='my-5 mx-4 bg-gradient-to-r from-purple-700 to-blue-800 p-1 animate-gradient-x'>
                <div className='flex flex-col md:flex-row bg-black p-2 rounded-lg gap-17 -right-[5%]'>
                    <div data-aos='fade-zoom-in' data-aos-easing='ease-in-back' data-aos-delay='300' data-aos-offset='0' data-aos-duration='3000' className='w-80 h-80'>
                        <img src={Image} className='bg-slate-500 w-72 h-72 rounded-lg shadow-[0_0_10px_2px] shadow-purple-600 -rotate-[11deg] hover:scale-105 hover:-rotate-6 transition-all duration-500' />
                    </div>
                    <div data-aos='fade-left' data-aos-offset='300' data-aos-easing='ease-in-sine' data-aos-duration='3000' className='flex flex-col text-center text-slate-300 w-fit'>
                        <p>Welcome to <strong className='text-purple-700'>Aee-Jay</strong> - a modern showcase of my work as a passionate and dedicated Software Engineering student called <span className='font-semibold text-blue-600'>Tatenda Ainos Junior Makura</span>. I specialize in developing responsive websites, powerful web applications and efficient digital solutions that solve real-world problems.<br />Whether it's building full-stack platforms, APIs, or user-friendly interfaces, I bring ideas to life using clean, scalable code. <br />Other projects I have done in practise are on the github account <span className='text-fuchsia-600 underline hover:text-teal-500 hover:text-sc'><Link to={'https://github.com/AeeJay-max'}>AeeJay-max</Link></span></p>
                        <b className='text-2xl text-gray-500 mt-1'>My Mission</b>
                        <p>To grow as a developer by continuously learning and building impactful software that improves lives and drives innovation in various sectors.</p>
                        <b className='text-2xl text-gray-500 mt-1'>My Vision</b>
                        <p>To become a versatile and reliable software engineer, contributing to tech-driven solutions across Zimbabwe and beyond - and eventually leador be part<br /> of global projects that shape the future of technology.</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default About
