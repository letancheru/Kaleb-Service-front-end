import React, {Component} from "react";
import Slider from "react-slick";
import testimonialData from '../../../data/Testimonials/home-two'
import quote from '../../../assets/img/icons/quote.png'
import SectionTitle from "../../UI/SectionTitle";

const NextArrow = ({className, onClick}) => {
    return <button className={className} onClick={onClick}><i className="fa fa-long-arrow-right"/></button>
};

const PrevArrow = ({className, onClick}) => {
    return <button className={className} onClick={onClick}><i className="fa fa-long-arrow-left"/></button>
};

class Testimonial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        const testSettings = {
            slidesToShow: 1,
            swipeToSlide: true,
            focusOnSelect: true,
            className: "testimonial-content--2",
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>
        };

        return (
            <div className="testimonial-area testimonial-area--2 bg-offwhite sm-top">
                <div className="container">
                    <div className="row d-lg-none">
                        <div className="col-12 text-center">
                            <SectionTitle
                                title="What Sets Kaleb Services Apart"
                                heading="Our specialized training center equips operators with the skills needed to maximize the efficiency and safety of our machinery, complemented by our exceptional customer support team."
                                tagline="Offering a wide spectrum of products from machinery and implements to training and support services, we meet diverse agricultural needs under one roof."
                            />
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <Slider
                                asNavFor={this.state.nav2}
                                ref={slider => (this.slider1 = slider)}
                                arrows={false}
                                className={`testimonial-thumbnail mt-sm-5 mt-md-1`}
                            >
                                {
                                    testimonialData.map(testimonial => (
                                        <div key={testimonial.id}>
                                            <div className="testimonial-thumbnail-item">
                                                <img
                                                    src={`src/assets/img/${testimonial.authorThumb}`}
                                                    alt="Kaleb Service"/>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>

                        <div className="col-md-7 ml-auto">
                            <div className="testimonial-area-right">
                                <div className="d-none d-lg-block">
                                    <SectionTitle
                                        title="Innovative Empowerment"
                                        heading="What Sets Kaleb Services Apart"
                                        tagline="We stand behind the quality and reliability of our products, ensuring they perform optimally and provide long-term value to our clients."
                                    />
                                </div>

                                <div className="testimonial-content-wrap pl-0">
                                    <Slider
                                        asNavFor={this.state.nav1}
                                        ref={slider => (this.slider2 = slider)}
                                        {...testSettings}
                                    >
                                        {
                                            testimonialData.map(testiItem => (
                                                <div key={testiItem.id}>
                                                    <div className="testimonial-item testimonial-item--2">
                                                        <div className="testimonial-txt">
                                                            <img src={quote} alt="Businex"/>
                                                            <p>{testiItem.quote}</p>
                                                            <h5 className="client-name">{testiItem.author}, <span
                                                                className="designation">{testiItem.designation}</span>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonial;