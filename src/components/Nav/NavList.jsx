import { NavLink } from "react-router-dom";

function NavList({ t }) {
  return (
    <>
      <ul className={`flex gap-9 text-[16px] font-medium xl:none`}>
        <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-secondary"
        >
          <NavLink id="home" exact="true" activeclassname="active" to="/">
            {t("nav.home")}
          </NavLink>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-secondary"
        >
          <NavLink id="about" exact="true" activeclassname="active" to="/about">
            {t("nav.about")}
          </NavLink>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-secondary"
        >
          <NavLink
            id="schedule"
            exact="true"
            activeclassname="active"
            to={"/schedule"}
          >
            {t("nav.schedule")}
          </NavLink>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-secondary"
        >
          <NavLink
            id="services"
            exact="true"
            activeclassname="active"
            to={"/services"}
          >
            {t("nav.services")}
          </NavLink>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-secondary"
        >
          <NavLink
            id="gallery"
            exact="true"
            activeclassname="active"
            to={"/gallery"}
          >
            {t("nav.gallery")}
          </NavLink>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className="cursor-pointer hover:text-secondary"
        >
          <NavLink
            id="contact"
            exact="true"
            activeclassname="active"
            to={"/contact"}
          >
            {t("nav.contact")}
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default NavList;
