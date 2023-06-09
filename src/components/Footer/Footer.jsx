import { Link } from "react-router-dom";
import FooterLogo from "../../assets/images/logo/logo_full.png";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <footer className="bg-black">
        <div className="container page-padding py-[10rem] text-white">
          {/* footer div all */}
          <div className="flex justify-between min620:flex-col min620:items-center min620:text-center min620:gap-[5rem] !text-left">
            {/* logo side */}
            <div className="flex flex-col gap-8 w-5/12 min620:w-full min620:justify-center min620:text-center">
              <img
                src={FooterLogo}
                alt="footer_logo"
                className="w-[18rem] min620:self-center"
              />
              <p className="text-[15px] font-medium text-[#646464]">
                {t("aboutUs.shortDescription")}
              </p>
              <p className="text-[16px] font-medium text-[#646464]">
                Privacy Policy | © {new Date().getFullYear()} CT Fusão das Lutas{" "}
                <br /> Design by{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={t("defaults.brunoLink")}
                >
                  Bruno Leite
                </a>
              </p>
            </div>

            {/* middle div */}
            <Link
              id="services"
              to="/services"
              className="flex flex-col gap-5 relative w-3/12 min620:w-full text-center"
            >
              <p className="text-[22px] font-bold underline underline-offset-8 decoration-4 decoration-secondary">
                {t("services.featTitle")}
              </p>

              <p className="text-[16px] text-[#646464] font-medium">
                {t("services.serv1")}
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                {t("services.serv2")}
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                {t("services.serv3")}
              </p>
            </Link>

            {/* right div */}
            <Link
              id="contact"
              to="/contact"
              className="flex flex-col gap-5 relative w-4/12 min620:w-full text-center"
            >
              <p className="text-[22px] font-bold underline underline-offset-8 decoration-4 decoration-secondary">
                {t("contactUs.hours")}
              </p>

              <p className="text-[16px]  text-[#646464] font-bold">
                {t("contactUs.lineTitle1")}:
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                {t("contactUs.line1")}
              </p>
              <p className="text-[16px] text-[#646464] font-bold ">
                {t("contactUs.lineTitle2")}:
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                {t("contactUs.line2")}
              </p>
            </Link>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
