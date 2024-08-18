import { useContext } from "react";
import { Authcontex } from "../../Provider/AuthProvider";
import { Fade } from "react-awesome-reveal";




const GalleryCard = ({ image }) => {
    const { user } = useContext(Authcontex);





    return (
        <div>
            <Fade direction="up">
                <div className="relative">
                    <img src={image.food_image} alt={image.user} className="w-full rounded-lg shadow-md h-80" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white rounded-lg">
                        <div>
                            <p className="text-4xl font-medium text-center">{user.displayName}</p>
                            <p className="text-xl font-medium mt-2 p-4 text-justify">{image.description}</p>

                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default GalleryCard;