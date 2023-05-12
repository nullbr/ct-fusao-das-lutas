import { Suspense, lazy, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Hero from "./Hero/Hero";
const About = lazy(() => import("./About/About"));
// const ChooseUs = lazy(() => import("./ChooseUs/ChooseUs"));
const Featured = lazy(() => import("../Services/Featured"));

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("defaults.pageTitle");
  }, [t]);

  return (
    <>
      <Hero />
      <Suspense>
        <About />
        <Featured t={t} />
        {/* <ChooseUs /> */}
      </Suspense>
    </>
  );
};

export default Home;
