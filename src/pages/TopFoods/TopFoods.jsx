import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopFoods = () => {
    const [topFoods, setTopFoods] = useState([]);

    useEffect(() => {
        fetchTopFoods();
    }, []);

    const fetchTopFoods = async () => {
        try {
            const response = await fetch('http://localhost:5000/topFoodsItem');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setTopFoods(data);
        } catch (error) {
            console.error('Error fetching top foods:', error);
        }
    };
    return (
        <div className="container mx-auto px-4">
            <h2 className="font-bold font-poppins mb-4 flex justify-center text-3xl mt-4">Top Selling Food</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-poppins">
                {topFoods.map(food => (
                    <div key={food._id} className="bg-white rounded-lg shadow-lg p-4">
                        <img src={food.food_image} alt={food.food_name} className="w-full h-52 object-cover mb-2 rounded-lg" />
                        <h3 className="text-xl font-semibold mb-2">{food.food_name}</h3>
                        <div className="flex flex-row justify-between">
                            <p className="text-sm text-gray-500 mb-2">Category: {food.food_category}</p>
                            <p className="text-sm text-gray-500 mb-2">Price: ${food.price}</p>
                        </div>
                        <Link to={`/singlefoodpage/${food._id}`}>
                            <button className="bg-[#EA6A12] text-white px-4 py-2 rounded-md hover:bg-orange-600 w-full">Details</button>
                        </Link>
                    </div>
                ))}
            </div>



            <div className="flex justify-center items-center mt-5">
                <div className="join">
                    <button className="join-item btn">Prev</button>
                    <button className="join-item btn">1</button>
                    <button className="join-item btn btn-active">2</button>
                    <button className="join-item btn">3</button>
                    <button className="join-item btn">4</button>
                    <button className="join-item btn">Next</button>
                </div>
            </div>


            <div className="mt-4 flex justify-center mb-5">
                <Link to="/allfoodItem">
                    <button className="btn btn-neutral text-white">See All</button>
                </Link>
            </div>
        </div>
    );
};

export default TopFoods;