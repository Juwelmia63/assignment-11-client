import Banner from "../../Banner/Banner";
import Extra from "../../HomeExtraone/Extra";
import Rating from "../../HomeExtraone/Rating";
import TopFoods from "../../TopFoods/TopFoods";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <TopFoods></TopFoods>
           <Extra></Extra>
           <Rating></Rating>
        </div>
    );
};

export default Home;