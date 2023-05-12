import { Suspense, lazy, useEffect } from "react";
import { useTranslation } from "react-i18next";

import PagesHeader from "../Shared/PagesHeader";
import ContactInfo from "./ContactInfo";
const Reviews = lazy(() => import("./Reviews"));

const Contact = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("nav.contact") + " - " + t("defaults.pageTitle");
  }, [t]);

  return (
    <>
      <section>
        <PagesHeader pageTitle={t("contactUs.title")} />

        {/* contact */}
        <div className="bg-white py-20 page-padding grid grid-cols-2 container gap-10 items-center md1000:grid-cols-1">
          <Suspense>
            {/* first col */}
            <ContactInfo t={t} />
            {/* second col ---*/}
            <Reviews t={t} />
          </Suspense>
        </div>
        {/* map */}
        <div className="w-screen">
          <iframe
            title="maps"
            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=R.%20Franco%20P%C3%B3li,%20126%20A%20-%20Centro,%20Campina%20do%20Monte%20Alegre%20-%20SP,%2018245-000+(CT%20Fus%C3%A3o%20das%20Lutas)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            style={{
              width: "100%",
              height: "45rem",
              border: "0",
            }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
