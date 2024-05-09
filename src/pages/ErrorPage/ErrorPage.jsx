
import Lottie from "lottie-react";
import errorpage from "../../assets/error.json"


const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <Lottie className="max-w-4xl max-h-2 mx-auto" animationData={errorpage} loop={true} />
           
        </div>
    );
};

export default ErrorPage;