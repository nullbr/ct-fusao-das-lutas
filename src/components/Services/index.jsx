import "./index.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import PagesHeader from "../Shared/PagesHeader";
import Featured from "./Featured";
import Pricing from "./Pricing";

const Services = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("nav.services") + " - " + t("defaults.pageTitle");
  }, [t]);

  return (
    <>
      <section>
        <PagesHeader pageTitle={t("nav.services")} />

        <Featured t={t} />
        <Pricing />
      </section>
    </>
  );
};

export default Services;
