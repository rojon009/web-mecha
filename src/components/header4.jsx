import NavLinks from './navLink'
const Header = (props) => {


    return (
        <div className="sticky top-0">
            <div className="bg-gray-900 h-16 text-white text-xl flex justify-between items-center px-5 shadow-lg ">
                <div className="logo">Mechanical <span className="bg-white font-bold text-black py-2 px-1">Engineering</span></div>
                <div className="nav-bar">
                    <ul className="flex divide-x-2 divide-white divide-opacity-70">
                        <NavLinks {...props} p="/">HOME</NavLinks>
                        <NavLinks {...props} p='/academics'>ACADEMICS</NavLinks>
                        <NavLinks {...props} p='/notice'>NOTICE</NavLinks>
                        <NavLinks {...props} p="/events">EVENTS</NavLinks>
                        <NavLinks {...props} p='/alumni'>ALUMNI</NavLinks>

                    </ul>
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

        </div>
    )
}

export default Header