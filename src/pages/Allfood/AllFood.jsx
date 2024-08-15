import { Helmet, HelmetProvider } from "react-helmet-async";


const AllFood = () => {
    return (
        <HelmetProvider>


            <Helmet>
                <title>RestroBiz|All Food</title>
            </Helmet>


            <div>
                <div className="hero h-56 my-5 object-cover" style={{ backgroundImage: 'url(https://i.ibb.co/j4pvG0b/foods-to-eat-to-lose-weight.jpg)' }}>
                    <div className="hero-overlay bg-opacity-55"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-poppins font-bold text-white">All Foods</h1>
                        </div>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default AllFood;