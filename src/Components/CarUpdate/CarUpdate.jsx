import swal from 'sweetalert';
import { useLoaderData, useParams } from "react-router-dom";

const CarUpdate = () => {
    const defaultData = useLoaderData()
    const { _id , name, image, price, brand, description, rating, type } = defaultData[0]


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const image = form.image.value
        const brand = form.brand.value
        const type = form.type.value
        const price = form.price.value
        const description = form.description.value
        const rating = form.rating.value
        const date = form.date.value
        const updateProduct = {name, image, brand, type, price, description, rating, date}


        fetch(`https://a-ten-backend.vercel.app/update/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                swal("Update!", "Successfully Update you Product", "success");
            }
            else{
                swal("Oops!", "Please Update Data", "error")
            }
            console.log(data)})
        
    }
    return (
        <div className=" bg-[url('https://i.ibb.co/QcdZzS8/victor-furtuna-0mchr-VHAYzg-unsplash.jpg')] bg-opacity-70 bg-cover">
            <div>
                <h1 className="text-5xl font-bold text-center py-10 text-white">Update Your Car Information</h1>
            </div>
            <div className="mx-10 lg:mx-40 ">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
                        <div className="form-control w-full max-w-xs mb-5">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-white">Car Name</span>
                            </label>
                            <input type="text" defaultValue={defaultData[0].name} placeholder="Car Name" name='name' className="input border-2 focus:outline-none border-slate-500 focus:border-blue-400 w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs mb-5">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-white">Image Link</span>
                            </label>
                            <input type="text" defaultValue={defaultData[0].image} placeholder="Image Link" name='image' className="input border-2 focus:outline-none border-slate-500 focus:border-blue-400 w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs mb-5">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-white">Brand Name</span>
                            </label>
                            <input type="text" defaultValue={defaultData[0].brand} placeholder="Brand Name" name='brand' className="input border-2 focus:outline-none border-slate-500 focus:border-blue-400 w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs mb-5">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-white">Type</span>
                            </label>
                            <input type="text" defaultValue={defaultData[0].type} placeholder="Type" name='type' className="input border-2 focus:outline-none border-slate-500 focus:border-blue-400 w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs mb-5">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-white">Price</span>
                            </label>
                            <input type="text" defaultValue={defaultData[0].price} placeholder="Price" name='price' className="input border-2 focus:outline-none border-slate-500 focus:border-blue-400 w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs mb-5">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-white">Short description</span>
                            </label>
                            <input type="text" defaultValue={defaultData[0].description} placeholder="Short description" name='description' className="input border-2 focus:outline-none border-slate-500 focus:border-blue-400 w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs mb-5">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-white">Rating</span>
                            </label>
                            <input type="number" defaultValue={defaultData[0].rating} placeholder="Rating" name='rating' min='0' max='5' className="input border-2 focus:outline-none border-slate-500 focus:border-blue-400 w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-white">Manufacture Date</span>
                            </label>
                            <input type="date" defaultValue={defaultData[0].date} placeholder="date-month-year" name='date' max='5' className="input border-2 focus:outline-none border-slate-500 focus:border-blue-400 w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="flex justify-center mx-4 lg:mx-40 pb-[87px]">
                        <input value='Update' type="submit" className="w-full py-3 text-white text-xl font-bold rounded-lg my-6 cursor-pointer bg-blue-400" name="" id="" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CarUpdate;