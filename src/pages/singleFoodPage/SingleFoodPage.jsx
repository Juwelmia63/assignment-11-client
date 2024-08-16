import { useLoaderData } from "react-router-dom";

const SingleFoodPage = () => {

    const food = useLoaderData();
    const { _id, food_name, food_image, food_category, price, quantity, food_origin, description } = food;

    return (
        <div className="flex items-center justify-center my-7">
            <div className="card bg-base-100 w-96 shadow-xl ">
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
            </div>
        </div>
    );
};

export default SingleFoodPage;