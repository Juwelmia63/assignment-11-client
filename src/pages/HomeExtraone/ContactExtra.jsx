

const ContactExtra = () => {
    return (
        <div className="my-5 bg-[#191923]">

            <div className="">
                <h1 className="font-poppins text-4xl font-semibold text-center text-white pt-5 mb-6">Contact Us</h1>
            </div>

            <div className="w-1/2 pb-5 mx-auto">
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Name" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Email" />
                </label>

                <div>
                    <label htmlFor="description" className="block text-xl font-medium text-white">Message</label>
                    <textarea name="description" id="description" rows="9" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-indigo-500 sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>

                <div>
                    <button type="submit" className=" btn border-none btn-neutral w-full bg-[#EA6A12] mt-3 text-white">Submit</button>
                </div>

            </div>
        </div>
    );
};

export default ContactExtra;