import React, { useState } from "react";
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="services_container section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="services_container container grid">
                <div className="services_content">
                    <div>
                        <i className="uil uil-web-grid services_icon"></i>
                        <h3 className="services_title">
                            Product <br /> Designer
                        </h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(1)}>View More
                    <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ?"services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                            <h3 className="services_modal-title">
                                Product Designer
                            </h3>
                            <p className="services_modal-description">Service with more than 1 year of experience.
                            Providing quality work to clients and companies.
                            </p>

                            <ul className="services_modal-services">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        I do Sketch drafts.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                    Improve the design of existing products
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Website developer.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        I create UI developer.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Produce prototypes and test functionality.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Design and mockups of products for companies.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-arrow services_icon"></i>
                        <h3 className="services_title">
                            Ui/Ux <br /> Designer
                        </h3>
                    </div>

                    <span onClick={() => toggleTab(2)} className="services_button">View More
                    <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                            <h3 className="services_modal-title">
                            Ui/Ux Designer
                            </h3>
                            <p className="services_modal-description">Service with more than 1 year of experience.
                            Providing quality work to clients and companies.
                            </p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        I develop Website.
                                    </p>
                                </li>

                                <li className="services_modal-services">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        I develop the user Interface.
                                    </p>
                                </li>

                                <li className="services_modal-services">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Flyers.
                                    </p>
                                </li>

                                <li className="services_modal-services">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                    Test products.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-edit services_icon"></i>
                        <h3 className="services_title">
                            Visual <br /> Designer
                        </h3>
                    </div>

                    <span onClick={() => toggleTab(3)} className="services_button">View More
                    <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                            <h3 className="services_modal-title">
                            Visual Designer
                            </h3>
                            <p className="services_modal-description">Service with more than 1 year of experience.
                            Providing quality work to clients and companies.
                            </p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-services">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Design interfaces for web and mobile applications
                                    </p>
                                </li>

                                <li className="services_modal-services">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Design production assets.
                                    </p>
                                </li>

                                <li className="services_modal-services">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Design logo.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>    
            </div>
        </section>
    )
}

export default Services