import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { isAuthenticated, setIsAuthenticated } = useAuth();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token); // if else statement like if token !null then true else false
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        navigate('/');
    };

    return (
        <div className="navbar bg-base-100 sticky top-0 z-50 shadow-md">
            <div className="navbar-start">
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link to="/" className='hover:bg-primary hover:text-primary-content'>Homepage</Link></li>
                        <li><a href="/#services" className="hover:bg-primary hover:text-primary-content">Services</a></li>
                        <li><Link to="/vehicles" className='hover:bg-primary hover:text-primary-content'>Vehicles</Link></li>
                        <li><Link to="/reviews" className='hover:bg-primary hover:text-primary-content'>Reviews</Link></li>
                    </ul>
                </div>
            </div>

            <div className="navbar-center">
                <a className="btn btn-ghost text-3xl font-bold tracking-widest" onClick={() => navigate("/")}>Road Ready</a>
            </div>

            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost m-1">
                        Theme
                        <svg
                            width="12px"
                            height="12px"
                            className="inline-block h-2 w-2 fill-current opacity-60"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 2048 2048">
                            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                        </svg>
                    </div>
                    <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
                        {['cupcake', 'corporate', 'business', 'sunset'].map((theme) => (
                            <li key={theme}>
                                <input
                                    type="radio"
                                    name="theme-dropdown"
                                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                    aria-label={theme}
                                    value={theme}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                <button onClick={() => navigate('/vehicles')} className="btn btn-accent btn-outline m-1">
                    Explore Now
                </button>

                {isAuthenticated ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.75"
                                stroke="currentColor"
                                className="size-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to="/dashboard" className="hover:bg-primary hover:text-primary-content">Dashboard</Link></li>
                            <li><button onClick={handleLogout} className="hover:bg-primary hover:text-primary-content">Logout</button></li>
                        </ul>
                    </div>
                ) : (
                    <button onClick={() => navigate('/login')} className="btn btn-outline btn-primary ml-2">
                        Login
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;