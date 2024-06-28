import React, { useState, useEffect } from 'react';
import SlickSlider from '../../UI/Slick';
import SliderData from '../../../data/Slider/home-1';
import { Link } from "react-router-dom";

const NextArrow = ({ className, onClick }) => {
    return (
        <button className={className} onClick={onClick}><i className="fa fa-angle-right" /></button>
    );
};

const PrevArrow = ({ className, onClick }) => {
    return (
        <button className={className} onClick={onClick}><i className="fa fa-angle-left" /></button>
    );
};

const Slider = () => {
    const [bgImages, setBgImages] = useState({});

    useEffect(() => {
        const loadImages = async () => {
            const images = await Promise.all(
                SliderData.map(item => import(`../../../assets/img/${item.bg}`).then(image => ({ id: item.id, src: image.default })))
            );
            const imageMap = images.reduce((acc, img) => {
                acc[img.id] = img.src;
                return acc;
            }, {});
            setBgImages(imageMap);
        };

        loadImages();
    }, []);

    const settings = {
        arrows: true,
        dots: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    };

    if (Object.keys(bgImages).length !== SliderData.length) {
        return <div>Loading...</div>; // or a spinner or placeholder
    }

    return (
        <div className={'slider-area'}>
            <SlickSlider settings={settings}>
                {
                    SliderData.map(item => (
                        <div key={item.id}>
                            <div className="slider-item"
                                style={{ backgroundImage: `url(${bgImages[item.id]})` }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-7">
                                            <div className="slider-content">
                                                <h2>{item.title}</h2>
                                                <p>{item.text}</p>
                                                <Link to={`${item.btnLink}`} className="btn btn-brand">{item.btnText}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </SlickSlider>
        </div>
    );
};

export default Slider;
