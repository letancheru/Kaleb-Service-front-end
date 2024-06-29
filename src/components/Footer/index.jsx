import React from 'react';
import Text from "../UI/Text";
import Widget from "../UI/Widget";
import List from "../UI/List";
import LI from "../UI/List/Item";
import {Link} from "react-router-dom";
import Logo from '../../assets/img/logo-dark.png'

function Footer() {
    return (
        <footer className="footer-area sp-bottom">
            <div className="container">
                <div className="row mtn-40">
                    <div className="col-lg-4 order-4 order-lg-0">
                        <div className="widget-item">
                            <div className="about-widget">
                                <Link to={"/"}>
                                    <img src={Logo} alt="Logo"/>
                                </Link>

                                <Text>
                                Conducive Government policy, the growth Agree business and ongoing privatization of state farms paved a way for the flourishing of commercial farming Cooperatives and small Holder Farm Mechanization.
                                </Text>

                                <Text classes="copyright-txt">
                                    &copy; {new Date().getFullYear()} Kaleb Services Ltd. All Rights Reserved.
                                </Text>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-2 ml-auto" style={{ textDecoration:'none' }}>
                        <Widget title="Information">
                            <List classes="widget-list" >
                                <LI><Link to={"/about"}>Our company</Link></LI>
                                <LI><Link to={"/contact"}>Contact us</Link></LI>
                                <LI><Link to={"/services"}>Our services</Link></LI>
                                <LI><Link to={"/services"}>Our Products</Link></LI>
                                <LI><Link to={"/services"}>Our Teams</Link></LI>
                                
                            </List>
                        </Widget>
                    </div>

                    <div className="col-md-4 col-lg-2 ml-auto">
                        <Widget title="Social Links">
                            <List classes="widget-list">
                                <LI><Link to="https://facebook.com/hasthemes/" target={'_blank'}>Facebook</Link></LI>
                                <LI><Link to="https://twitter.com/hasthemes/" target={'_blank'}>Twitter</Link></LI>
                                <LI><Link to="https://dribbble.com/hastech/" target={'_blank'}>Linkedin</Link></LI>
                                <LI><Link to="https://www.instagram.com/" target={'_blank'}>Instagram</Link></LI>
                            </List>
                        </Widget>
                    </div>

                    <div className="col-md-4 col-lg-3">
                        <Widget title="Contact Us">
                            <address>
                            Akaki-Kality Sub-city, Kebele-10 , House No. 9999/1 Debreziet Road, Kaleb Building Addis Ababa Ethiopia <br/>
                                https:kalebservice.com <br/>
                                tesfayegm@kalebservice.com<br/>
                                (+251-011) 439 36 74<br/>
                                 (+251-011) 439 36 53<br/>
                                 
                            </address>
                        </Widget>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;