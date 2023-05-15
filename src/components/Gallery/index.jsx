import { Suspense, lazy, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PagesHeader from "../Shared/PagesHeader";
const Images = lazy(() => import("./Images"));

const Gallery = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("nav.gallery") + " - " + t("defaults.pageTitle");
  }, [t]);

  return (
    <>
      <section className="relative">
        <PagesHeader pageTitle={t("nav.gallery")} />

        <Suspense>
          <Images />
        </Suspense>
      </section>
    </>
  );
};

export default Gallery;
