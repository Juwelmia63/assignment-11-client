import { useContext, useState } from "react";
import { Authcontex } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";





const Purchase = () => {

    const { user } = useContext(Authcontex);
    const food = useLoaderData();
    const { _id, food_name, food_image, food_category, price, food_origin, description } = food;
    const [startDate, setStartDate] = useState(new Date());


    const [quantity, setQuantity] = useState(1);
    




    const handlePurchase = async (e) => {
        e.preventDefault();
        // const buyingDate = new Date().toLocaleString();
        const purchaseData = {
            price,
            quantity,
            buyerName: user.displayName,
            buyerEmail: user.email,
            buyingDate:startDate,
            food_image
        };
        // console.table(purchaseData)

        try {
          
            const response = await axios.post('http://localhost:5000/purchasedata', purchaseData);

            // Show success toast
            Swal.fire({
                icon: 'success',
                title: 'Purchase Successful!',
                text: 'Thank you for your purchase.',
                confirmButtonText: 'OK'
            });

            console.log(response);


        } catch (error) {
            console.error('Error purchasing food:', error);
            Swal.fire({
                icon: 'error',
                title: 'Purchase Failed',
                text: 'Failed to purchase food. Please try again.',
                confirmButtonText: 'OK'
            });
        }
    };



    return (
        <div>
            <div className="flex items-center justify-center my-7 font-poppins">
                <div className="card bg-base-100 w-96 shadow-xl ">
                    <div className="card-body flex justify-center items-center">
                        <h2 className="card-title text-4xl ">{food_name}</h2>
                   
                    </div>
                   

                    <div className="my-4 ">

                        <div className="flex justify-around">
                            <p><span className="text-lg font-medium">Price:</span>$ {price}</p>
                            <p><span className="text-lg font-medium">Quantity:</span> {food.quantity}</p>
                        </div>
                        <br />
                        <div className="flex flex-col p-5">

                            <p><span className="text-lg font-medium">Buyer Name:</span> {user.displayName}</p>
                            <p><span className="text-lg font-medium">Buyer Email:</span> {user?.email} </p>
                            <p><span className="text-lg font-medium">Buying Date:</span>  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></p>
                        </div>


                        <form onSubmit={handlePurchase} className="mt-6">
                            <label className="block mb-2 ml-5 mb-3">
                                Quantity:
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                                    className="ml-2 p-1 border border-gray-300 rounded-md"
                                    required
                                />
                            </label>

                            <button type="submit" className=" btn border-none btn-neutral w-full bg-[#EA6A12] text-white">Purchase</button>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Purchase;