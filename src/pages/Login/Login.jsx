import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontex } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/groovyWalk.json";

const Login = () => {

    const { signIn, googlelogin } = useContext(Authcontex);

    const handlelogin = e => {
        e.preventDefault();


        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);



        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('User logged in successfully');
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message);
            })

    }



    return (




        <HelmetProvider>
            <Helmet>
                <title>RestroBiz|LogIn</title>
            </Helmet>

            <div className="flex flex-row justify-center items-center">

                <div className="h-[500px] w-[500px] mr-0 ml-12">
                <Lottie animationData={groovyWalkAnimation} loop={true} />
                </div>


                <div className=" min-h-screen w-[800px] flex lg:flex-row flex-col ml-0">
                    <div className=" flex-col w-full flex-1 justify-center items-center flex">

                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handlelogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" required className="input input-bordered"
                                    />


                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" required className="input input-bordered"
                                    />


                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#EA6A12] text-white hover:text-black">Login</button>
                                </div>
                                <button onClick={() => googlelogin()} className="btn btn-outline w-full">

                                    Continue With Google
                                </button>



                                <div className="mt-3">
                                    <p>Don't have a account yet?  <Link to="/kali"> <button >Resister</button></Link> </p>

                                </div>

                            </form>
                        </div>





                    </div>
                    <ToastContainer />
                </div>
            </div>
        </HelmetProvider>

    );
};

export default Login;