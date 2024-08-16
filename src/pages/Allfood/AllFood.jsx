import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import AllFoodCard from "./AllFoodCard";


const AllFood = () => {
    const allfood = useLoaderData()
    // console.log(allfood);
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


                <div className="my-8">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4 ml-5">
                    {allfood.map(food => (<AllFoodCard key={food._id} food={food}></AllFoodCard>))}
                </div>
            </div>


        </HelmetProvider>
    );
};

export default AllFood;