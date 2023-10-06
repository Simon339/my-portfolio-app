import React from "react";
 
const other = () => {
    return (
        <div className="skills_content">
        <h3 className="skills_title">Other</h3>

        <div className="skills_box">
            <div className="skills_group">
                <div className="skills_data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills_name">Git</h3>
                    <span className="skills_level">Intermediate</span>
                </div>

                </div>
                <div className="skills_data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills_name">Huawei 5G</h3>
                    <span className="skills_level">Begginer</span>
                </div>
                </div>
            </div>

            <div className="skills_group">
            <div className="skills_data">
                <i className='bx bx-badge-check'></i>
                <div>
                    <h3 className="skills_name">GitHub</h3>
                    <span className="skills_level">Intermediate</span>
                </div>
                </div>
            </div>
        </div>
     </div>
    )
}

export default other