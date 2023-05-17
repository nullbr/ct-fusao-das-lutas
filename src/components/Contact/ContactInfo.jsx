const ContactInfo = ({ t }) => {
  return (
    <div className="md1000:w-[60%] md1000:flex md1000:flex-col md1000:mx-auto min800:w-[90%]">
      <h2 className="text-center text-black text-[3.4rem] min620:text-[2.5rem] font-bold leading-[1.2]">
        {t("contactUs.subTitle")}
      </h2>

      <p className="md1000:text-justify text-[16px] text-center w-[95%] text-[#646464] font-medium mt-20">
        {t("contactUs.pitch")}
      </p>

      {/* call to action */}
      <div className="bg-main text-white p-4 rounded-full my-10 shadow-lg">
        <a
          href={t("defaults.scheduleLink")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          {/* <i className="fa-solid fa-plus bg-secondary text-2xl py-3 px-4 rounded-md nav-btn-hover"></i> */}
          <h3 className="text-[14px] font-bold uppercase ml-4 mr-8 tracking-wider">
            Agendar Aula Experimental
          </h3>
        </a>
      </div>
      {/* end button */}

      <div className="grid grid-cols-2 grid-rows-2 gap-y-20 min620:grid-cols-1 min620:mx-auto min620:text-center">
        <div className="flex flex-col relative">
          <h3 className="text-[2rem] font-bold mb-10 underline underline-offset-8 decoration-4 decoration-secondary">
            {t("contactUs.address")}
          </h3>
          <a
            href={t("contactUs.addressUrl")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-[15px] font-medium text-[#646464] hover:text-secondary cursor-pointer ease-in duration-200">
              {t("contactUs.addressLine1")}
              <br />
              {t("contactUs.addressLine2")}
            </p>
          </a>
        </div>
        {/* hours */}
        <div className="flex flex-col relative">
          <h3 className="text-[2rem] font-bold mb-10 underline underline-offset-8 decoration-4 decoration-secondary">
            {t("contactUs.hours")}
          </h3>
          <div className="text-[15px] font-medium text-[#646464]">
            <p className="font-bold">{t("contactUs.lineTitle1")}:</p>
            <p>{t("contactUs.line1")}</p>
            <p className="font-bold">{t("contactUs.lineTitle2")}:</p>
            <p>{t("contactUs.line2")}</p>
          </div>
        </div>
        {/* contact info */}
        <div className="flex flex-col relative">
          <h3 className="text-[2rem] font-bold mb-10 underline underline-offset-8 decoration-4 decoration-secondary">
            {t("contactUs.title")}
          </h3>
          <div className="text-[15px] font-medium text-[#646464]">
            <a
              href={`https://wa.me/${t(
                "contactUs.phoneNumberInteger"
              )}?text=Ol%C3%A1%21+gostaria+de+agendar+uma+aula+experimental`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-[1.6rem] font-medium text-slate-400 hover:text-secondary cursor-pointer ease-in duration-200">
                <i className="fa-solid fa-phone text-main"></i>
                &nbsp; {t("contactUs.phoneNumber")}
              </p>
            </a>
            <a href={`mailto:${t("contactUs.email")}`}>
              <p className="text-[1.6rem] font-medium text-slate-400 hover:text-secondary cursor-pointer ease-in duration-200">
                <i className="fa-solid fa-envelope text-main"></i>
                &nbsp; {t("contactUs.email")}
              </p>
            </a>
          </div>
        </div>
        {/* social */}
        <div className="flex flex-col relative min620:items-center">
          <h3 className="text-[2rem] font-bold mb-10 underline underline-offset-8 decoration-4 decoration-secondary">
            {t("defaults.followUs")}
          </h3>
          <a
            href={t("defaults.instagram")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[18px] font-medium text-black flex gap-5"
          >
            <i className="fa-brands fa-instagram p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-main ease-in duration-200 hover:text-white"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;
