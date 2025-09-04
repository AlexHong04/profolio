'use client';
import { useState } from "react";
import data from '../data/personal.json';

const Footer = () => {
    const [personal] = useState(data);

    return ( 
        <footer id="footer">
            <div className="container">
                <h4>{personal.name}</h4>
                <div className="social-links">
                    {
                        personal.socials && personal.socials.map((social, index) => {
                            return (
                                <a href={social.url} className={social.name} key={'social_' + index} target="_blank"><i className={social.icon}></i></a>
                            )
                        })
                    }
                </div>
                <div className="copyright">&copy; Copyright <strong><span>{(new Date().getFullYear())}</span></strong>. All Rights Reserved</div>
            </div>
        </footer>
     );
}
 
export default Footer;