import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Main() {

    const navigate = useNavigate();

    return (
        <div className="m-20 text-white flex justify-center items-center max-lg:flex-col">
            <div className="lg:w-1/2">
                <h1 className="text-4xl font-bold mb-8">Welcome to Our Website</h1>
                <p className="text-lg mb-8">
                    We have exciting challenges for you to take on. Contribute and join
                    our community!
                </p>
                <button className="bg-purple-600 px-4 py-2 rounded-md font-semibold hover:bg-purple-700"
                onClick={() => navigate('/challenges')}>
                    Get Started
                </button>
            </div>
            <div className="lg:w-1/2 max-lg:mt-5">
                <img
                    className="rounded-lg"
                    src="https://media.nature.com/lw800/magazine-assets/d41586-019-00653-5/d41586-019-00653-5_16459152.jpg"
                    alt="coding"
                />
            </div>
        </div>
    );
}
