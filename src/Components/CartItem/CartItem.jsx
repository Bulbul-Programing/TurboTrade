import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const CartItem = () => {
    const data = useLoaderData()
    const [coffee, setCoffee] = useState(data)

    return (
        <div>
            <h1 className="text-4xl text-center font-bold my-8">Your Added Item</h1>
            <div className="mx-10 lg:mx-36">
                {
                    coffee?.map(singleData => <CartItemDetails key={singleData._id} data={singleData} coffee={coffee} setCoffee={setCoffee}></CartItemDetails>)
                }
            </div>
        </div>
    );
};

export default CartItem;

const CartItemDetails = ({ data, coffee, setCoffee }) => {
    const { _id, name, brand, image, price } = data
    const handleDelete = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                fetch(`https://a-ten-backend.vercel.app/delete/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            swal("Your car has been deleted!", {
                                icon: "success",
                            });
                        }
                        const remainingCoffee = coffee.filter(singleCoffee => singleCoffee._id !== _id)
                        setCoffee(remainingCoffee)
                    })

                }
            });
    }

    return (
        <div className=" flex flex-col lg:flex lg:flex-row items-center gap-x-5 shadow-lg my-10 rounded-lg">
            <div>
                <img className="w-full lg:w-[300px] rounded-md" src={image} alt="" />
            </div>
            <div className="flex flex-col lg:flex lg:flex-row justify-between w-full lg:pr-20">
                <div className="mx-5 my-3 lg:my-0 lg:mx-0">
                    <h1 className="text-2xl font-bold mb-2">{name}</h1>
                    <p className="bg-blue-100 p-2 font-bold text-sm rounded-md inline">{brand}</p>
                    <p className="text-lg font-bold mt-2">$ {price}</p>
                </div>
                <div className="flex justify-center pb-3 lg:pb-0 lg:flex-col gap-4">
                    <button onClick={handleDelete} className="btn-error text-white p-2 rounded-md font-bold">Delete</button>
                </div>
            </div>
        </div>
    );
};
