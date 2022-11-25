import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import logo from '../img/logo.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOn, setIsMenuOn] = useState(false);
    const menuChange = e => {
        setIsMenuOn(e.target.checked)
    }
    const pages = [
        { name: "Home", to: '/' },
        { name: "All Categories", to: '/allcategories' },
        { name: "Services", to: '/home' },
        { name: "Pricing", to: '/home' },
        { name: "Contact", to: '/home' }
    ]
    return (
        <div className='sticky top-0 z-30'>
            {/* <!-- component --> */}
            <div className="">
                <nav className="relative px-4 py-4 flex justify-between items-center bg-teal-300">

                    {/*   mobile menu button   */}
                    <div className="lg:hidden">
                        <label className="btn btn-circle btn-sm swap swap-rotate border-none">
                            <input type="checkbox" className='bg-green-400' onChange={menuChange} checked={isMenuOn} />
                            <svg className="swap-off fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                            <svg className="swap-on fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                        </label>
                    </div>





                    <a className="text-3xl font-bold leading-none" href="/">
                        {/* logo */}
                        <img src={logo} className="h-10" alt="" />
                    </a>


                    {/*   profile and settings button for mobile  */}


                    <div className="lg:hidden">
                        {user?.uid ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {user?.photoURL ?

                                            <img
                                                src={user.photoURL}
                                                alt="UserImage"
                                            />
                                            :
                                            <img
                                                src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
                                                alt="UserImage"
                                            />
                                        }
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a href='/' className="justify-between">
                                            Profile
                                        </a>
                                    </li>
                                    <li><a href='/'>Settings</a></li>
                                    <li><Link onClick={logOut} href='/'>Logout</Link></li>
                                </ul>
                            </div> :
                            <Link to={'/login'} className="py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200" href="/">Sign In</Link>}
                    </div>




                    {/*     md , lg , xl display menu     */}
                    <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
                        {
                            pages.map((page, i) => <li key={i} className="mb-1">
                                <Link className="text-sm text-white font-bold hover:text-gray-500" to={page.to}>{page.name}</Link>
                            </li>)
                        }
                    </ul>

                    {/* sign in and sign up for lg screen */}
                    {
                        !user?.uid ?
                            <>
                                <Link to={'/login'} className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200" >Sign In</Link>
                                <Link to={'/signup'} className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" >Sign up</Link>
                            </>

                            // {/* profile and setting for the lg screen */}
                            :
                            <button className="hidden lg:inline-block w-10 h-10 mr-3">
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            {user?.photoURL ?

                                                <img
                                                    src={user.photoURL}
                                                    alt="UserImage"
                                                />
                                                :
                                                <img
                                                    src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
                                                    alt="UserImage"
                                                />
                                            }
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <a href='/' className="justify-between">
                                                Profile
                                            </a>
                                        </li>
                                        <li><a href='/'>Settings</a></li>
                                        <li><Link onClick={logOut}>Logout</Link></li>
                                    </ul>
                                </div>
                            </button>
                    }
                </nav>


                {/* mobile display menus */}
                <div className={`relative z-50 ${isMenuOn ? 'block' : 'hidden'} `}>
                    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                        <div className="flex items-center mb-8">


                            {/* logo for the menu btn */}
                            <a className="mr-auto text-3xl font-bold leading-none" href="/">
                                <img src={logo} className="h-12" alt="" />
                            </a>

                            {/* navbar close button */}
                            <button onClick={() => { setIsMenuOn(!isMenuOn) }} >
                                <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>


                        </div>
                        <div>
                            <ul>


                                {
                                    pages.map((page, i) => <li key={i} className="mb-1">
                                        <Link onClick={() => { setIsMenuOn(!isMenuOn) }} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" to={page.to}>{page.name}</Link>
                                    </li>)
                                }
                            </ul>
                        </div>
                        {user?.uid ? <></> :
                            <div className="mt-auto">
                                <div className="pt-6">
                                    <Link onClick={() => { setIsMenuOn(!isMenuOn) }} className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl" to="/login">Sign in</Link>
                                    <Link onClick={() => { setIsMenuOn(!isMenuOn) }} className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-secondary hover:bg-secondary-focus  rounded-xl" to="/signup">Sign Up</Link>
                                </div>

                            </div>}
                    </nav>
                </div>
            </div>
        </div >
    );
};

export default Navbar;