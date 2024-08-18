import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontex } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";


const UpdateFood = () => {
    const food = useLoaderData();
    const { _id,
        food_name,
        food_image,
        food_category,
        price, quantity,
        food_origin,
        description } = food;

    const { user } = useContext(Authcontex);

    const handleaddfoodsubmit = async (e) => {
        e.preventDefault();
        // const buyingDate = new Date().toLocaleString();

        const form = e.target
        const food_name = form.name.value
        const food_image = form.image.value
        const food_category = form.category.value
        const quantity = form.quantity.value
        const price = form.price.value
        const food_origin = form.origin.value
        const description = form.description.value



        // addBy: user ? user.displayName : '',
        // email: user ? user.email : '',

        const foodaddedData = {
            food_name,
            food_image,
            email: user.email,
            food_category,
            quantity,
            price,
            food_origin,
            description
        };
        // console.table(purchaseData)

        try {

            const response = await axios.put(`http://localhost:5000/food/${_id}`, foodaddedData);

            // Show success toast
            Swal.fire({
                icon: 'success',
                title: 'Update Successful!',
                // text: 'Thank you for your purchase.',
                confirmButtonText: 'OK'
            });

            console.log(response);


        } catch (error) {
            console.error('Error purchasing food:', error);
            Swal.fire({
                icon: 'error',
                title: 'Update Failed',
                text: 'Please try again.',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <div>

            <div className="min-h-screen font-poppins py-12 px-4 sm:px-6 lg:px-8 mt-14">
                <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-xl">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-[#EA6A12]">Update Food</h1>
                    </div>
                    <form onSubmit={handleaddfoodsubmit} className="mt-8 space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Food Name</label>
                            <input defaultValue={food_name} type="text" name="name" id="name" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        </div>
                        <div>
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Food Image</label>
                            <input defaultValue={food_image} type="text" name="image" id="image" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        </div>
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Food Category</label>
                            <input defaultValue={food_category} type="text" name="category" id="category" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="text" defaultValue={user.email} name="email" id="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        </div>
                        <div>
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
                            <input defaultValue={quantity} type="number" name="quantity" id="quantity" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        </div>
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                            <input defaultValue={price} type="number" name="price" id="price" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        </div>
                        <div>
                            <label htmlFor="origin" className="block text-sm font-medium text-gray-700">Food Origin</label>
                            <input defaultValue={food_origin} type="text" name="origin" id="origin" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea defaultValue={description} name="description" id="description" rows="4" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        </div>
                        <div>
                            <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#EA6A12]">Update Item</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default UpdateFood;