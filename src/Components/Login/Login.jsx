import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { loginEmailPassword } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        loginEmailPassword(email, password)
            .then(() => {
                toast.success('Successfully Login')
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                }, 1000);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }

    return (
        <div className="flex justify-center py-28 bg-cover bg-[url('https://i.ibb.co/Rgn45Mg/kahl-orr-E36kv-Vnj-OBk-unsplash-1.jpg')]">
            <div className="border-2 w-[80%] lg:w-[40%] p-3 lg:p-5 rounded-md backdrop-blur-lg">
                <h1 className="text-4xl font-bold text-center my-7 text-white">Please login</h1>
                <form onSubmit={handleLogin}>
                    <input className="px-3 py-3 mb-4 rounded-md w-full" placeholder="Your email" type="email" name="email" id="3" /> <br />
                    <input className="px-3 py-3 mb-4 rounded-md w-full" placeholder="Your password" type="password" name="password" id="5" /> <br />
                    <input className="border px-3 py-2 mb-4 rounded-md cursor-pointer bg-[#3F72AF] text-white " type="submit" value='Login' name="" id="6" />
                </form>
                <p className="text-white mb-3">Do you have account <Link className='text-blue-400 underline font-semibold' to='/register'>Please Register</Link></p><hr />
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;