import { useContext, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Authcontex } from "../../Provider/AuthProvider";
import axios from "axios";
import MyorderCard from "./MyorderCard";


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


    return (
        <HelmetProvider>
            <Helmet>
                <title>RestroBiz|MyOrder</title>
            </Helmet>

            <div>
               {purchases.map(foodata=> <MyorderCard key={foodata._id} foodata={foodata}></MyorderCard>)}
            </div>
        </HelmetProvider>
    );
};

export default Myorder;