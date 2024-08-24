'use client';
import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="min-h-screen bg-yellow-200 -500 -200">
            {/* Navigation Bar */}
            <div className="bg-white-400 p-4 flex justify-between items-center">
                <div className="text-black font-extrabold text-4xl ml-8">
                    <span className="text-blue-500">C</span>
                    <span className="text-blue-500">u</span>
                    <span className="text-blue-500">s</span>
                    <span className="text-yellow-500">t</span>
                    <span className="text-blue-500">M</span>
                    <span className="text-yellow-500">e</span>
                </div>
                <div className="flex justify-end items-center">
                    <div className="bg-amber-100 rounded text-black ml-3 font-semibold px-2 py-2">Home</div>
                    <div className="bg-amber-100 rounded text-black ml-3 font-semibold px-2 py-2">About</div>
                    <div className="bg-amber-100 rounded text-black ml-3 font-semibold px-2 py-2">Services</div>
                </div>
            </div>

            {/* Login Form */}
            <div className="flex justify-center items-center h-screen">
                <div className="bg-black shadow-md rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Sign in to your account</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username" className="block font-medium text-gray-700 mb-2">Username:</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block font-medium text-gray-700 mb-2">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Login
                        </button>
                    </form>
                    <div className="mt-4 text-center">
                        <a href="#" className="text-indigo-600 hover:text-indigo-700">Forgot password?</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;