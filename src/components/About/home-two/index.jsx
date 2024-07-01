import React from 'react';
import parse from "html-react-parser";
import aboutData from "../../../data/About/home-two";
import Thumbnail from "../../UI/Thumbnail";
import Content from "../../UI/Content";

import {Link} from "react-router-dom";

const About = () => {
    return (
        <div className="home-two-about-area" >
            <div className="container">
                <div className="row align-items-lg-center">
                    <div className="col-md-6 col-lg-5">
                        <Thumbnail classes="about-thumb" imgSrc="./src/assets/img/01.jpeg" />
                    </div>
                    <div className="col-md-6 col-lg-7">
                        <Content classes="about-content">
                           
                            <h2>{parse(aboutData.heading)}</h2>
                            
                            <p>{parse(aboutData.text)}</p>
                            <Link to={aboutData.btnLink} className="btn-about">
                                {aboutData.btnText} <i className="fa fa-angle-double-right" />
                            </Link>
                        </Content>
                    </div>
                </div>
                <div className="row align-items-lg-center">
                    <div className="col-md-6 col-lg-5">
                    <Content classes="about-content">
                            
                            <h2>{parse(aboutData.heading)}</h2>
                            
                            <p>{parse(aboutData.text)}</p>
                            <Link to={aboutData.btnLink} className="btn-about">
                                {aboutData.btnText} <i className="fa fa-angle-double-right" />
                            </Link>
                        </Content>
                        
                    </div>
                    <div className="col-md-6 col-lg-7">
                    <Thumbnail classes="about-thumb" imgSrc={`${aboutData.thumb}`} />
                    </div>
                </div>
            </div>
            
        </div>
        
    );
};

export default About;
