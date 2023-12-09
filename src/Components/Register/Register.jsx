import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [errorMassage, setErrorMassage] = useState()
    const navigate = useNavigate()
    const { registerEmailPassword, updateUser, googleLogin } = useContext(AuthContext)
    const location = useLocation()

    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const img = e.target.img.value
        const email = e.target.email.value
        const password = e.target.password.value

        if (password.length < 6) {
            return setErrorMassage('Password is less than 6 characters')
        }
        else if (!/[A-Z]/.test(password)) {
            return setErrorMassage('Password have a minimum one capital letter')
        }
        else if (!/[@#$%^&]/.test(password)) {
            return setErrorMassage('Password have a minimum one special character')
        }
        else (
            registerEmailPassword(email, password)
                .then(() => {
                    setErrorMassage('')
                    toast.success('Successfully Login!')
                    setTimeout(() => {
                        navigate('/');
                        updateUser(name, img)
                            .then(() => console.log('success update user'))
                            .catch(error => console.log(error.massage))
                    }, 1000);

                    setTimeout(() => {
                        navigate(location?.state ? location.state : '/');
                    }, 1000);

                })
                .catch(error => {
                    setErrorMassage('Already created account by using this email')
                })

        )

    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(console.log('successfully google login'))
            .catch(error => console.log(error.massage));
    }



    return (
        <div className="flex justify-center py-14 bg-cover bg-[url('https://i.ibb.co/5kQJ7jx/philipp-katzenberger-qc-Pcgx-KJPpo-unsplash-1.jpg')]">
            <div className="border-2 w-[90%] lg:w-[40%] p-3 lg:p-5 rounded-md backdrop-blur-lg">
                <h1 className="text-4xl font-bold my-7 text-center text-white">Please Register</h1>
                <form onSubmit={handleRegister}>
                    <input className="px-3 py-3 mb-4 rounded-md w-full" placeholder="Your Name" type="text" name="name" id="1" required /> <br />
                    <input className="px-3 py-3 mb-4 rounded-md w-full" placeholder="Profile image link" type="text" name="img" id="2" /> <br />
                    <input className="px-3 py-3 mb-4 rounded-md w-full" placeholder="Your email" type="email" name="email" id="3" required /> <br />
                    <input className="px-3 py-3 mb-4 rounded-md w-full" placeholder="Your password" type="password" name="password" id="4" required /> <br />
                    <input className="border px-3 py-2 mb-4 rounded-md cursor-pointer bg-[#3F72AF] text-white " type="submit" value='Register' name="" id="6" />
                </form>
                <p className="text-red-600 font-semibold">{errorMassage}</p>
                <p className="text-white mb-3">Do you have account <Link className='text-blue-400 underline font-semibold' to='/login'>Please Login</Link></p><hr />
                <div className="mt-3">
                    <h3 className="text-white font-medium text-lg my-2">Continue with</h3>
                    <button onClick={handleGoogleLogin} className="px-3 py-2 bg-blue-500 text-white rounded-md font-semibold mr-4">Google</button>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Register;