import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(toast.success('Successfully Logout'))
    }


    return (
        <div>
            <div className="hidden lg:block">
                <div className="flex justify-between items-center mx-20 shadow-b-lg">
                    <div className="flex items-center">
                        <img className="w-[80px] mr-3" src="https://i.ibb.co/BKnkRHV/logo.png" alt="" />
                        <h1 className="text-2xl font-extrabold">TurboTrade</h1>
                    </div>
                    <div className="flex gap-x-6">
                        <NavLink className='py-2 px-3 font-bold' to='/'>Home</NavLink>
                        <NavLink className='py-2 px-3 font-bold' to='/addProduct'>Add Product</NavLink>
                        <NavLink className='py-2 px-3 font-bold' to='/myCart'>My cart</NavLink>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <p className="text-lg font-bold">{user?.displayName}</p>
                        <img className="w-[50px] rounded-xl" src={user?.photoURL} alt="" />
                        {
                            user ? <button onClick={handleLogout} className="text-xl font-bold py-2 px-3 bg-[#80B3FF] text-white rounded-lg">Logout</button> : <Link to='/login'><button className="text-xl font-bold py-2 px-3 bg-[#80B3FF] text-white rounded-lg">Login</button></Link>
                        }
                    </div>
                </div>
            </div>
            <div className="block md:hidden lg:hidden">

                <div className=" mx-5 shadow-b-lg">
                    <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center">
                            <img className="w-[80px] mr-3" src="https://i.ibb.co/BKnkRHV/logo.png" alt="" />
                            <h1 className="text-2xl font-extrabold">TurboTrade</h1>
                        </div>
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content ml-[-200px] mt-3 z-[1] py-4 shadow bg-slate-200 rounded-box w-[250px]">
                                <div className="">
                                    <div className="">
                                        <div>
                                            {
                                                user ? <img className="w-[50px] mx-auto rounded-xl" src={user?.photoURL} alt="" /> : <img className="w-[50px] my-5 rounded-full" src="https://i.ibb.co/7KSVcW1/user.png" />
                                            }
                                            {
                                                user ? <p className="text-lg text-center my-2 font-bold">{user?.displayName}</p> : ''
                                            }
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        {
                                            user ? <button onClick={handleLogout} className="text-xl font-bold py-2 px-3 bg-[#80B3FF] text-white rounded-lg">Logout</button> : <Link to='/login'><button className="text-xl font-bold py-2 px-3 bg-[#80B3FF] text-white rounded-lg">Login</button></Link>
                                        }
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-center mb-3">
                        <div className="flex gap-x-2">
                            <NavLink className='py-2 px-3 font-bold' to='/'>Home</NavLink>
                            <NavLink className='py-2 px-3 font-bold' to='/addProduct'>Add Product</NavLink>
                            <NavLink className='py-2 px-3 font-bold' to='/myCart'>My cart</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Navbar;