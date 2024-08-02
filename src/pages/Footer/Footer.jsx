import { FaAngellist, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"
const Footer = () => {
  return (
    <div className="container mx-auto p-4 font-mont ">
      <footer className="footer p-10 text-[#475467]">
        <aside>
          <Link to="/home"><img src={logo} alt="logo" className="w-14"/></Link>
          <p className=" font-medium">
            Design amazing digital experience <br />that create more happy in the world.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-sm">Product</h6>
          <a className="link link-hover text-base font-semibold">Overview</a>
          <a className="link link-hover text-base font-semibold">Features</a>
          <a className="link link-hover text-base font-semibold">Solutions</a>
          <a className="link link-hover text-base font-semibold">Tutorials</a>
          <a className="link link-hover text-base font-semibold">Pricing</a>
          <a className="link link-hover text-base font-semibold">Releases</a>
        </nav>
        <nav>
          <h6 className="footer-title text-sm">Company</h6>
          <a className="link link-hover text-base font-semibold">About us</a>
          <a className="link link-hover text-base font-semibold">Careers</a>
          <a className="link link-hover text-base font-semibold">Press</a>
          <a className="link link-hover text-base font-semibold">News</a>
          <a className="link link-hover text-base font-semibold">Media kit</a>
          <a className="link link-hover text-base font-semibold">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title text-sm">Resources</h6>
          <a className="link link-hover text-base font-semibold">Blog</a>
          <a className="link link-hover text-base font-semibold">Newsletter</a>
          <a className="link link-hover text-base font-semibold">Eents</a>
          <a className="link link-hover text-base font-semibold">Help centre</a>
          <a className="link link-hover text-base font-semibold">Tutorials</a>
          <a className="link link-hover text-base font-semibold">Support</a>
        </nav>
        <nav>
          <h6 className="footer-title text-sm">Social</h6>
          <a className="link link-hover text-base font-semibold">Twitter</a>
          <a className="link link-hover text-base font-semibold">LinkedIn</a>
          <a className="link link-hover text-base font-semibold">Facebook</a>
          <a className="link link-hover text-base font-semibold">Github</a>
          <a className="link link-hover text-base font-semibold">AngelList</a>
          <a className="link link-hover text-base font-semibold">Dribbble</a>
        </nav>
        <nav>
          <h6 className="footer-title text-sm">Legal</h6>
          <a className="link link-hover text-base font-semibold">Terms of use</a>
          <a className="link link-hover text-base font-semibold">Privacy policy</a>
          <a className="link link-hover text-base font-semibold">Cookie policy</a>
        </nav>
      </footer>
      <hr className="bg-[#ECF5FF]"/>
      <footer className="footer items-center p-4">
        <aside className="grid-flow-col items-center">
          <p className="text-neutral-600">Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <Link>
           <FaTwitter className="text-xl text-[#0059B1]"/>
          </Link>
          <Link>
           <FaLinkedin className="text-xl text-[#0059B1]"/>
          </Link>
          <Link>
           <FaFacebook className="text-xl text-[#0059B1]"/>
          </Link>
          <Link>
           <FaAngellist className="text-xl text-[#0059B1]"/>
          </Link>
          
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
