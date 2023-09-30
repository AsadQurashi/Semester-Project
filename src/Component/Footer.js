import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';
import '../Style/Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container" id='Link'>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="col-6 col-md-3">
                        <h6>Categories</h6>
                        <ul className="footer-links ">
                            <li>Diamond</li>
                            <li>Gold</li>
                            <li>Silver</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li><Link to="#">About Us</Link></li>
                            <li><Link to="#">Contact Us</Link></li>
                            <li><Link to="#">Privacy Policy</Link></li>
                            <li><Link to="#">FAQ</Link></li>
                        </ul>
                    </div>
                </div>
                <hr className="small" />
            </div>
            <div className="container" id='Logo_Favicon'>
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-12">
                        <p className="copyright-text">Copyright © 2020 All Rights Reserved by
                            <Link to="/"><span className="logo"> Larient Fine Jewelry.</span></Link>
                        </p>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <ul className="social-icons">
                            <li><Link className="facebook" to="#"><FontAwesomeIcon icon={faFacebook} /></Link></li>
                            <li><Link className="twitter" to="#"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                            <li><Link className="dribbble" to="#"><FontAwesomeIcon icon={faInstagramSquare} /></Link></li>
                            <li><Link className="linkedin" to="#"><FontAwesomeIcon icon={faAmazon} /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
