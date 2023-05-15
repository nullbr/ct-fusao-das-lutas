import { useLocation } from "react-router-dom";
import TitleBg from "../../../assets/images/shared/paint-stroke-gold.svg";
import MainButton from "../../Shared/MainButton";
import { featServices } from "../services";

function Featured({ t }) {
  const location = useLocation();

  return (
    <>
      <section className="flex justify-between py-10">
        <div className="container page-padding">
          <div className="p-20 min800:p-10">
            {/* title */}
            <div className="flex flex-col text-center items-center relative pb-10">
              <p className="font-semibold text-white text-[15px] relative uppercase z-10 ">
                {t("services.featTitle")}
              </p>
              <img
                src={TitleBg}
                alt="text_bg"
                className="w-[24rem] absolute -top-[10px]"
              />
              <h2 className="text-[3.4rem] text-black font-bold mt-10 mb-5 min620:text-[2.5rem]">
                {t("services.subtitle")}
              </h2>
              <p className="text-[#646464] font-medium text-[15px] ">
                {t("services.description")}
              </p>
            </div>
            {/* grid */}
            <div className="grid grid-cols-3 gap-7 h-full mt-7 min800:mt-0">
              {featServices.map((service, idx) => {
                return (
                  <div
                    key={idx}
                    className="col-span-1 min800:col-span-3 bg-gray rounded-2xl"
                  >
                    <div className={`relative h-[30rem] min800:h-[25rem]`}>
                      <div
                        className="h-full w-full bg-cover bg-center rounded-xl brightness-75 hover:brightness-100"
                        style={{ backgroundImage: `url(${service.bgImg})` }}
                      />
                      <div className="absolute bottom-0 left-0 p-5">
                        <h2 className="text-white text-[3rem] min800:text-[2.4rem] font-bold underline underline-offset-8 decoration-4 decoration-secondary">
                          {service.title}
                        </h2>
                      </div>
                    </div>
                    <div>
                      <p className="mb-14 mt-6 text-[1.6rem] font-medium px-5 text-white">
                        <i className="fa fa-info-circle pr-5" />
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className={`${
                location.pathname === "/services" ? "hidden" : "flex"
              } justify-center w-full pt-5`}
            >
              <MainButton
                color="text-main"
                bg="bg-transparent"
                cN="mt-10"
                hover="hover:bg-main hover:text-white"
                text={t("services.title")}
                goTo="/services"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Featured;
