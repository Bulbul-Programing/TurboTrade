import { useState } from "react";
import { Link } from "react-router-dom";

const DreamCar = () => {

    const [products, setProducts] = useState([])

    fetch('https://a-ten-backend.vercel.app/product')
        .then(res => res.json())
        .then(data => setProducts(data))

    return (
        <div className="mx-10">
            <div className="my-20">
                <h1 className="text-4xl font-bold text-center">Buy Your Dream Car</h1>
                <p className="font-bold text-center  lg:w-[50%] mx-auto my-4 text-gray-500">Dive deep into the heart of automotive innovation. From cutting-edge electric vehicles to powerful performance machines, our comprehensive guides and reviews provide you with invaluable insights. </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-6">
                {
                    products.slice(10, 14)?.map(product => <LatestCar key={product._id} product={product}></LatestCar>)
                }
            </div>
        </div>
    );
};

export default DreamCar;


const LatestCar = ({ product }) => {
    const {_id ,name, image, price, brand, description } = product
    return (
        <Link to={`/details/${_id}`} className="card bg-base-100 shadow-xl">
            <figure><img className="h-[220px]" src={image} alt="Shoes" /></figure>
            <div className="card-body pb-4">
                <h2 className="card-title font-bold text-xl">{name}</h2>
                <p className="text-lg bg-slate-500 text-white px-2 py-1 text-center font-bold rounded-md w-[80%]">Brand: {brand}</p>
                <p className="text-slate-600 text-sm font-semibold">{description}</p>
                <p className="text-xl font-bold">$ {price}</p>
            </div>
        </Link>
    );
};
