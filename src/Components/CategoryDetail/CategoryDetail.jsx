import { useEffect, useState } from "react";
import { Link, json, useParams } from "react-router-dom";

const CategoryDetail = () => {
    const { category } = useParams()
    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
        fetch(`https://a-ten-backend.vercel.app/category/${category}`)
            .then(res => res.json())
            .then(data => setCategoryData(data))

    }, [])
    console.log(categoryData);
    return (
        <div>
            {
                categoryData.length > 0 ? <div className={`${categoryData.length > 0 ? 'block' : 'hidden'} `}>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full ">
                            <img src={categoryData[0]?.image} className="w-full h-[300px] lg:h-[600px] opacity-60" />
                            <div className="absolute flex justify-between z-20 transform -translate-y-1/2 left-5 right-5 top-2/3">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                            <div className="absolute text-center z-10 w-[90%] lg:w-[50%] text-black bg-slate-200 p-5 rounded-xl bg-opacity-30 top-[18%] lg:top-[20%] left-[5%] lg:left-[24%]">
                                <h1 className="text-2xl lg:text-6xl font-extrabold ">Your Road to the Perfect Car Starts Here!</h1>
                                <p className="text-xs lg:text-lg font-medium my-5">Discover a world of premium cars that redefine the way you experience the open road. Explore our curated collection today!</p>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={categoryData[1]?.image} className="w-full h-[300px] lg:h-[600px] opacity-60" />
                            <div className="absolute flex justify-between z-10 transform -translate-y-1/2 left-5 right-5 top-2/3">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                            <div className="absolute text-center z-0 w-[90%] lg:w-[50%] text-black bg-slate-200 p-5 rounded-xl bg-opacity-30 top-[18%] lg:top-[20%] left-[5%] lg:left-[24%]">
                                <h1 className="text-2xl lg:text-6xl font-extrabold ">Start Your Car Shopping Adventure</h1>
                                <p className="text-xs lg:text-lg font-medium my-5">Elevate every commute with our selection of high-performance vehicles. Find the perfect blend of style, comfort, and power right here.</p>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={categoryData[2]?.image} className="w-full h-[300px] lg:h-[600px] opacity-60" />
                            <div className="absolute flex justify-between z-10 transform -translate-y-1/2 left-5 right-5 top-2/3">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                            <div className="absolute text-center w-[90%] z-0 lg:w-[50%] text-black bg-slate-200 p-5 rounded-xl bg-opacity-30 top-[18%] lg:top-[20%] left-[5%] lg:left-[24%]">
                                <h1 className="text-2xl lg:text-6xl font-extrabold ">Buy Your Ideal Car Today</h1>
                                <p className="text-xs lg:text-lg font-medium my-5">Whether its a sleek sports car, a spacious SUV, or an eco-friendly hybrid, we have the right vehicle to match your lifestyle. Explore now and find your dream car.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mx-10">
                        <div className="my-20">
                            <h1 className="text-4xl font-bold text-center">Experience Excellence on Wheels</h1>
                            <p className="font-bold text-center  lg:w-[50%] mx-auto my-4 text-gray-500">Dive deep into the heart of automotive innovation. From cutting-edge electric vehicles to powerful performance machines, our comprehensive guides and reviews provide you with invaluable insights. </p>
                        </div>
                        <div className="grid grid-cols-1 my-7 lg:grid-cols-3 gap-x-4 gap-y-6">
                            {
                                categoryData?.map(product => <CarCategory key={product._id} product={product}></CarCategory>)
                            }
                        </div>
                    </div>

                </div> : 
                <div>
                    <h1 className="text-2xl lg:text-5xl font-extrabold text-center mt-10">THIS CATEGORY HAVE NO DATA</h1>
                    <div className="flex justify-center">
                        <img className="w-[80%] lg:w-[50%]" src="https://i.ibb.co/6m7cY95/No-data-amico.png" alt="" />
                    </div>
                </div>
            }
        </div>

    );
};

export default CategoryDetail;

const CarCategory = ({ product }) => {
    const { _id, name, image, price, brand, description, rating, type } = product
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-[220px] w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body pb-4">
                <h2 className="card-title font-bold text-xl">{name}</h2>
                <p className="text-lg bg-slate-500 text-white px-2 py-1 text-center font-bold rounded-md w-[80%]">Brand: {brand}</p>
                <p className="font-semibold">Type of car: {type}</p>
                <p className="text-slate-600 text-sm font-semibold">{description}</p>
                <p className="text-xl font-bold">$ {price}</p>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <div className="flex justify-between mt-2">
                    <Link className="px-2 py-1 bg-blue-400 text-lg font-bold text-white rounded-md" to={`/details/${_id}`}>Details</Link>
                    <Link className="px-2 py-1 bg-blue-400 text-lg font-bold text-white rounded-md" to={`/update/${_id}`}>Update</Link>
                </div>
            </div>
        </div>
    );
};