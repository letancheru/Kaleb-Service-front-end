import React, { useState, useEffect } from 'react';
import parse from "html-react-parser";
import Thumbnail from "../../UI/Thumbnail";
import Content from "../../UI/Content";
import { Link } from "react-router-dom";

import aboutData from '../../../data/About/home-one';

const About = () => {
    const [imgSrc, setImgSrc] = useState(null);

    useEffect(() => {
        const loadImage = async () => {
            try {
                const image = await import(`../../../assets/img/${aboutData.thumb}`);
                setImgSrc(image.default);
            } catch (error) {
                console.error("Error loading image:", error);
            }
        };

        loadImage();
    }, []);

    if (!imgSrc) {
        return <div>Loading...</div>; // or a spinner or placeholder
    }

    return (
        <div className="about-area-wrapper sm-top">
            <div className="container">
                <div className="row align-items-lg-center">
                    <div className="col-md-6 col-lg-5">
                        <Thumbnail classes="about-thumb" imgSrc={imgSrc} />
                    </div>
                    <div className="col-md-6 col-lg-7">
                        <Content classes="about-content">
                            <h6>{aboutData.title}</h6>
                            <h2>{parse(aboutData.heading)}</h2>
                            <span className="about-since">{aboutData.since}</span>
                            <p>{parse(aboutData.text)}</p>
                            <Link to={aboutData.btnLink} className="btn-about">
                                {aboutData.btnText} <i className="fa fa-angle-double-right" />
                            </Link>
                        </Content>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
