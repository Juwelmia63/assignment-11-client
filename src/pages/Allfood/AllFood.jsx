import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';

const AllFood = () => {
    const allfood = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');

    // Filter the food items based on the search term
    const filteredFood = allfood.filter(food =>
        food.food_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <HelmetProvider>
            <Helmet>
                <title>RestroBiz | All Food</title>
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

                <div className="my-8 w-1/2 mx-auto">
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
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
                    {filteredFood.map(food => (
                        <div key={food._id}>
                            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                                <figure>
                                    <img
                                        className="object-cover h-[240px] w-[400px]"
                                        src={food.food_image}
                                        alt={food.food_name}
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-2xl">{food.food_name}</h2>
                                    <p className="text-xl">{food.food_category}</p>
                                    <div className="flex justify-end">
                                        <p className="text-lg">Price: ${food.price}</p>
                                        <p className="text-lg">Quantity: {food.quantity}</p>
                                    </div>
                                    <div className="card-actions flex justify-center items-center">
                                        <Link to={`/singlefoodpage/${food._id}`}>
                                            <button className="btn btn-outline w-80">Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </HelmetProvider>
    );
};

export default AllFood;
