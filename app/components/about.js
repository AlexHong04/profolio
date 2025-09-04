import Experience from '../components/experience'

const About = () => {
    return ( 
        <section id="about" className="about resume">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>About Me</h2>
                </div>
                <div className="row">

                    <Experience />
                </div>
            </div>
        </section>
     );
}
 
export default About;