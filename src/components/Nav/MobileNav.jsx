import { FaPlus, FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const MobileNav = ({ toggleMobileNav, mobileNav, t }) => {
  return (
    <div
      className={`absolute w-[20rem] max-w-full h-screen z-[9999999999] ease-in-out duration-500 top-0 ${
        mobileNav ? "right-0" : "-right-[100%]"
      }`}
    >
      <div className="flex">
        <div className="blur-bg flex justify-end h-screen py-[3rem] px-10 w-full">
          {/* links */}
          <ul className="flex flex-col gap-10 text-center w-full items-center">
            <FaXmark
              className="text-secondary w-10 h-auto text-end pb-10"
              onClick={toggleMobileNav}
            />

            {/* Client nav Links */}
            <li onClick={toggleMobileNav}>
              <NavLink
                id="home"
                exact="true"
                activeclassname="active"
                className="text-[2rem] font-medium"
                to="/"
              >
                {t("nav.home")}
              </NavLink>
            </li>
            <li onClick={toggleMobileNav}>
              <NavLink
                id="about"
                exact="true"
                activeclassname="active"
                className="text-[2rem] font-medium"
                to="/about"
              >
                {t("nav.about")}
              </NavLink>
            </li>
            <li onClick={toggleMobileNav}>
              <NavLink
                id="schedule"
                exact="true"
                activeclassname="active"
                className="text-[2rem] font-medium"
                to="/schedule"
              >
                {t("nav.schedule")}
              </NavLink>
            </li>
            <li onClick={toggleMobileNav}>
              <NavLink
                id="services"
                exact="true"
                activeclassname="active"
                className="text-[2rem] font-medium"
                to="/services"
              >
                {t("nav.services")}
              </NavLink>
            </li>
            <li onClick={toggleMobileNav}>
              <NavLink
                id="gallery"
                exact="true"
                activeclassname="active"
                className="text-[2rem] font-medium"
                to="/gallery"
              >
                {t("nav.gallery")}
              </NavLink>
            </li>
            <li onClick={toggleMobileNav}>
              <NavLink
                id="contact"
                exact="true"
                activeclassname="active"
                className="text-[2rem] font-medium"
                to="/contact"
              >
                {t("nav.contact")}
              </NavLink>
            </li>

            {/* spin box */}
            <li className="invisible min620:visible border-solid border-2 rounded-md border-[rgb(255,255,255,0.3)] py-3 px-4">
              <a
                href={t("defaults.scheduleLink")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 items-center justify-center text-center"
              >
                <h3 className="text-[14px] font-bold uppercase tracking-wider">
                  {t("nav.scheduleFull")}
                </h3>
                <div className="bg-secondary shadow-white w-full flex items-center justify-center shadow-sm">
                  <FaPlus className="w-8 h-auto rounded-md py-3" />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileNav;
