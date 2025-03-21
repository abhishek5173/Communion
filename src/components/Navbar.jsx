import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="h-14 w-full bg-white shadow-md">
            <div className="flex justify-between items-center px-8 h-full">
                <Link to="/" className="text-3xl font-bold text-green-600">
                    Communion
                </Link>

                <div className="hidden lg:flex gap-8">
                    <Link
                        to="/"
                        className="text-lg font-medium text-green-600 hover:text-green-800 transition"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="text-lg font-medium text-green-600 hover:text-green-800 transition"
                    >
                        About
                    </Link>
                    <Link
                        to="/events"
                        className="text-lg font-medium text-green-600 hover:text-green-800 transition"
                    >
                        Events
                    </Link>
                </div>

                <button
                    className="lg:hidden text-green-600 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                </button>
            </div>

            {isOpen && (
                <div className="lg:hidden flex flex-col gap-6 p-6 bg-white shadow-md absolute w-full left-0 top-16 z-50">
                    <Link
                        to="/"
                        className="text-lg font-medium text-green-600 hover:text-green-800 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="text-lg font-medium text-green-600 hover:text-green-800 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        to="/events"
                        className="text-lg font-medium text-green-600 hover:text-green-800 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Events
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
