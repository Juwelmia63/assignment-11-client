
// import { Link } from "react-router-dom";
// // import resister from "../../assets/Images/resister.jpg"
// import { useContext, useState } from "react";
// import { AuthContex } from "../../Provider/AuthProvider";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";




import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Authcontex } from "../../Provider/AuthProvider";





// import Lottie from "lottie-react";
// import resister from "../../assets/resister.json";



const Resister = () => {



    

    const {createUser}=useContext(Authcontex);



    const [success, setSuccess] = useState('');
    const [resisterError, setresisterError] = useState('');
    const [showpassword, setshowpassword] = useState(false);


    const handleresister = e => {
        e.preventDefault();


        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        console.log(email, password, name, photo);




        setresisterError('');
        setSuccess('')



        if (password.length < 6) {
            setresisterError('Password Should Be 6 charecter or longer');
            return;
        }

        else if (! /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
            setresisterError('Password Must Have One Uppercase and One Lowercase Letter');
            return;
        }








        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Create Successfully')
            })


            .catch(error => {
                console.error(error)
                setresisterError(error.message);
            })
    }





    return (
        <div className="hero min-h-screen  ">



            <div className="hero-content flex-col lg:flex-row w-full">



                <div className="">
                {/* <Lottie className="" animationData={resister}></Lottie> */}
                </div>


                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleresister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" placeholder="name" className="input input-bordered"


                            />


                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" required placeholder="email" className="input input-bordered"

                            />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="photo" name="photo" placeholder="photo url" className="input input-bordered"


                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>



                            <div className="relative">
                                <input
                                    className="  w-full py-2 px-4 border rounded-xl"
                                    type={showpassword ? "text" : "password"}
                                    name="password" placeholder="Password" id="" />

                                <span className="absolute top-3 right-3" onClick={() => setshowpassword(!showpassword)}>{
                                    showpassword ? <FaEye /> : <FaEyeSlash />
                                }</span>

                            </div>
                            


                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-[#EA6A12] text-white hover:text-black">Resister</button>
                        </div>


                        {
                            resisterError && <p className="text-red-700">{resisterError}</p>
                        }

                        {
                            success && <p className="text-green-600">{success}</p>
                        } 

                        <div className="mt-3">
                            <p>Already have an account? <Link to="/login">Log in</Link> </p>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Resister;