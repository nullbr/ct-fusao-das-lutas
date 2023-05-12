import MainButton from "../../Shared/MainButton";

function PricingBox({ img, price, service }) {
  return (
    <>
      <div className="flex flex-col w-1/3 md1000:w-[40rem] bg-white shadow-xl relative min540:w-[100%]">
        <div
          style={{ transition: "all 0.3s" }}
          className="relative grayscale hover:grayscale-0"
        >
          <img src={img} alt="pricing_img" className="w-full h-full" />
          <div className="absolute bg-white text-[20px] font-bold w-[25rem] text-center py-6 text-secondary -bottom-[18px] left-0 right-0 mx-auto">
            {service}
          </div>
        </div>
        <div className="flex flex-col items-center pt-[20px] pb-[50px]">
          {/* price */}
          <p className="text-center text-[55px] font-bold relative py-[10px] ">
            <span className="text-[30px] text-[#6d6d6d] absolute font-normal top-8 -left-[4rem]">
              R$
            </span>
            {price}
            <span className="text-[22px] text-[#6d6d6d] absolute font-normal bottom-[25px] -right-[6rem]">
              p/m
            </span>
          </p>
          {/* text */}
          {/* <div className="flex flex-col text-[16px] font-medium text-center gap-8 text-[#646464] ">
            <p>Free Hand</p>
            <p>Gym Fitness</p>
            <p>Weight Loss</p>
            <p>Personal Trainer</p>
            <p>Cycling</p>
          </div> */}

          <MainButton
            color="!text-white"
            bg="bg-secondary"
            text="Agendar"
            arrowColor="!text-white"
            cN="hover:bg-main"
            goTo="/contact"
          />
        </div>
      </div>
    </>
  );
}

export default PricingBox;
