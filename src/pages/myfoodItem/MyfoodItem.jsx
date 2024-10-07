import { useContext, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Authcontex } from "../../Provider/AuthProvider";
import axios from "axios";
import MyfoodCard from "./MyfoodCard";

const MyfoodItem = () => {

    const { user } = useContext(Authcontex)
    const [addfood, setAddfood] = useState([])




    useEffect(() => {
        const fetchAddedFood = async () => {
            try {
                const response = await axios.get(`https://assignment-eleven-server-swart.vercel.app/addfood/${user.email}`);
                console.log("Response Data:", response.data);
                setAddfood(response.data);

            } catch (error) {
                console.error('Error fetching added food:', error);

            }
        };

        fetchAddedFood();
    }, [user]);

    return (
        <HelmetProvider>
            <Helmet>
                <title>RestroBiz|MyFoodItem</title>
            </Helmet>


            <div className="flex flex-col gap-5 my-5">
                {addfood.map(food=> <MyfoodCard key={food._id} food={food}></MyfoodCard>)}
            </div>
        </HelmetProvider>
    );
};

export default MyfoodItem;