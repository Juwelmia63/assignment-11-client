import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Rating = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 1
    };
    return (
        <div className="grid sm:grid-cols-1 p-12">
            <Slider {...settings}>
                {/* <h2 className="text-3xl font-semibold text-center mb-12 text-[#191923] font-playfairDisplay">Review</h2> */}
                <div className="max-w-sm mx-auto bg-white shadow-lg font-poppins  rounded-lg overflow-hidden">
                    <div className="px-6 py-4">
                        <div className="flex items-center justify-between">
                            <img
                                className="h-12 w-12 rounded-full object-cover mr-2"
                                src="https://i.ibb.co/bHRhkgy/IMG-20231126-144719.jpg"

                            />
                            <div className="rating rating-md">
                                <input type="radio" name="rating-9" className="rating-hidden" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" checked />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-lg font-semibold">Md Juwel</p>
                            <p className="text-gray-600 mt-2">The ambiance is fantastic. I loved every dish I tried!</p>
                        </div>
                    </div>
                </div>
                
                    <div className="max-w-sm mx-auto bg-white shadow-lg font-poppins rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <div className="flex items-center justify-between">
                                <img
                                    className="h-12 w-12 rounded-full object-cover mr-2"
                                    src="https://i.ibb.co/mRVBdwG/1686770430006.jpg"

                                />
                                <div className="rating rating-md">
                                    <input type="radio" name="rating-9" className="rating-hidden" />
                                    <input type="radio" name="rating-9" className="mask mask-star-2" />
                                    <input type="radio" name="rating-9" className="mask mask-star-2" />
                                    <input type="radio" name="rating-9" className="mask mask-star-2" />
                                    <input type="radio" name="rating-9" className="mask mask-star-2" checked />
                                    <input type="radio" name="rating-9" className="mask mask-star-2" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-lg font-semibold">Frinqu</p>
                                <p className="text-gray-600 mt-2">Great experience overall. Will be back soon!</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-sm mx-auto bg-white shadow-lg font-poppins rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <div className="flex items-center justify-between">
                                <img
                                    className="h-12 w-12 rounded-full object-cover mr-2"
                                    src="https://i.ibb.co/BsD81Ds/1701458559817.jpg"

                                />
                                <div className="rating rating-md">
                                    <input type="radio" name="rating-9" className="rating-hidden" />
                                    <input type="radio" name="rating-9" className="mask mask-star-2" />
                                    <input type="radio" name="rating-9" className="mask mask-star-2" />
                                    <input type="radio" name="rating-9" className="mask mask-star-2" />
                                    <input type="radio" name="rating-9" className="mask mask-star-2" checked />
                                    <input type="radio" name="rating-9" className="mask mask-star-2" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-lg font-semibold">Noyel</p>
                                <p className="text-gray-600 mt-2">Friendly staff and delicious meals. Highly recommended.</p>
                            </div>
                        </div>
                    </div>
                
                <div className="max-w-sm mx-auto bg-white shadow-lg font-poppins rounded-lg overflow-hidden">
                    <div className="px-6 py-4">
                        <div className="flex items-center justify-between">
                            <img
                                className="h-12 w-12 rounded-full object-cover mr-2"
                                src="https://i.ibb.co/nQgDrYD/images.jpg"

                            />
                            <div className="rating rating-md">
                                <input type="radio" name="rating-9" className="rating-hidden" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                                <input type="radio" name="rating-9" className="mask mask-star-2" checked />
                                <input type="radio" name="rating-9" className="mask mask-star-2" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-lg font-semibold">Jacky</p>
                            <p className="text-gray-600 mt-2">Amazing food and great service! Will definitely come back.</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Rating;