import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaWhatsapp
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
}  from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Telefon: 52525252</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Instagram" rel="noopener
                            noreferrer">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Facebook" rel="noopener
                            noreferrer">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Whatsapp" rel="noopener
                            noreferrer">
                                <FaWhatsapp />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer