'use client';
import { useEffect, useState } from 'react';
import data from '../data/technicalSkill.json';

const TechnicalSkills = () => {
    const [skills] = useState(data);

    useEffect(() => {
        require('waypoints/lib/noframework.waypoints.min.js');
        const select = (el, all = false) => {
            el = el.trim()
            if (all) {
              return [...document.querySelectorAll(el)]
            } else {
              return document.querySelector(el)
            }
          }

        let skilsContent = select('.skills-content');
        if (skilsContent) {
            let waypoints = new Waypoint({
                element: skilsContent,
                handler: function(direction) {
                    let progress = select('.progress .progress-bar', true);
                    progress.forEach((el) => {
                        el.style.width = el.getAttribute('aria-valuenow') + '%'
                    });
                },
                offset: '80%'
            });
            return () => {
                waypoints.destroy();
            };
        }
    }, []);

    return ( 
        <section id="technicalSkill" className="skills section-bg" style={{marginBottom: '200px'}}>
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                  <h2>Technical Skills</h2>
              </div>
              <div className="row skills-content">
                <div className="col-lg-6">
                  {
                      skills && skills.slice(0, Math.ceil(skills.length / 2)).map((skill, index) => {
                          return(
                            <div className="progress" key={'skill_' + index}>
                              <span className="skill">{skill.skill}<i className="val">{skill.percentage}%</i></span>
                              <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={skill.percentage} aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          )
                      })
                  }
                </div>
                <div className="col-lg-6">
                  {
                      skills && skills.slice(Math.ceil(skills.length / 2)).map((skill, index) => {
                          return(
                            <div className="progress" key={'skill_' + index}>
                              <span className="skill">{skill.skill}<i className="val">{skill.percentage}%</i></span>
                              <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={skill.percentage} aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          )
                      })
                  }
                </div>
              </div>
            </div>
        </section>
    );
}
 
export default TechnicalSkills;