

const Navber = () => {
    return (
        <div className="bg-base-100 flex lg:flex-row flex-col gap-4 justify-between items-center font-poppins">
            <div className="">
                <a className=" font-bold text-3xl">Restro<span className="text-[#EA6A12]">Biz</span> </a>
            </div>







            <div className="flex flex-row gap-3">
              <p className="font-semibold text-xl ">HOME</p>
              <p className="font-semibold text-xl">All Foods</p>
              <p className="font-semibold text-xl">Gallery</p>
            </div>








            <div className="flex-none">

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="font-semibold">
                                My food items

                            </a>
                        </li>
                        <li><a className="font-semibold">Add item</a></li>
                        <li><a className="font-semibold">My Ordered</a></li>
                        <li><a className="font-semibold">Log Out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;