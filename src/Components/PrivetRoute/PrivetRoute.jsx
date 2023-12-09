import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user, spiner} = useContext(AuthContext)
    const location = useLocation()
    if(spiner){
        return (
            <div className='flex justify-center items-center'>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        )
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivetRoute;