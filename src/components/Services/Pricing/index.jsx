import TitleRed from "../../../assets/images/shared/paint-stroke-gold.svg";
import PricingBox from "./PricingBox";

import Img1 from "../../../assets/images/pricing/img1.jpg";
import Img2 from "../../../assets/images/pricing/img2.jpg";
import Img3 from "../../../assets/images/pricing/img3.jpg";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="pricing-section relative">
        <div className="container page-padding py-[12rem] ">
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

            <h2 className="text-[3.4rem] font-bold mb-4">Planos mensais</h2>
            <p className="text-[#646464] font-medium text-[15px] ">
              Gymat an unknown printer took a galley of type and scrambled
              <br /> make a type specimen book.
            </p>
          </div>
          {/* pricing boxes */}
          <div className="flex gap-10 mt-32 relative md1000:flex-col md1000:items-center ">
            <PricingBox img={Img1} price="100" service={t("services.serv1")} />
            <PricingBox img={Img2} price="100" service={t("services.serv2")} />
            <PricingBox
              img={Img3}
              price="150"
              service={`${t("services.serv1")} e ${t("services.serv2")}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
