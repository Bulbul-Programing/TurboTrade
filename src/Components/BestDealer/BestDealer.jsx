import { useState } from "react";

const BestDealer = () => {
    const [dealers, setDealers] = useState([])

    fetch('Dealer.json')
        .then(res => res.json())
        .then(data => setDealers(data))

    return (
        <div className="mx-10">
            <h1 className="text-center text-3xl lg:text-4xl font-bold my-10 lg:my-20">Meet Our Best Dealer <br className="hidden lg:block" /> In your <span className="text-blue-400">TOWN</span></h1>
            <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-4 gap-x-6">
                {
                    dealers.map(dealer => <DealerCart key={dealer.phone} dealer={dealer}></DealerCart>)
                }
            </div>
        </div>
    );
};

export default BestDealer;


const DealerCart = ({ dealer }) => {
    const { image, name, location, phone } = dealer

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{location}</p>
                <p>{phone}</p>
            </div>
        </div>
    );
};
