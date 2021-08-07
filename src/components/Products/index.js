import React from 'react';
import {
    ProductsContainer,
    ProductsHeading,
    ProductWrapper,
    ProductTitle,
    ProductCard,
    ProductPrice,
    ProductInfo,
    ProductImg,
    ProductDesc,
} from './productsElements'

const Products = ({ heading, data }) => {
    const fadeLeft = {
        hidden: { opacity: 0, x: -100},
        visible: { opacity: 1, x: 0}
    }   
    
    return (
        <ProductsContainer>
            <ProductsHeading 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >{heading}</ProductsHeading>
            <ProductWrapper
              variants={fadeLeft}
              initial='hidden'
              animate='visible'
              transition={{ duration: 1 }}
            >
                {data.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                            </ProductInfo> 
                        </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Products