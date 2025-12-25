import React, { useState } from 'react'
import loginicons from '../assets/ProfileIcon.gif';
import { Link, useNavigate } from 'react-router';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [data, setData] = useState({
        email: "",
        password: "",
        name: "",
        confirmpassword: "",
        profilePicture: ""
    })
    const navigate = useNavigate()

    const handleOnChange = (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

    const handlePicture = async (e) => {
        const file = e.target.files[0]

        const Pic = await picto64(file)
        setData((preve) => {
            return {
                ...preve,
                profilePicture: Pic
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    return (
        <section id='signup' data-aos='fade-center' data-aos-offset='300' data-aos-easing='ease-in-sine'>
            <div className='p-1 mx-auto flex justify-center bg-gradient-to-br from-fuchsia-600 to-blue-600 my-5 items-center w-fit h-fit shadow-sm shadow-purple-500'>
                <div className='bg-black p-5 rounded-lg' >
                    <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full transition-all duration-500 hover:scale-105 '>
                        <div>
                            <img src={data.profilePicture || loginicons} alt='login icons' />
                        </div>

                        <form>
                            <label>
                                <div className='text-[10px] bg-gradient-to-tr from-slate-600 to-purple-600 bg-opacity-40 py-2 cursor-pointer text-center absolute bottom-0 w-full'>
                                    Upload Image
                                </div>
                                <input type='file' className='hidden' onChange={handlePicture} />
                            </label>
                        </form>
                    </div>
                    <div className='mt-8'>
                        <form>
                            <div className='grid mx-auto items-center'>
                                <div>
                                    <label>Name :</label>
                                    <div className=''>
                                        <input type='text' placeholder='John Doe' className='w-72 h-8 p-0.5 rounded-sm border border-fuchsia-600 bg-gray-700'></input>
                                    </div>
                                </div>
                                <div className='mt-1'>
                                    <label>Email :</label>
                                    <div className=''>
                                        <input type='email' placeholder='johndoe@gmail.com' className='w-72 h-8 p-0.5 rounded-sm border border-fuchsia-600 bg-gray-700'></input>
                                    </div>
                                </div>
                                <div className='mt-1'>
                                    <label>Password :</label>
                                    <div className=''>
                                        <input type='password' placeholder='Password' className='w-72 h-8 p-0.5 rounded-sm border border-fuchsia-600 bg-gray-700'></input>
                                    </div>
                                    <label>Confirm Password :</label>
                                    <div className=''>
                                        <input type='password' placeholder='Confirm Password' className='w-72 h-8 p-0.5 rounded-sm border border-fuchsia-600 bg-gray-700 focus-within:border focus-within:border-fuchsia-600'></input>
                                    </div>
                                </div>
                                <button className='bg-sky-600 w-full rounded-full max-w-fit mx-auto px-10 py-2 mt-5'>Create Account</button>
                                <div className='flex justify-center my-5'>
                                    <p>Already have an account? <Link to={'/signIn'} className='text-blue-500 hover:text-blue-700 hover:underline'>SignIn</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default SignUp
