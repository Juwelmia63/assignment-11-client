import { Link } from "react-router-dom";

const Login = () => {



    return (




        <div className="hero min-h-screen flex lg:flex-row flex-col">

            <div className="flex-1">
         
            </div>



            <div className=" flex-col w-full flex-1 justify-center items-center flex">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
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
                            <button className="btn btn-primary">Login</button>
                        </div>



                        <div className="mt-3">
                            <p>Don't have a account yet?  <Link to="/kali"> <button >Resister</button></Link> </p>

                        </div>
                    </form>
                </div>


               


                <div className="text-center lg:text-left  ">
                    <h1 className="text-2xl font-bold mb-2 text-center">or</h1>
                    <div className="space-y-2">
                        <button className="btn btn-outline w-full">
                           
                            Google
                        </button>
                        <button  className="btn btn-outline w-full">
                           
                            GitHub
                        </button>

                    </div>
                </div>
            </div>
           
        </div>
        
    );
};

export default Login;