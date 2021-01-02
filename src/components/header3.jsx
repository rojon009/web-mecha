import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom"
const Header3 = () => {
    const [state, setstate] = useState(true);
    return (
        <div className="sticky top-0">
            <div className="bg-gray-900 h-16 text-white text-xl flex justify-between items-center px-5 shadow-lg ">
                <Link to="/" className="logo">Mechanical <span className="bg-white font-bold text-black py-2 px-1">Engineering</span></Link>

                <div className="relative">
                    <div className="nav-bar absolute bg-gray-900  right-0 top-12">

                        {
                            !state && (<div className="p-6 border-2"><ul className="flex flex-col divide-y-2 divide-white divide-opacity-70">
                                <NavLink className="px-2 py-2 relative flex flex-col items-center hover:text-blue-600" exact to="/" activeClassName="active">HOME</NavLink>
                                <NavLink className="px-2 py-2 relative flex flex-col items-center hover:text-blue-600" exact to="/academics" activeClassName="active">ACADEMICS</NavLink>
                                <NavLink className="px-2 py-2 relative flex flex-col items-center hover:text-blue-600" exact to="/notice" activeClassName="active">NOTICE</NavLink>
                                <NavLink className="px-2 py-2 relative flex flex-col items-center hover:text-blue-600" exact to="/events" activeClassName="active">EVENTS</NavLink>
                                <NavLink className="px-2 py-2 relative flex flex-col items-center hover:text-blue-600" exact to="/alumni" activeClassName="active">ALUMNI</NavLink>
                            </ul></div>)
                        }


                    </div>
                    <div onClick={() => setstate(!state)} className="border-2 rounded-md hover:border-blue-600 cursor-pointer md:hidden">
                        {
                            state ? (<svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>) : (<svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>)
                        }

                    </div>
                </div>

                {/* <div className="serach-login flex items-center text-gray-300">
                <div className="max-w-xs w-full relative  focus-within:text-blue-400">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </span>
                    <input className="block w-full rounded-full pl-12 pr-5 py-1 text-lg border-2 border-transparent bg-gray-700 focus:border-blue-400 outline-none" />
                </div>
                <div className="ml-2" >
                    <svg className="hover:text-blue-400 transition-colors w-8 h-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                </div>
            </div> */}
            </div>

        </div >
    )
}

export default Header3