import { useTranslation } from "react-i18next";

const PageNotFound = () => {
  const { t } = useTranslation();

  return (
    <header className="flex flex-col gap-5 justify-center h-screen w-full">
      <h1 className="self-center text-9xl font-bold h-fit text-slate-200">
        404
      </h1>
      <h2 className="self-center text-3xl text-slate-400">
        {t("defaults.pageNotFound")}
      </h2>
    </header>
  );
};

export default PageNotFound;
