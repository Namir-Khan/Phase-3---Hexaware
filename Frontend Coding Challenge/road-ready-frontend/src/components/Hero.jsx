import React from 'react'
import heroBg from '../assets/hero-bg.jpg';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    return (
        <div
            className="hero min-h-[92vh]"
            style={{
                backgroundImage: `url(${heroBg})`,
            }}>
            <div className="hero-overlay bg-opacity-60 backdrop-blur-sm"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-3xl transform transition duration-500 hover:scale-[1.01]">
                    <h1 className="mb-5 text-7xl font-bold leading-tight tracking-wide">Rent Your Dream Car <br /> Easily and Affordably</h1>
                    <p className="mb-5 text-lg">
                        Choose from a wide range of vehicles with unbeatable prices. Safe, reliable, and hassle free rentals at your fingertips.
                    </p>

                    <div className="flex justify-center gap-4 mt-4">
                        <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={() => navigate('/vehicles')}>
                            Get Started
                        </button>
                        <button className="btn btn-outline btn-secondary btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={() => navigate('/login')}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero