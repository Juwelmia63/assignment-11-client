import { useContext, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Authcontex } from "../../Provider/AuthProvider";
import axios from "axios";
// import MyorderCard from "./MyorderCard";
import Swal from "sweetalert2";


const Myorder = () => {


    const { user } = useContext(Authcontex)
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        const fetchPurchases = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/mypurchasedata/${user.email}`);
                console.log(response.data);
                setPurchases(response.data);
            } catch (error) {
                console.error('Error fetching purchases:', error);
            }
        };

        fetchPurchases();
    }, [user.email]);



    const handleDelete = async (id) => {
        // Show confirmation dialog
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this purchase!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`http://localhost:5000/purchase/${id}`);
                    // After successful deletion, update the purchases state by filtering out the deleted purchase
                    setPurchases(prevPurchases => prevPurchases.filter(purchase => purchase._id !== id));
                    Swal.fire('Deleted!', 'Your purchase has been deleted.', 'success');
                } catch (error) {
                    console.error('Error deleting purchase:', error);
                    Swal.fire('Error!', 'Failed to delete purchase.', 'error');
                }
            }
        });
    };


    return (
        <HelmetProvider>
            <Helmet>
                <title>RestroBiz|MyOrder</title>
            </Helmet>

            <div className="grid grid-cols-4 gap-2 my-6">
                {purchases.map(foodata =>
                    <div key={foodata._id} className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <div className="px-4 py-2">
                            <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{foodata.buyerName}</h1>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{foodata.buyingDate}</p>
                        </div>


                        <div>
                            <img className="object-cover w-full h-48 mt-2" src={foodata.food_image} alt="nai" />

                        </div>
                        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                            <h1 className="text-lg font-bold text-white">${foodata.price}</h1>
                            <button onClick={() => handleDelete(foodata._id)} className="btn btn-outline text-white font-medium py-2 px-4 rounded">Delete</button>
                        </div>
                    </div>
                )}
            </div>
        </HelmetProvider>
    );
};

export default Myorder;