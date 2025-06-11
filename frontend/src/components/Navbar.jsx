// Navbar.jsx

"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="container flex items-center justify-between py-4 mx-auto">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold text-red-600">VidioNotes</h1>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden space-x-8 md:flex">
                    <a href="#features" className="text-gray-600 hover:text-red-600">
                        Features
                    </a>
                    <a href="#how-it-works" className="text-gray-600 hover:text-red-600">
                        How It Works
                    </a>
                    <a href="#use-cases" className="text-gray-600 hover:text-red-600">
                        Use Cases
                    </a>
                    <a href="#testimonials" className="text-gray-600 hover:text-red-600">
                        Testimonials
                    </a>
                    <a
                        href="/login"
                        className="text-gray-700 hover:text-red-600 "
                    >
                        Login
                    </a>
                    <a
                        href="/signup"
                        className="bg-red-600 text-white hover:bg-red-700 py-2 px-2 rounded-md"
                    >
                        Sign Up
                    </a>

                </div>

                <div className="hidden md:block">


                    <button className="bg-red-600 text-white hover:bg-red-700 py-2 px-4 rounded-md">
                        Add to Chrome
                    </button>
                </div>

                {/* Mobile menu button */}
                <button
                    className="p-2 md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="px-4 py-2 space-y-3 md:hidden">
                    <a
                        href="#features"
                        className="block py-2 text-gray-600 hover:text-red-600"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Features
                    </a>
                    <a
                        href="#how-it-works"
                        className="block py-2 text-gray-600 hover:text-red-600"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        How It Works
                    </a>
                    <a
                        href="#use-cases"
                        className="block py-2 text-gray-600 hover:text-red-600"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Use Cases
                    </a>
                    <a
                        href="#testimonials"
                        className="block py-2 text-gray-600 hover:text-red-600"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Testimonials
                    </a>
                    <a
                        href="/login"
                        className="block py-2 text-gray-600 hover:text-red-600"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Login
                    </a>
                    <a
                        href="/signup"
                        className="block py-2 bg-red-600 text-white hover:bg-red-700 rounded-md"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Sign Up
                    </a>

                    <div className="py-2">
                        <button className="w-full bg-red-600 text-white hover:bg-red-700 py-2 px-4 rounded-md">
                            Add to Chrome
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
