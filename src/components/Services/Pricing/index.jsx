import TitleRed from "../../../assets/images/shared/paint-stroke-gold.svg";
import PricingBox from "./PricingBox";

import Img1 from "../../../assets/images/services/jiujitsu2.png";
import Img2 from "../../../assets/images/services/muaythai1.png";
import Img3 from "../../../assets/images/services/jiuthai.png";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();
  return (
    <div className="w-screen bg-slate-200 py-10">
      <div className="pricing-section container page-padding relative bg-white shadow-lg rounded-xl">
        <div className="container page-padding py-10">
          {/* title div -- */}
          <div className="flex flex-col text-center relative items-center">
            <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8">
              preços
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[23rem] absolute -top-[10px] "
            />

            <h2 className="text-[3.4rem] text-black font-bold my-5 min620:text-[2.5rem]">
              Planos Mensais
            </h2>
            <p className="text-[#646464] font-medium text-[15px] ">
              Gymat an unknown printer took a galley of type and scrambled
              <br /> make a type specimen book.
            </p>
          </div>
          {/* pricing boxes */}
          <div className="flex gap-10 mt-10 relative md1000:flex-col md1000:items-center">
            <PricingBox img={Img1} price="99" service={t("services.serv1")} />
            <PricingBox img={Img2} price="99" service={t("services.serv2")} />
            <PricingBox
              img={Img3}
              price="149"
              service={`${t("services.serv1")} e ${t("services.serv2")}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
