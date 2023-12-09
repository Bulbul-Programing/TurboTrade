
const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/fSdnmyp/banner3.webp" className="w-full h-[300px] lg:h-[600px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/3 lg:top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute text-center w-[90%] lg:w-[50%] text-white top-[18%] lg:top-[20%] left-[5%] lg:left-[24%]">
                    <h1 className="text-2xl lg:text-6xl font-extrabold ">Unleash Your Drive</h1>
                    <p className="text-xs lg:text-lg font-medium my-5">Discover a world of premium cars that redefine the way you experience the open road. Explore our curated collection today!</p>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/jbWRc8C/banner2.webp" className="w-full h-[300px] lg:h-[600px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/3 lg:top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute text-center w-[90%] lg:w-[50%] text-white top-[18%] lg:top-[20%] left-[5%] lg:left-[24%]">
                    <h1 className="text-2xl lg:text-6xl font-extrabold ">Elevate Your Journey</h1>
                    <p className="text-xs lg:text-lg font-medium my-5">Elevate every commute with our selection of high-performance vehicles. Find the perfect blend of style, comfort, and power right here.</p>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/H7LCFhB/banner1.webp" className="w-full h-[300px] lg:h-[600px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/3 lg:top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute text-center w-[90%] lg:w-[50%] text-white top-[18%] lg:top-[20%] left-[5%] lg:left-[24%]">
                    <h1 className="text-2xl lg:text-6xl font-extrabold ">Find Your Perfect Ride</h1>
                    <p className="text-xs lg:text-lg font-medium my-5">Whether its a sleek sports car, a spacious SUV, or an eco-friendly hybrid, we have the right vehicle to match your lifestyle. Explore now and find your dream car.</p>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/8NS4QHq/jonathan-gallegos-5-FGqf-V6-Ujz-I-unspla3h.jpg" className="w-full h-[300px] lg:h-[600px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/3 lg:top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute text-center w-[90%] lg:w-[50%] text-[#ffffff] top-[15%] lg:top-[20%] left-[5%] lg:left-[24%]">
                    <h1 className="text-2xl lg:text-6xl font-extrabold ">Future-Forward Innovation</h1>
                    <p className="text-xs lg:text-lg font-medium mt-2">Experience cutting-edge automotive technology with our range of electric and hybrid vehicles. Redefine your driving experience with sustainable power.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;