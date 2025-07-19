import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { isAuthenticated, setIsAuthenticated } = useAuth();

    const navigate = useNavigate();

    const loginUser = (event) => {
        event.preventDefault();
        const loginData = {email, password};

        axios.post('http://localhost:8081/auth/login', loginData)
            .then((res) => {
                const token = res.data;
                localStorage.setItem('token', token);
                alert("Login Done"); // Change this using react-toastify or react-hot-toast
                setIsAuthenticated(true);
                navigate("/");
            })
            .catch((e) => {
                console.log('Error while login :' + e);
                alert("Login Failed");
            })
    };

    return (
        <div className="hero min-h-[92vh] bg-base-300">
            <div className="hero-content flex-col lg:flex-row-reverse gap-12">

                <div className="text-center lg:text-left max-w-md">
                    <h1 className="text-7xl font-bold mb-4 leading-tight tracking-wide">Welcome Back!</h1>
                    <p className="text-lg text-base-content/70">
                        Log in to your account to access exclusive deals and manage your bookings. Fast, secure, and reliable.
                    </p>
                </div>

                <div className="card w-full max-w-sm bg-base-100 shadow-2xl">

                    <form className="card-body" onSubmit={loginUser}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary w-full">
                                Login
                            </button>
                        </div>

                        <div className="divider">OR</div>

                        <div className="text-center">
                            <span className="text-sm text-base-content/70">
                                Don't have an account?
                            </span>{' '}
                            <a href="/register" className="text-primary font-semibold hover:underline">
                                Register
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Login