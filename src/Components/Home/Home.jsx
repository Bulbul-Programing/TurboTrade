import Banner from "../Banner/Banner";
import BestDealer from "../BestDealer/BestDealer";
import Category from "../Category/Category";
import CustomerExp from "../CustomerExp/CustomerExp";
import DreamCar from "../DreamCar/DreamCar";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <DreamCar></DreamCar>
            <BestDealer></BestDealer>
            <CustomerExp></CustomerExp>
        </div>
    );
};

export default Home;