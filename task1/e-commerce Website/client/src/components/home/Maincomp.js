import React, { useEffect } from 'react';
import Banner from './Banner';
import "./home.css";
import Slide from './Slide';
import {getProducts} from "../redux/actions/action";
import {useDispatch,useSelector} from "react-redux";



const Maincomp = () => {
    const {products} = useSelector(state => state.getproductsdata);
    console.log(products);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch]);

    return (
        <div className='home_section'>
            <div className="banner_part">
                <Banner />
            </div>

            <div className="slide_part">
                <div className="left_slide">
                <Slide title="Deals of the days" products={products} />
                </div>
                <div className="right_slide">
                    <h4>Frestive latest launches</h4>
                    <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/2fe4aa8d-0fc1-4516-8387-fb8f030f6fe9.jpg" alt="" />
                    <a href="#">See More</a>
                </div>
            </div>
            <Slide title="Today's Deal" products={products} />
            <div className="center_img">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/AugART/V6/GWeditorial_2300x646._CB599389263_.jpg" alt="" />
            </div>
            <Slide title="Best Seller" products={products} />
            <Slide title="Upto 80% off" products={products} />
        </div>
    )
}

export default Maincomp
