import { NavLink } from "react-router-dom";

const MobileNav = ({ toggleMobileNav, mobileNav, t, admin }) => {
  return (
    <div
      className={`absolute w-[20rem] max-w-full h-screen z-[9999999999] ease-in-out duration-500 top-0 ${
        mobileNav ? "right-0" : "-right-[100%]"
      }`}
    >
      <div className="flex">
        <div className="blur-bg flex justify-end w-full h-screen py-[3rem] pr-[3rem]">
          {/* links */}
          <ul className="flex flex-col gap-10 text-end">
            <i
              onClick={toggleMobileNav}
              className="fa-solid fa-xmark text-main text-[3.3rem] cursor-pointer"
            ></i>

            {/* Client nav Links */}
            <li onClick={toggleMobileNav}>
              <NavLink
                id="home"
                exact="true"
                activeclassname="active"
                className="text-[2rem] font-medium hover:text-secondary ease-in duration-200"
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
                className="text-[2rem] font-medium hover:text-secondary ease-in duration-200"
                to="/about"
              >
                {t("nav.about")}
              </NavLink>
            </li>
            {/* <li onClick={toggleMobileNav}>
                  <NavLink
                    className="text-[2rem] font-medium hover:text-secondary ease-in duration-200"
                    to="/schedules/monday"
                  >
                    {t("nav.schedules")}
                  </NavLink>
                </li> */}
            <li onClick={toggleMobileNav}>
              <NavLink
                id="gallery"
                exact="true"
                activeclassname="active"
                className="text-[2rem] font-medium hover:text-secondary ease-in duration-200"
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
                className="text-[2rem] font-medium hover:text-secondary ease-in duration-200"
                to="/contact"
              >
                {t("nav.contact")}
              </NavLink>
            </li>
            <li onClick={toggleMobileNav}>
              <NavLink
                id="services"
                exact="true"
                activeclassname="active"
                className="text-[2rem] font-medium hover:text-secondary ease-in duration-200"
                to="/services"
              >
                {t("nav.services")}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileNav;
