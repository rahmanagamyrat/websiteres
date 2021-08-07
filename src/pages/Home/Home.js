import React from 'react';
import { InfoSection } from  '../../components';
import { home0bj0ne } from './Data';
import Products from "../../components/Products";
import { productData } from "../../components/Products/data"
import Hero from '../../components/Hero';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
        <>
            <Hero />
            <Products heading="En Cok tercih edilenler" data={productData} />
            <InfoSection {...home0bj0ne} />
            <Footer />
        </>
    )
}

export default Home;