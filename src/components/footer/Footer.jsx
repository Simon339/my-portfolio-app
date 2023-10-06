import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Malesela</h1>

                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer_link">Projects</a>
                    </li>
                    <li>
                        <a href="#testimonials" className="footer_link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer_social">
                    <a href="https://github.com/Simon339" className="footer_social-link">
                        <i className="bx bxl-github"></i>
                    </a>
                    <a href="https://www.facebook.com/tshepo.cool.908/" className="footer_social-link">
                        <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/tshepohotmail00/" className="footer_social-link">
                    <i class='bx bxl-instagram-alt'></i>
                    </a>
                    <a href="https://www.linkedin.com/in/Simon Malesela" className="footer_social-link">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                </div>

                <span className="footer_copy">
                    &#169; Simon339. All rights reserved
                </span>
            </div>
        </footer>
    );
};

export default Footer;