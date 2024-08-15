

const AllFoodCard = ({food}) => {

    const {food_name, food_image, food_category, price, quantity, food_origin, description}=food;
   
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img className="object-cover h-[240px] w-[400px]"
                        src={food_image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{food_name}</h2>
                    <p>{}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllFoodCard;