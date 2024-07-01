import React,{Fragment} from 'react';
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import PageAbout from "../components/About/page";
import Services from "../components/Services";
import PricingTable from "../components/PricingTable";
import Testimonial from "../components/Testimonials/home-two";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";

import ServiceThumb from '../assets/img/about.jpg'

const PageService = () => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
                bgImg={'../src/assets/img/02.jpg'}
                title="OUR SERVICES"
                content="Kaleb Services always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly."
            />
            <PageAbout
                title={'Our Services'}
                heading="Comprehensive Agricultural Solutions"
                thumb={ServiceThumb}
                content="At Kaleb Services, we deliver a wide range of agricultural and business solutions tailored to meet the needs of our clients. From providing top-quality agricultural machinery and advanced irrigation systems to exporting premium coffee and sesame, we cover all aspects of agricultural operations. Our Kaleb Operators and Mechanics Training Institute equips individuals with the skills to efficiently operate and maintain machinery, while our manufacturing and assembly services ensure custom solutions for agricultural equipment. We also offer eco-friendly organic chemicals to support sustainable farming practices. Committed to excellence, innovation, and customer support, we empower farmers to achieve seamless and sustainable growth."
            />
            <Services classes="sm-top"/>
            
            <Testimonial/>
            <BrandLogo/>
            <Funfact classes="sp-top"/>
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default PageService;