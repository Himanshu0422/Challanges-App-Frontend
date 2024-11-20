import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

export default function Main() {
    const navigate = useNavigate();

    useEffect(() => {
        gsap.fromTo(
            ".welcome-text",
            { opacity: 0, y: -30 },
            { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
        );
        gsap.fromTo(
            ".welcome-img",
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 1.5, delay: 0.5, ease: "power3.out" }
        );
    }, []);

    return (
        <main className="text-white flex justify-center items-center max-lg:flex-col mx-10 min-h-[calc(100vh-6rem)]">
            <div className="lg:w-1/2 welcome-text">
                <h1 className="text-5xl font-bold mb-8">Welcome to Our Website</h1>
                <p className="text-lg mb-8">
                    We have exciting challenges for you to take on. Contribute and join
                    our community!
                </p>
                <button
                    className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-md font-semibold hover:scale-105 transition-transform"
                    onClick={() => navigate('/challenges')}
                >
                    Get Started
                </button>
            </div>
            <div className="lg:w-1/2 max-lg:mt-5 welcome-img">
                <img
                    className="rounded-lg shadow-md hover:shadow-xl transition-shadow"
                    src="https://media.nature.com/lw800/magazine-assets/d41586-019-00653-5/d41586-019-00653-5_16459152.jpg"
                    alt="coding"
                />
            </div>
        </main>
    );
}
