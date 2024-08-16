import { Link } from "react-router-dom";


const AllFoodCard = ({food}) => {

    const {_id, food_name, food_image, food_category, price, quantity, food_origin, description}=food;
   
    return (
        <div>

           
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img className="object-cover h-[240px] w-[400px]"
                        src={food_image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{food_name}</h2>
                    <p className="text-xl">{food_category}</p>

                    <div className="flex justify-end">
                        <p className="text-lg">Price: ${price}</p>
                        <p className="text-lg">Quantity: {quantity}</p>
                    </div>
                    <div className="card-actions flex justify-center items-center">
                        <Link to={`/singlefoodpage/${_id}`}><button className="btn btn-outline w-80">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllFoodCard;