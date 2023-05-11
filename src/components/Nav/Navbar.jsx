import "./Navbar.css";
import { useState, useEffect } from "react";
import Logo from "../../assets/images/logo/logo_full.png";
import NavList from "../Nav/NavList";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function Navbar({ admin }) {
  const { t } = useTranslation();
  const [sticky, setSticky] = useState(false);
  const [sidebar, setSideBar] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const { scrollY } = useSelector((store) => store.navbar);

  // sidebar
  const toggleSideBar = () => {
    setSideBar(!sidebar);
  };

  // mobile nav
  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  useEffect(() => {
    // sticky navbar - bg black
    const handleScroll = () => {
      if (window.scrollY > scrollY) {
        setSticky(true);
      } else {
        setSticky(false);
      }

      // close tabs if scroll
      setMobileNav(false);
      setSideBar(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <>
      <nav
        className={`flex flex-row items-center justify-between py-4 px-12 fixed top-0 left-0 right-0 w-full z-50 text-white ${
          sticky ? "shadow-xl blur-bg" : "bg-transparent"
        }`}
      >
        <NavLink to="/">
          <img
            src={Logo}
            alt="logo_img"
            className="nav-logo max-h-32 w-auto pr-5"
          />
        </NavLink>
        <div className="navlist-nav">
          <NavList t={t} />
        </div>

        <div className="flex items-center gap-10">
          <div className="flex gap-10">
            <MobileNav
              toggleMobileNav={toggleMobileNav}
              mobileNav={mobileNav}
              t={t}
              admin={admin}
            />

            {/* Show side bar*/}

            <div
              className={`absolute w-[40rem] h-screen z-[9999999999] ease-in-out duration-200 top-0 ${
                sidebar ? "left-0" : "-left-[100%]"
              }`}
            >
              {sidebar && (
                <>
                  <Sidebar
                    toggleSideBar={toggleSideBar}
                    sidebar={sidebar}
                    t={t}
                  />
                  {/* Allow user to click outside the box to close */}
                </>
              )}
            </div>

            {/* mobileNav */}
            <i
              onClick={toggleMobileNav}
              className={`fa-bars fa-solid hidden text-4xl cursor-pointer hover:text-signature-gold ease-in duration-200`}
            ></i>

            {/* sidebar */}

            <i
              onClick={toggleSideBar}
              className={`fa-regular fa-chart-bar text-4xl cursor-pointer hover:text-signature-gold ease-in duration-200`}
            ></i>
          </div>
          {/* spin box */}

          <div
            className={`border-solid border-2  p-2 rounded-md min620:hidden border-[rgb(255,255,255,0.3)]`}
          >
            <a
              href={`https://wa.me/${t(
                "contactUs.phoneNumberInteger"
              )}?text=Ol%C3%A1%21+gostaria+de+agendar+uma+visita.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center "
            >
              <i
                className={`fa-solid fa-plus bg-signature-gold text-2xl py-3 px-4 rounded-md nav-btn-hover `}
              ></i>
              <h3
                className={`text-[14px] font-bold uppercase ml-4 mr-8 tracking-wider`}
              >
                {t("nav.scheduleFull")}
              </h3>
            </a>
          </div>
        </div>
      </nav>
      {(sidebar || mobileNav) && (
        <div
          className="animate-fade-in absolute h-screen w-screen top-0 left-0 z-10 cursor-pointer bg-transparent-gray"
          onClick={sidebar ? toggleSideBar : toggleMobileNav}
        ></div>
      )}
    </>
  );
}

export default Navbar;