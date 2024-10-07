import { useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Authcontex } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import GalleryCard from "./GalleryCard";
import { useLoaderData } from "react-router-dom";


const Gallery = () => {
    const imageee = useLoaderData();
    // console.log(imageee);



    const { user } = useContext(Authcontex)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target
        const food_image = form.image.value
        const description = form.description.value

        const foodaddedData = {
            food_image,
            email: user.email,
            buyerName: user.displayName,
            description
        };


        try {

            const response = await axios.post('https://assignment-eleven-server-swart.vercel.app/galleryimage', foodaddedData);


            Swal.fire({
                icon: 'success',
                title: 'Submit Successful!',
                confirmButtonText: 'OK'
            });

            console.log(response);


        } catch (error) {
            console.error('Error submit food image:', error);
            Swal.fire({
                icon: 'error',
                title: 'Submit Failed',
                text: 'Please try again.',
                confirmButtonText: 'OK'
            });
        }
    };
    return (
        <HelmetProvider>

            <Helmet>
                <title>RestroBiz|Gallery</title>
            </Helmet>

            <div>
                {/* gallery banner section start */}
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

                {/* gallery banner section end */}


                {/* modal section start */}

                <div className="flex justify-center items-center my-5">
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn btn-outline" onClick={() => document.getElementById('my_modal_5').showModal()}>Add Image</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-2xl text-center">Add Image</h3>

                            <div className="flex flex-col gap-5">
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                        <input type="text" defaultValue={user.email} name="email" id="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:outline-none focus:ring-2 h-9 focus:ring-purple-500" />
                                    </div>

                                    <div>
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Feedback</label>
                                        <textarea name="description" id="description" rows="9" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                                    </div>


                                    <div>
                                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Food Image</label>
                                        <input type="text" name="image" id="image" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm h-9 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                                    </div>


                                    <div className="mt-6">
                                        <button className="btn btn-outline">Submit</button>
                                    </div>
                                </form>
                            </div>

                            <div className="flex flex-row justify-between">
                                <div className="modal-action">
                                    <form method="dialog">

                                        <button className="btn btn-outline">Close</button>
                                    </form>
                                </div>


                            </div>

                        </div>
                    </dialog>
                </div>


                {/* gallery banner section end*/}

                <div className="grid grid-cols-3 gap-4 my-5">
                    {imageee.map(image=>  <GalleryCard key={image._id} image={image}></GalleryCard>)}
                </div>
                

            </div>
        </HelmetProvider>
    );
};

export default Gallery;