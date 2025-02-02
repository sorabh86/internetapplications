import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";

function Footer() {
  return (
    <div className="footer">

      <span>&copy; Copyright at Internet Applications</span>
      
      <div className="ml-auto">
        <NavLink to="/" className="link-btn">home</NavLink> | 
        <NavLink to="/about" className="link-btn">about</NavLink> | 
        <NavLink to="/work" className="link-btn">work</NavLink> | 
        <NavLink to="/analysis" className="link-btn">analysis</NavLink> | 
        <NavLink to="/design" className="link-btn">design</NavLink> | 
        <NavLink to="/development" className="link-btn">development</NavLink>
    </div>
      <a
        className="link-btn ml-auto"
        href="https://sorabh86.github.io"
      >
        <FontAwesomeIcon icon={faGlobe} /> Sorabh86 - Web | App Dev
      </a>
    </div>
  );
}

export default Footer;
