import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import swal from 'sweetalert';

const CarDetails = () => {
    const { id } = useParams()
    const [carDetailsData, setCarDetailsData] = useState()

    useEffect(() => {
        fetch(`https://a-ten-backend.vercel.app/details/${id}`)
            .then(res => res.json())
            .then(data => setCarDetailsData(data))
    }, [])

    return (
        <div>
            <h1 className='text-4xl text-center font-bold my-10'>Car Details</h1>
            <div>
                {
                    carDetailsData?.map(data => <Details key={data._id} data={data}></Details>)
                }
            </div>
        </div>
    );
};

export default CarDetails;


const Details = ({ data }) => {
    const { _id, name, image, price, brand, description, rating, type } = data

    const handleAddCart = (e) => {
        e.preventDefault()

        fetch(`https://a-ten-backend.vercel.app/addCart`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal("Amazing", "Successfully Add Car", "success");
                }
            })
    }

    return (
        <div className='flex flex-col lg:flex items-center lg:mx-10 mb-10'>
            <img className='w-[90%] lg:w-[60%] rounded-lg' src={image} alt="" />
            <div className='mx-10 my-5'>
                <h1 className='text-3xl lg:text-5xl font-bold mb-4'>{name}</h1>
                <p className='text-[#000000aa] mb-4'>{description}</p>
                <p className='text-2xl lg:text-3xl font-bold'>Price: ${price}</p>
                <p className="lg:text-lg font-bold my-3">User Rating <span className='text-blue-500'>{rating} out of 5</span></p>
                <button onClick={handleAddCart} className='btn px-3 py2 text-lg hover:text-black rounded-lg bg-blue-400 text-white'>Add to Cart</button>
            </div>
        </div>
    );
};
