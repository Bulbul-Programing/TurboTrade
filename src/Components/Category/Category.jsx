import { useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
    const [categoryData, setCategoryData] = useState([])

    fetch('brandName.json')
    .then(res => res.json())
    .then(data => setCategoryData(data))

    return (
        <div className="grid grid-cols-3 lg:grid-cols-6 mx-5 lg:mx-20 my-2 lg:my-10 justify-items-center gap-x-3">
            {
                categoryData?.map(category => <CategoryDetails key={category.id} category={category}></CategoryDetails>)
            }
        </div>
    );
};

const CategoryDetails = ({category}) =>{
    return(
        <Link to={`/category/${category.carName}`} className="shadow-lg rounded-lg">
            <img className="w-full h-[100px] mx-auto rounded-lg my-4" src={category?.image} alt="" />
            <h1 className="text-xl font-semibold text-center top-[30%] left-[30%] pb-3">{category?.carName}</h1>
        </Link>
    )
}

export default Category;