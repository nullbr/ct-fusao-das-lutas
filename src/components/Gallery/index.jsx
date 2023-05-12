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

        <main className="flex justify-center w-full bg-red-500">
          <h1 className="text-[3.5rem]">Adicionar images do Instagram</h1>
        </main>
        {/* <Suspense>
          <Images />
        </Suspense> */}
      </section>
    </>
  );
};

export default Gallery;
