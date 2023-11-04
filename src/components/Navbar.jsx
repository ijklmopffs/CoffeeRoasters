import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo.svg";
import hamburger from "../../assets/shared/mobile/icon-hamburger.svg";
import close from "../../assets/shared/mobile/icon-close.svg";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="flex items-center relative justify-between p-4">
        <div>
          <img src={logo} alt="" />
        </div>
        <div
          className={
            nav
              ? "uppercase absolute md:static flex flex-col md:flex-row bg-white md:bg-transparent left-0 top-20 z-10 h-[50vh] w-screen md:h-auto md:w-auto hover:text-[#333d4b] items-center gap-8 font-barlow text-2xl md:text-xs font-bold"
              : "uppercase absolute md:static flex flex-col md:flex-row bg-white md:bg-transparent left-[-100%] top-20 z-10 h-[50vh] w-screen md:h-auto md:w-auto hover:text-[#333d4b] items-center gap-8 font-barlow text-2xl md:text-xs font-bold"
          }
        >
          <Link to="/">home</Link>
          <Link to="/about">about us</Link>
          <Link to="/plan">create your plan</Link>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {nav ? <img src={close} alt="" /> : <img src={hamburger} alt="" />}
        </div>
      </nav>
    </>
  );
}
