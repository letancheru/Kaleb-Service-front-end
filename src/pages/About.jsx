import React,{Fragment} from 'react';
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import About from "../components/About/home-two";
import Services from "../components/Services";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import Features from "../components/Features";
import Testimonial from "../components/Testimonials/home-two";
import Team from "../components/Team/home-two";

import ServiceThumb from '../assets/img/about.jpg'

const PageAbout = () => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
                bgImg={`src/assets/img/page-header.jpg`}
                title="ABOUT US"
                content="At Kaleb Services, we are dedicated to delivering top-tier agricultural solutions that empower our clients to achieve rapid and seamless growth."
            />
            <About/>
            <Services/>
            <Features classes={'sm-top'}/>
            <Testimonial/>
            
            <BrandLogo/>
            <Funfact classes="sp-top"/>
            <CallToAction/>
            <Footer/>
            <MobileMenu/>
        </Fragment>
    );
};

export default PageAbout;