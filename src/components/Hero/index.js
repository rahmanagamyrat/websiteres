import React from 'react';
import Navbar from '../Navbar/Navbar';
import { 
    HeroContainer, 
    HeroContent, 
    HeroH1,
    HeroItems,
    HeroP
} from './HeroElements';

const Hero = () => {

    const fadeLeft = {
        hidden: { opacity: 0, x: -100},
        visible: { opacity: 1, x: 0}
    }   
    return (
        <>
            <HeroContainer>
                <Navbar />
                <HeroContent>
                    <HeroItems>
                        <HeroH1
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1 }}
                        >Greatest Pizza</HeroH1>
                        <HeroP
                          variants={fadeLeft}
                          initial='hidden'
                          animate='visible'
                          transition={{ duration: 1 }}
                        >Ready in 60 second</HeroP>
                    </HeroItems>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default Hero