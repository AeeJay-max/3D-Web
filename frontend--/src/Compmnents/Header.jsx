import React from 'react';
import 'boxicons/css/boxicons.min.css';
import { useNavigate } from 'react-router';

const Header = () => {
    //Function to Show Mobile Menu
    const showMobileMenu = () => {
        //Get the Mobile Menu
        const mobileMenu = document.getElementById('mobileMenu')

        //If it is Hidden Add it, remove it
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden')
        }
    }
    const navigate = useNavigate();
    return (
        <header className='flex justify-between items-center py-4 px-4 lg:px-20 border-b border-purple-700'>

            <h1 data-aos='fade-down' data-aos-easing='linear' data-aos-duration='1500' onClick={() => navigate('/')} className='text-xl md:text-xl lg:text-2xl m-0 bg-gradient-to-bl from-purple-700 to-blue-700 p-1 hover:scale-105 cursor-pointer duration-500 transition-all font-semibold border border-purple-500' >
                <i>Aee-Jay</i><span className='bg-black text-fuchsia-700 rounded-md'><span className='text-black'>.</span>3D<span className='text-black'>.</span></span>
            </h1>

            {/* Navigation Desktop */}
            <nav className='hidden lg-block md-block lg:flex lg:gap-12 md:flex md:gap-8 items-center'>
                <a data-aos='fade-down' data-aos-easing='linear' data-aos-duration='1000' className='text-base tracking-wider transition-colors hover:text-blue-600 hover:animate-bounce hover:underline duration-[1500ms] z-50' href='/services'>Services</a>
                <a data-aos='fade-down' data-aos-easing='linear' data-aos-duration='1500' className='text-base tracking-wider transition-colors hover:text-blue-600 hover:animate-bounce hover:underline duration-[1500ms] z-50' href='/about'>About</a>
                <a data-aos='fade-down' data-aos-easing='linear' data-aos-duration='2000' className='text-base tracking-wider transition-colors hover:text-blue-600 hover:animate-bounce hover:underline duration-[1500ms] z-50' href='/features'>Features</a>
                <a data-aos='fade-down' data-aos-easing='linear' data-aos-duration='2500' className='text-base tracking-wider transition-colors hover:text-blue-600 hover:animate-bounce hover:underline duration-[1500ms] z-50' href='/developer'>Developer</a>
            </nav>
            <button className='hidden lg:block md:block bg-sky-600 text-black px-10 py-2 rounded-full font-medium transition-all duration-500 hover:scale-x-105 hover:bg-sky-700 cursor-pointer z-50 hover:font-semibold hover:text-gray-300' onClick={() => navigate('/signIn')}>SignIn</button>

            {/* Mobile View */}
            <button className='lg:hidden md:hidden sm:block md:text-3xl sm:text-2xl p-2 z-50'>
                <i class='bx bx-menu' onClick={showMobileMenu}></i>
            </button>

            {/* Mobile Menu */}
            <div id='mobileMenu' className='hidden fixed max-h-fit p-2 bottom-0 right-0 left-0 top-16 md:hidden z-40'>
                <nav className='flex flex-col gap-6 items-center bg-black bg-opacity-100 backdrop-blur- md'>
                    <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href='/services'>Services</a>
                    <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href='/about'>About</a>
                    <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href='/features'>Features</a>
                    <a className='text-base tracking-wider transition-colors hover:text-gray-300 z-50' href='/developer'>Developer</a>
                </nav>
            </div>
        </header>
    )
}

export default Header
