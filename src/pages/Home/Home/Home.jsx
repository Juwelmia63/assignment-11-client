import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "../../Banner/Banner";
import Extra from "../../HomeExtraone/Extra";
import Rating from "../../HomeExtraone/Rating";
import TopFoods from "../../TopFoods/TopFoods";


const Home = () => {
    return (

        <HelmetProvider>

            <Helmet>
                <title>RestroBiz|Home</title>
            </Helmet>
            <div>
                <Banner></Banner>
                <TopFoods></TopFoods>
                <Extra></Extra>
                <Rating></Rating>
            </div>
        </HelmetProvider>
    );
};

export default Home;