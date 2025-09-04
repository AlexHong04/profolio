'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import eduData from '../data/education.json';
import certData from '../data/certification.json';
import CertIcon from '../assets/imgs/certificate-icon.png';

const EducationAndCertification = () => {
    const [education] = useState(eduData);
    const [certification] = useState(certData);

    return ( 
        <section id="eduCert" className="eduCert resume">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Education & Certification</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="resume-title">Education</h3>
                        {
                            education && education.map((edu, index) => {
                                return (
                                    <div className="resume-item" key={'edu_' + index}>
                                        <h4>{edu.course}</h4>
                                        <h5>{edu.duration}</h5>
                                        <p><em>{edu.location}</em></p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-lg-6">
                        <h3 className="resume-title">Certification</h3>
                        {
                            certification && certification.map((cert, index) => {
                                if(!cert.badge){
                                    cert.badge = CertIcon;
                                }

                                return (
                                    <div className="row" key={'cert_' + index} style={{marginBottom: '1rem'}}>
                                        <div className="col-4 col-md-3 col-lg-3 text-center">
                                            <Image src={cert.badge} alt={cert.certificate} width={80} height={80} loading="lazy" />
                                        </div>
                                        <div className="col-8 col-md-9 col-lg-9 text-start" style={{alignSelf: "center"}}>
                                            {
                                                cert.credlyUrl && (
                                                    <Link href={cert.credlyUrl} rel="noopener noreferrer" target="_blank">
                                                        <h6>{cert.certificate}</h6>
                                                    </Link>
                                                )
                                            }
                                            {
                                                !cert.credlyUrl && cert.certUrl && (
                                                    <Link href={cert.certUrl} rel="noopener noreferrer" target="_blank">
                                                        <h6>{cert.certificate}</h6>
                                                    </Link>
                                                )
                                            }
                                            {
                                                !cert.credlyUrl && !cert.certUrl && (
                                                    <h6>{cert.certificate}</h6>
                                                )
                                            }
                                            <span className="d-none d-md-block">{cert.year}</span>
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
 
export default EducationAndCertification;