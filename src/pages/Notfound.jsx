import { Link } from "react-router-dom";

const Notfound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-greys pt-20 px-8 lg:px-4">
            <h1 className="text-5xl font-bold text-text">404</h1>
            <h2 className="text-2xl mt-4 text-text">Page Not Found</h2>
            <p className="mt-2 text-text text-center">Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transform transition duration-1000">
                Go to Home Page
            </Link>
        </div>
    );
}
 
export default Notfound;