const Header = () => {
    return ( 
        <header id="header" className="d-flex flex-column justify-content-center">
            <nav id="navbar" className="navbar nav-menu">
                <ul>
                    <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                    <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About Me</span></a></li>
                    <li><a href="#eduCert" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Education & Certification</span></a></li>
                    <li><a href="#technicalSkill" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Technical Skills</span></a></li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;