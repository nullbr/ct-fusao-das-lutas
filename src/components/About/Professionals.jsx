import TitleBg from "../../assets/images/shared/paint-stroke-gold.svg";
import Trainer from "../../assets/images/AboutPage/trainer.png";
import { FaInstagram } from "react-icons/fa6";

function Professionals({ t }) {
  return (
    <div className="py-20 px-10 bg-white shadow-lg rounded-xl flex flex-col gap-20">
      {/* title div -- */}
      <div className="flex flex-col items-center text-center relative self-center">
        <p className="text-white relative z-10 text-[16px] uppercase font-bold mb-10">
          {t("aboutUs.team.title")}
        </p>
        <img
          src={TitleBg}
          alt="text_bg"
          className="w-[21rem] relative -top-[55px] -mb-10"
        />

        <h2 className="text-[3.4rem] font-bold mb-4 min620:text-[2.5rem]">
          {t("aboutUs.team.subtitle")}
        </h2>
        <p className="text-[#646464] font-medium text-[15px] max-w-[900px] ">
          {t("aboutUs.team.description")}
        </p>
      </div>

      {/* professionals div -- */}
      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col justify-center text-white overflow-hidden rounded-2xl shadow-xl">
          {/* professional img */}
          <img
            src={Trainer}
            alt="professional"
            style={{ transition: "all 0.3s" }}
            className={`object-cover self-center hover:contrast-150`}
          />
          {/* professional description */}
          <div className="flex flex-col gap-2 items-center justify-center bg-gray text-center px-5 border-b-4 border-main h-[16rem]">
            <h3 className="font-bold text-[2.4rem] ">
              {t("aboutUs.team.trainer")}
            </h3>
            <p className="font-medium text-[1.5rem]">{t("aboutUs.team.job")}</p>
            <a
              href={t("defaults.instagram")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full justify-center mt-5 text-[1.6rem]"
            >
              <FaInstagram />
              <span className="text-sm pl-1">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Professionals;
