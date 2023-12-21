import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
const Footer = () => {

    const currentYear = new Date().getFullYear()

  return (
    <div className="mt-8">
      <footer className="footer footer-center p-10 bg-cyan-600 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <Link to='/about' className="text-white text-xl font-semibold">About Me</Link>
          <Link to='/contact' className="text-white text-xl font-semibold">Contact Me</Link>
         
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://github.com/sumitrapaul">
            <FaGithub className="text-xl"></FaGithub>
            </a>
            <a href="https://www.linkedin.com/in/sumitra-paul-400065285/">
            <FaLinkedinIn className="text-xl"></FaLinkedinIn>
            </a>
            <a href="https://windy-turkey.surge.sh/">
            <CgProfile className="text-xl"></CgProfile>
            </a>
          </div>
        </nav>
        <aside>
          <p className="text-white">Copyright © {currentYear} - All right reserved by SCC Technovision Inc.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
