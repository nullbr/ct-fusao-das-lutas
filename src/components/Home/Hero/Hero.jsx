import "./Hero.css";
import HeroImg from "../../../assets/images/logo/hero.png";
import MainButton from "../../Shared/MainButton";
import { useTranslation } from "react-i18next";
import { FaInstagram } from "react-icons/fa6";

function Hero() {
  const { t } = useTranslation();
  return (
    <div className="hero-section">
      <section className="hero-section w-full h-full flex justify-center text-center min800:flex-col">
        <div className="container-hero">
          {/* hero section */}
          <div className="animate-fade-in flex flex-col text-white justify-center text-center h-full px-20 gap-20">
            <img
              src={HeroImg}
              alt="text_bg"
              className="max-w-full max-h-[40vh] min620:max-h-full"
            />

            <div className="flex w-full justify-center">
              <MainButton
                color="text-white"
                bg="bg-transparent"
                text={t("services.title")}
                goTo="/services"
                arrowColor="text-main"
                hover="hover:bg-white hover hover:text-black"
              />
            </div>
          </div>
        </div>
        {/* socials */}
        <a
          href={t("defaults.instagram")}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-in flex flex-row-reverse -rotate-90 text-white w-fit
          absolute top-1/2 right-0 items-center min800:-rotate-0 min800:static min800:self-center min800:pt-10"
        >
          <p className="uppercase  text-3xl font-bold tracking-widest">
            {t("defaults.followUs")}
          </p>
          <span className="w-[35px] bg-main h-[2.5px] mr-6"></span>
          <div className="text-white gap-7 flex mr-7 ">
            <FaInstagram className="rotate-90 hover:text-secondary text-3xl cursor-pointer ease-in duration-200 min800:rotate-0" />
          </div>
        </a>
      </section>
    </div>
  );
}

export default Hero;
