import { Link } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo-light.svg";
import twitter from "../../assets/shared/desktop/icon-twitter.svg";
import facebook from "../../assets/shared/desktop/icon-facebook.svg";
import instagram from "../../assets/shared/desktop/icon-instagram.svg";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col lg:flex-row gap-10 lg:gap-0 bg-[#2c343e] my-10 items-center justify-between p-8">
        <div>
          <img src={logo} alt="" />
        </div>
        <div
          className="uppercase flex flex-col md:flex-row items-center gap-8 font-barlow 
        text-xs text-[#979797] font-bold"
        >
          <Link to="/" className="hover:text-white">
            home
          </Link>
          <Link to="/about" className="hover:text-white">
            about us
          </Link>
          <Link to="/plan" className="hover:text-white">
            create your plan
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <img src={facebook} alt="" className="w-4" />
          <img src={twitter} alt="" className="w-4" />
          <img src={instagram} alt="" className="w-4" />
        </div>
      </footer>
    </>
  );
}
