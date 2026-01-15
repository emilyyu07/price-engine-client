import {useState} from "react";

function Navbar(){
    const [darkMode, setDarkMode]=useState(false);
    return(
        <nav className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
                {/* Search Bar */}
                <div className="hidden md:flex flex-1 max-w-md relative">
                    <input 
                        type="text"
                        placeholder="Search products"
                        className="w-full bg-gray-100 dark:bg-gray-800 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"/>

                        <div className="absolute left-3 top-2.5 text-gray-400">
                            {/*insert search icon */}
                        </div>

                        <div className="flex items-center gap-3">
                            {/* Dark Mode Toggle */}
                            <button 
                            onClick={()=> setDarkMode(!darkMode)}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                            > {darkMode ? '🌙' : '☀️'} </button>

                            {/* Login Button */}
                            <button className="text-sm font-smibold text-gray-700 dark:text-gray-200 hover:text-pink-600 transition">
                                Login
                            </button>
                        </div>

                </div>
            </div>
        </nav>
    )

}

export default Navbar;