import React,{Component} from 'react';
import Navbar from './Navbar/Navbar'
import HeaderConfig from './HeaderConfig'
import { Link } from 'react-router-dom';

class Header extends Component{

    componentDidMount() {
        window.addEventListener('scroll', this.isSticky);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.isSticky);
    }

    isSticky = (e)=>{
        const header = document.querySelector('header');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('sticky') : header.classList.remove('sticky');
    };

    render(){
        return (
            <header className="header-area">
                <div className="container">
                    <div className='align-items-center' style={{ display:'flex', alignItems:'center',justifyContent:'space-between' }}>
                        <div className="col-5 col-lg-2">
                            <Link to={'/'} style={{ textDecoration:'none', fontFamily:'sans-serif', fontSize:'25px', lineHeight:'0.8', color:'#00a3cc', fontWeight:'bold' }}>Kaleb Services</Link>
                        </div>

                        <div className="col-lg-7 d-none d-lg-block">
                            <div className="navigation-area mt-lg-3">
                                <Navbar />
                            </div>
                        </div>

                        <div className="col-7 col-lg-3" style={{ justifyItems:'end' }}>
                            <HeaderConfig logRegContentShow={this.props.logRegContentShow} mobileMenuShow={this.props.mobileMenuShow} />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;