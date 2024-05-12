import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontex } from "../../../Provider/AuthProvider";



const Navber = () => {

    const { user,logOut } = useContext(Authcontex);
    return (
        <div className="bg-base-100 flex lg:flex-row flex-col gap-4 justify-between items-center font-poppins">
           
            <div className="">
                <a className=" font-bold text-3xl">Restro<span className="text-[#EA6A12]">Biz</span> </a>
            </div>







            <div className="flex flex-row gap-3">
                <Link to="/"><p className="font-semibold text-xl ">HOME</p></Link>
                <p className="font-semibold text-xl">All Foods</p>
                <p className="font-semibold text-xl">Gallery</p>
            </div>








            <div className="flex flex-row items-center gap-2">




                {
                    !user ? (
                        <>
                            <Link
                                to="/login"
                                className="hidden md:block mr-4"
                            >
                                Login
                            </Link>
                            <Link
                                to="/kali"
                                className="hidden md:block mr-4"
                            >
                                Register
                            </Link>
                        </>
                    ) : (
                        <>
                            



                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt='nai' src={user.photoURL} />
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
                                    <li><a className="font-semibold" onClick={()=>logOut()}>Log Out</a></li>
                                </ul>
                            </div>
                        </>
                    )
                }

                {/* <div>
                    <Link to="/login"> <button className="btn btn-outline py-3">Log In</button></Link>
                </div>
 */}


            </div>

        </div>
    );
};

export default Navber;







