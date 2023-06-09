import qualityImg from "../../../assets/images/home/quality.svg";
import priceImg from "../../../assets/images/home/price.svg";
import progressionImg from "../../../assets/images/home/progression.svg";
import { useTranslation } from "react-i18next";

function AboutCarts() {
  const { t } = useTranslation();
  return (
    <>
      <div className="card-item-div text-slate-800 hover:text-slate-200 flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-xl min-h-[340px] w-full md1000:min-h-[260px]">
        <img src={qualityImg} alt="box_img" className="w-[75px] mb-4" />
        <h1 className="text-[3rem] min620:text-[2.4rem] font-bold uppercase mb-7">
          {t("home.about.quality.title")}
        </h1>
        <p className="text-[15px] font-medium leading-2 w-full">
          {t("home.about.quality.description")}
        </p>
      </div>

      <div className="card-item-div text-slate-800 hover:text-slate-200 flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-xl min-h-[340px] w-full md1000:min-h-[260px]">
        <img src={progressionImg} alt="box_img" className="w-[75px] mb-4" />
        <p className="text-[3rem] min620:text-[2.4rem] font-bold uppercase mb-7">
          {t("home.about.space.title")}
        </p>
        <p className="text-[15px] font-medium leading-2 w-full">
          {t("home.about.space.description")}
        </p>
      </div>

      <div className="card-item-div text-slate-800 hover:text-slate-200 flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-xl min-h-[340px] w-full md1000:min-h-[260px]">
        <img src={priceImg} alt="box_img" className="w-[75px] mb-4" />
        <p className="text-[3rem] min620:text-[2.4rem] font-bold uppercase mb-7">
          {t("home.about.price.title")}
        </p>
        <p className="text-[15px] font-medium leading-2 w-full">
          {t("home.about.price.description")}
        </p>
      </div>
    </>
  );
}

export default AboutCarts;
