import { Helmet, HelmetProvider } from "react-helmet-async";


const Myorder = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>RestroBiz|MyOrder</title>
            </Helmet>

            <div>
                <h1>This is My all Order Page</h1>
            </div>
        </HelmetProvider>
    );
};

export default Myorder;