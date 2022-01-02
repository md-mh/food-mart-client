import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Banner from './Banner/Banner';
import HomeProduct from './HomeProduct/HomeProduct';
import Review from './Review/Review';


// home Page 
const Home = () => {

    const { loading } = useAuth();
    if (loading) {
        return (
            <div className="spinner">
                <Spinner animation="grow" variant="primary" />
            </div>
        );
    } else {
        return (
            <>

                <Banner></Banner>
                <HomeProduct></HomeProduct>
                <Review></Review>

            </>
        );
    }

};

export default Home;