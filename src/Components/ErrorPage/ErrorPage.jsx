import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center'>
            <div>
                <img className='w-[800px] mt-[-50px] ' src="https://i.ibb.co/Qf2pQp5/dribbble-1.gif" alt="" />
                <h1 className="text-5xl text-center font-bold mt-[-50px] lg:mt-[-100px]">Oops Data not fount!</h1>
                <div className='flex justify-center my-5'>
                    <Link to="/"><button className='text-lg font-bold px-4 py-2 bg-blue-400 rounded-lg text-white'>Go Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;