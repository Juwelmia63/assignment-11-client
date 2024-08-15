import { Helmet, HelmetProvider } from "react-helmet-async";


const AllFood = () => {
    return (
        <HelmetProvider>


            <Helmet>
                <title>RestroBiz|All Food</title>
            </Helmet>


            <div>
                <h1>This is all Food Section</h1>
            </div>
        </HelmetProvider>
    );
};

export default AllFood;