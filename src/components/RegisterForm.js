import React, { useRef } from 'react'
import { toast } from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { hideLoading, showLoading } from '../redux/alertsSlice';

export default function RegisterForm() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();
    const dispatch = useDispatch();
	const navigate = useNavigate();
    
    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const data = {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passRef.current.value,
            }
            dispatch(showLoading());
            const response = await axios.post('/user/register', data);
            console.log(response);
            dispatch(hideLoading());
            if (response.data.success) {
                toast.success(response.data.message);
                navigate("/login");
            } else {
                console.log(response.data);
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Something went wrong");
        }

    }

    return (
        <div className="container mx-auto py-8 absolute top-24 right-20">
            <div className="max-w-md mx-auto bg-opacity-100 shadow-2xl rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                    <h2 className="text-2xl font-semibold mb-4">Register</h2>
                    <form onSubmit={submitHandler}>
                        <div className="mb-4">
                            <label className="block text-dark-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-dark-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Your Name"
                                ref={nameRef}
                                required
                            />
                        </div>
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
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
