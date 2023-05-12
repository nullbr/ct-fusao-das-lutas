import { useLocation } from "react-router-dom";
import TitleBg from "../../assets/images/shared/paint-stroke-gold.svg";
import Hero from "../../assets/images/logo/hero.png";
import MainButton from "../Shared/MainButton";

import { useTranslation } from "react-i18next";

function AboutSection() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <div className="bg-white shadow-lg rounded-xl">
      <div className="grid grid-cols-2 md1000:grid-cols-1 items-center">
        {/* text section */}
        <div className="p-10">
          {/* Title */}
          <div className="pt-10 min800:pt-0">
            <p className="text-white text-[15px] text-center relative z-10 uppercase font-bold">
              {t("aboutUs.title")}
            </p>
            <img
              src={TitleBg}
              alt="text_bg"
              className="w-[200px] relative -top-[30px] left-[50%] -translate-x-[50%]"
            />
          </div>
          <h2 className="text-[3.4rem] text-center font-bold min620:text-[2.5rem]">
            {t("aboutUs.subtitle")}
          </h2>
          <p className="text-[16px] text-[#646464] font-medium text-justify">
            {t("aboutUs.description")}
          </p>
          <div className="flex w-full justify-center mt-10">
            <MainButton
              color="text-main"
              bg="bg-transparent"
              cN="mt-10"
              hover="hover:bg-main hover:text-white"
              text={
                location.pathname === "/about"
                  ? t("contactUs.title")
                  : t("aboutUs.title")
              }
              goTo={location.pathname === "/about" ? "/contact" : "/about"}
            />
          </div>
        </div>
        {/* img side */}
        <div className="flex h-full md1000:w-full justify-center p-10">
          <img
            src={Hero}
            alt="trainer"
            className="rounded-r-xl md1000:rounded-b-xl md1000:rounded-none"
          />
        </div>
      </div>
    </div>
  );
}
export default AboutSection;
