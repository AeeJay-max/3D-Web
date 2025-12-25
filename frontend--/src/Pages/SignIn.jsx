import React from 'react'
import loginicons from '../assets/ProfileIcon.gif';
import { Link } from 'react-router';

const SignIn = () => {
    return (
        <section id='login' data-aos='fade-center' data-aos-offset='300' data-aos-easing='ease-in-sine'>
            <div className='p-1 mx-auto flex justify-center bg-gradient-to-br from-fuchsia-600 to-blue-600 my-5 items-center w-fit h-fit shadow-sm shadow-purple-500'>
                <div className='bg-black p-5 rounded-lg' >
                    <div className="w-20 h-20 mx-auto">
                        <img src={loginicons} alt="login icons" className="rounded-full " />
                    </div>
                    <div className='mt-8'>
                        <form>
                            <div className='grid mx-auto items-center'>
                                <div>
                                    <label>Email :</label>
                                    <div className=''>
                                        <input type='email' placeholder='johndoe@gmail.com' className='w-72 h-8 p-0.5 rounded-sm border border-fuchsia-600 bg-gray-700'></input>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <label>Password :</label>
                                    <div className=''>
                                        <input type='password' placeholder='Password' className='w-72 h-8 p-0.5 rounded-sm border border-fuchsia-600 bg-gray-700'></input>
                                    </div>
                                </div>
                                <div className='flex ml-40 mt-0.5'>
                                    <p><Link to={'/forgot-password'} className='text-blue-500 hover:text-blue-700 hover:underline'>Forgot Password?</Link></p>
                                </div>
                                
                                <button className='bg-sky-600 w-full rounded-full max-w-[150px] mx-auto px-10 py-1 mt-5'>LogIn</button>
                                <div className='flex justify-center my-5'>
                                    <p>Don't have an account? <Link to={'/signup'} className='text-blue-500 hover:text-blue-700 hover:underline'>SignUp</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default SignIn
