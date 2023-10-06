import React from 'react';
import './Card';
import "./qualification.css";
import { cv } from './Data';
import Card from './Card';

const Qualification = () => {
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualifications</h2>
            <span className="section__subtitle">My Personnal Journey</span>

            <div className="qualification_container container grid">
                <div className="qualification_group">
                    <h3 className="qualification_heading">Education</h3>

                    <div className="qualifications_items">
                        {cv.map((val, id) => {
                            if(val.category === 'education') {
                                return(
                                    <Card 
                                    key={id} 
                                    title={val.title} 
                                    subtitle={val.subtitle} 
                                    date={val.date} 
                                    description={val.description} 
                                    />
                                );
                            }
                        })}
                    </div>
                </div>

                <div className="qualification_group">
                    <h3 className="qualification_heading">Online Certificate</h3>

                    <div className="qualifications_items">
                        {cv.map((val, id) => {
                            if(val.category === 'online certificate') {
                                return(
                                    <Card 
                                    key={id} 
                                    title={val.title} 
                                    subtitle={val.subtitle} 
                                    date={val.date} 
                                    description={val.description} 
                                    />
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;