import { useEffect } from "react";
import LogoSide from "../../assets/images/logo/logo_full.png";
import {
  FaEnvelope,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaXmark,
} from "react-icons/fa6";

const Sidebar = ({ toggleSideBar, t }) => {
  useEffect(() => {
    const div = document.getElementById("sidebarGallery");
    const script = document.createElement("script");

    script.setAttribute(
      "src",
      "https://www.juicer.io/embed/ctam_fusaodaslutas/embed-code.js?style=slider&columns=1&interval=1000"
    );
    script.setAttribute("async", "");
    script.setAttribute("defer", "");
    div.appendChild(script);

    return () => {
      div.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="flex">
        {/* Content */}
        <div className="blur-bg flex flex-col w-[40rem] max-w-full h-screen shadow-xl py-10 px-[45px] min620:pb-[20rem] gap-24 overflow-x-hidden">
          {/* logo & X */}
          <div className="flex justify-between items-center">
            <img
              src={LogoSide}
              alt="logo_img"
              className="w-2/3 max-w-[30rem]"
            />
            <FaXmark
              className="text-main w-10 h-auto cursor-pointer"
              onClick={toggleSideBar}
            />
          </div>
          {/* about us */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[2rem] font-bold">{t("aboutUs.title")}</h3>
            <p className="text-[1.6rem] font-medium text-slate-400">
              {t("aboutUs.shortDescription")}
            </p>
          </div>
          {/* gallery */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[2rem] font-bold">{t("nav.gallery")}</h3>
            <div id="sidebarGallery" className="w-full"></div>
          </div>
          {/* contact */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[2rem] font-bold">{t("contactUs.title")}</h3>
            <a
              href={t("contactUs.addressUrl")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-[1.6rem] font-medium text-slate-400 hover:text-secondary cursor-pointer ease-in duration-200 flex items-center">
                <FaLocationDot className="text-main w-8 h-auto" />
                <p>
                  &nbsp; {t("contactUs.addressLine1")}
                  <br />
                  {t("contactUs.addressLine2")}
                </p>
              </div>
            </a>
            <a
              href={`https://wa.me/${t(
                "contactUs.phoneNumberInteger"
              )}?text=Ol%C3%A1%21+gostaria+de+agendar+uma+aula+experimental`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex items-center text-[1.6rem] font-medium text-slate-400 hover:text-secondary cursor-pointer ease-in duration-200">
                <FaPhone className="text-main" />
                &nbsp; {t("contactUs.phoneNumber")}
              </p>
            </a>
            <a href={`mailto:${t("contactUs.email")}`}>
              <p className="text-[1.6rem] font-medium text-slate-400 hover:text-secondary cursor-pointer ease-in duration-200 flex items-center">
                <FaEnvelope className="text-main" />
                &nbsp; {t("contactUs.email")}
              </p>
            </a>
          </div>
          {/* follow us */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[2rem] font-bold">{t("defaults.followUs")}</h3>
            <div className="flex gap-5">
              <span className="bg-main rounded-full py-[10px] px-[13px] cursor-pointer">
                <a
                  href={t("defaults.instagram")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-[2.2rem] text-white" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
