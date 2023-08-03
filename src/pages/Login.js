import React, { useRef } from 'react';
import { toast } from "react-hot-toast";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {

    const URL = process.env.REACT_APP_BACKEND_API;
    const emailRef = useRef();
    const passRef = useRef();
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const data = {
                email: emailRef.current.value,
                password: passRef.current.value,
            }
            const response = await axios.post(`${URL}/user/login`, data);
            if (response.data.success) {
                toast.success(response.data.message);
                localStorage.setItem("token",response.data.data)
                navigate("/");
            } else {
                console.log(response.data);
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Something went wrong");
        }

    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 flex items-center">
            <div className="mx-auto w-[100%]">
                <div className="max-w-md mx-auto bg-opacity-100 shadow-2xl rounded-lg overflow-hidden">
                    <div className="px-6 py-4">
                        <h2 className="text-2xl font-semibold mb-4">Login</h2>
                        <form onSubmit={submitHandler}>
                            <div className="mb-4">
                                <label className="block text-dark-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-dark-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Your Email"
                                    ref={emailRef}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-dark-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-dark-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="Your Password"
                                    ref={passRef}
                                    required
                                />
                            </div>
                            <button
                                className="bg-purple-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-purple-700"
                                type="submit"
                            >
                                Login
                            </button>
                        </form>
                        <p className='text-gray-600 pt-2'>
                            Don't have an account?
                        </p>
                        <Link to='/register' className='text-gray-800'>Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
