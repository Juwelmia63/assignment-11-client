import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Gallery = () => {
    return (
        <div className="hero min-h-96 my-5 object-cover" style={{ backgroundImage: 'url(https://i.ibb.co/NVXPFXX/360-F-306054576-c-ODtak-EEANIH8-BZN8i-LD8ltthqdr-MCGo.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md text-white bg-[#EA6A12] p-4 rounded-xl">
                    <h1 className="mb-2 text-4xl font-bold font-playfairDisplay text-white">FOOD GALLERY
                      </h1>
                    <p className="mb-2 mt-0 w-full font-poppins text-xl font-bold text-black font-playfairDisplay">Gallery</p>
                   
                </div>
            </div>
        </div>
    );
};

export default Gallery;