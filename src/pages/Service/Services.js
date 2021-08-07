import React from 'react';
import Footer from '../../components/footer/Footer';
import { InfoSection } from  '../../components';
import { home0bj0ne } from './Data';
import Navbar from '../../components/Navbar/Navbar';


const Services = () => {
    return (
        <>
           <div className="text-center" style={{ background: 'black'}}>
             <Navbar />
           </div>
           <InfoSection {...home0bj0ne} />
           <Footer />
        </>
    )
}

export default Services;