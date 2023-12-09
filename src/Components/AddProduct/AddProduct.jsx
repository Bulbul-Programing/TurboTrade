
const AddProduct = () => {

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
        const productInfo = {name, image, brand, type, price, description, rating, date}

        fetch('https://a-ten-backend.vercel.app/product', {
            method: 'POST',
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(productInfo)
        })
        .then(res => res.json())
        .then(data => console.log(data))

        form.reset()
        console.log(productInfo);
    }

    return (
        <div className=" bg-[url('https://i.ibb.co/cg9xLqF/peter-broomfield-m3m-ln-R90u-M-unsplash.jpg')] bg-opacity-70 bg-cover">
            <div>
                <h1 className="text-5xl font-bold text-center py-10 text-white">Add a New Car</h1>
            </div>
            <div className="mx-10 lg:mx-40 ">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
                        <div className="form-control w-full max-w-xs mb-5">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-white">Car Name</span>
                            </label>
                            <input type="text" placeholder="Car Name" name='name' className="input border-2 focus:outline-none border-slate-500 focus:border-blue-400 w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs mb-5">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-white">Image Link</span>
                            </label>
                            <input type="text" placeholder="Image Link" name='image' className="input border-2 focus:outline-none border-slate-500 focus:border-blue-400 w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs mb-5">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-white">Brand Name</span>
                            </label>
                            <input type="text" placeholder="Brand Name" name='brand' className="input border-2 focus:outline-none border-slate-500 focus:border-blue-400 w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs mb-5">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-white">Type</span>
                            </label>
                            <input type="text" placeholder="Type" name='type' className="input border-2 focus:outline-none border-slate-500 focus:border-blue-400 w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs mb-5">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-white">Price</span>
                            </label>
                            <input type="text" placeholder="Price" name='price' className="input border-2 focus:outline-none border-slate-500 focus:border-blue-400 w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs mb-5">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-white">Short description</span>
                            </label>
                            <input type="text" placeholder="Short description" name='description' className="input border-2 focus:outline-none border-slate-500 focus:border-blue-400 w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs mb-5">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-white">Rating</span>
                            </label>
                            <input type="number" placeholder="Rating" name='rating' min='0' max='5' className="input border-2 focus:outline-none border-slate-500 focus:border-blue-400 w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-white">Manufacture Date</span>
                            </label>
                            <input type="date"  placeholder="date-month-year" name='date' max='5' className="input border-2 focus:outline-none border-slate-500 focus:border-blue-400 w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="flex justify-center mx-4 lg:mx-40 pb-[87px]">
                        <input type="submit" className="w-full py-3 text-white text-xl font-bold rounded-lg my-6 cursor-pointer bg-blue-400" name="" id="" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;