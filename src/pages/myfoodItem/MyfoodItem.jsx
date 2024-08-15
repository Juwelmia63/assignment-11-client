import { Helmet, HelmetProvider } from "react-helmet-async";

const MyfoodItem = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>RestroBiz|MyFoodItem</title>
            </Helmet>


            <div>
                <h1>This is my all food Item ErrorPage</h1>
            </div>
        </HelmetProvider>
    );
};

export default MyfoodItem;