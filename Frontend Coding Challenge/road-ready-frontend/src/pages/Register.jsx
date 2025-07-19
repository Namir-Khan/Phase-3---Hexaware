import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [role, setRole] = useState('USER');

    const navigate = useNavigate();

    const registerUser = (event) => {
        event.preventDefault();
        const createdAt = new Date().toISOString().split('T')[0];
        const registerData = {firstName, lastName, email, password, phoneNumber, role, createdAt};

        axios.post('http://localhost:8081/auth/register', registerData)
            .then((res) => {
                alert(res.data);
                navigate('/');
            })
            .catch((e) => {
                console.log("Error while register :" + e);
                alert("Register Failed");
            });
    };

    return (
        <div className="min-h-[92vh] bg-base-300 flex">
            <div className="w-full lg:w-1/2 flex items-center justify-center p-10">
                <div className="max-w-md text-center lg:text-left">
                    <h1 className="text-7xl font-bold mb-4 leading-tight tracking-wide">Join Us Today!</h1>
                    <p className="text-lg text-base-content/70">
                        Create your account to start booking your dream car with ease. It's quick, secure, and totally free!
                    </p>
                </div>
            </div>

            <div className="w-full lg:w-1/2 bg-base-100 flex items-center justify-center px-6 py-10">
                <form className="w-full max-w-lg space-y-4" onSubmit={registerUser}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Enter your first name"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Enter your last name"
                            className="input input-bordered"
                            required
                        />
                    </div>

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
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="Enter your phone number"
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
                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary w-full mt-4">Register</button>
                    </div>

                    <div className="divider">OR</div>

                    <div className="text-center">
                        <span className="text-sm text-base-content/70">Already have an account?</span>{' '}
                        <a href="/login" className="text-primary font-semibold hover:underline">Login</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register