import { Fragment } from "react";
import BrowseStyle from "../component/BrowseStyle";
import Footer from "../component/Footer";
import Customer from "../component/HapiCustmer";
import Hero from "../component/Hero";
import Product from "../component/Products";
import Sponsor from "../component/Sponsor";
import Subscribe from "../component/Subscribe";
import useFetch from "../customHook/useFetch";

const Home = () => {
    const { data:product , isPending, error } = useFetch('http://localhost:5000/product')

    return (
        <div className="overflow-x-hidden">
            <Hero />
            <Sponsor />

            {isPending && (
                <div className="flex justify-center items-center h-64">
                    <div className="border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
                </div>
            )}

            {error && (
                <div className="flex items-center justify-center h-64">
                    <p className="text-2xl font-semibold text-red-500 text-center">{error}</p>
                </div>
            )}

            {product && (
                <Fragment>
                    <Product id='new-arrivals' title='New Arrivals' product={product} isPending={isPending} />
                    <Product id='top-sale' title='Top Sales' product={product} isPending={isPending} />
                </Fragment>
            )}
            
            <BrowseStyle />
            <Customer />
            <Subscribe />
            <Footer />
        </div>
    );
}
 
export default Home;