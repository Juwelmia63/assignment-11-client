

const Rating = () => {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                    <img
                        className="h-12 w-12 rounded-full object-cover mr-2"
                        src="https://i.ibb.co/RQM80DX/IMG-5237-removebg-preview.png"

                    />
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-9" className="rating-hidden" />
                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                        <input type="radio" name="rating-9" className="mask mask-star-2" checked />
                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-lg font-semibold">Md Juwel</p>
                    <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum accusantium architecto sapiente repellendus non ad.</p>
                </div>
            </div>
        </div>
    );
};

export default Rating;