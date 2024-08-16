import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Authcontex } from "../../Provider/AuthProvider";

const SingleFoodPage = () => {

    const { user } = useContext(Authcontex);

    const food = useLoaderData();
    const { _id, food_name, food_image, food_category, price, quantity, food_origin, description } = food;

    return (
        <div className="flex items-center justify-center my-7">
            <div className="card bg-base-100 w-96 shadow-xl ">
                <div className="card-body">
                    <h2 className="card-title text-2xl">{food_name}</h2>
                    <p>{description}</p>
                </div>
                <figure>
                    <img
                        src={food_image}
                        alt="Shoes" />
                </figure>

                <div className="my-4 ml-5">
                    <p><span className="text-lg font-medium">Category:</span> {food_category}</p>
                    <p><span className="text-lg font-medium">Price:</span>$ {price}</p>
                    <p><span className="text-lg font-medium">Food Origin:</span> {food_origin}</p>
                    <p><span className="text-lg font-medium">Made By:</span>{user?.email} </p>
                </div>

                <div className="mb-4">
                    <Link to={`/purchase/${_id}`}><button className="btn border-none btn-neutral w-full bg-[#EA6A12] text-white">Purchase</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleFoodPage;