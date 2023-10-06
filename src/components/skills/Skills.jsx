import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Other from "./Other";
import MobileDeveloper from "./Mobile";
import DataScience from "./Data scientist";



const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skils</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills_container container grid">
                <Frontend />
                <MobileDeveloper />
                <DataScience />
                <Other />
            </div>
        </section>
    );
};

export default Skills;


