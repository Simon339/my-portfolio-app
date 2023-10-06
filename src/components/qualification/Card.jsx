import React, { useState } from 'react';

const Card = (props) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className="qualifications_item">
            <div className="qualification_header" onClick={() => setShowInfo(!showInfo)}>
                <h3 className="qualification_subtitle">{props.title}</h3>
                <span className="qualification_icon">{showInfo ? '-' : '+'}</span>
            </div>

            <div className={`${showInfo ? 'show-content' :  ''} qualification_content`}>
                <div className="qualification_date-title">
                    <h3 className="qualification_title">{props.subtitle}</h3>
                    <span className="qualification_date text-cs">{props.date}</span>
                </div>

                <p className="qualfifcation_description">{props.description}</p>
            </div>
        </div>
    )
}

export default Card