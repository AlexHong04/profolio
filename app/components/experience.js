'use client';
import { useState } from "react";
import data from '../data/experiences.json';

const Experience = () => {
    const [experiences] = useState(data);

    return ( 
        <div className="col-lg-8">
            <h3 className="resume-title">Working Experience</h3>
            {
                experiences && experiences.map((exp, index) => {
                    return (
                        <div className="resume-item" key={'exp_' + index}>
                            <h4>{exp.title}</h4>
                            <h5>{exp.year}</h5>
                            <p><em>{exp.company}</em></p>
                            {
                                exp.description && (
                                    <ul>
                                        {
                                            exp.description.map((des, index) => {
                                                return (
                                                    <li key={index}>{des}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                )
                            }
                        </div>
                    )
                })
            }                       
        </div>
     );
}
 
export default Experience;