import React, {useEffect} from 'react'
import Hero from '../Compmnents/Hero'
import Gadient from '../assets/gradient.png'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(()=>{
        AOS.init({
            duration : 1500,
            once : true,
        })
    },[])
    return (
        <div>
            {/* Gradient Image */}
            <img className='absolute top-0 right-0 opacity-60 -z-10' src={Gadient} alt='Gradient-img' />

            {/* Blur Effect */}
            <div className='h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px] shadow-blue-600 -rotate-[30deg] -z-10'></div>
            <Hero />
        </div>
    )
}

export default Home
