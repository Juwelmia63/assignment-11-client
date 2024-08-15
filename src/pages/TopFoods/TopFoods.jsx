import { Link } from "react-router-dom";

const TopFoods = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 lg:ml-4 sm:ml-4">
                <div className="card card-compact w-96 bg-base-100 shadow-xl mb-5">
                    <figure><img src="" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mb-5">
                    <figure><img src="" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mb-5">
                    <figure><img src="" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>


            </div>
            <div className="flex items-center justify-center">
                <Link to="/allfood">  <button className="btn text-white hover:text-black bg-[#EA6A12]">See All</button></Link>
            </div>
        </div>
    );
};

export default TopFoods;