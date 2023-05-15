import { useEffect } from "react";

const Reviews = ({ t }) => {
  useEffect(() => {
    const div = document.querySelector("#reviews");
    const script = document.createElement("script");

    script.setAttribute(
      "src",
      "https://static.elfsight.com/platform/platform.js"
    );
    script.setAttribute("async", "");
    script.setAttribute("defer", "");
    script.setAttribute("data-use-service-core", "");
    div.appendChild(script);

    return () => {
      div.removeChild(script);
    };
  }, []);

  return (
    <a
      href="https://search.google.com/local/writereview?placeid=ChIJVSSjvRkZxJQRIfyo1l26xYg"
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-between py-20 h-full bg-black shadow-xl rounded-xl items-center"
    >
      <div className="container page-padding">
        <div id="reviews" className="p-20relative">
          <div className="relative text-center -mb-[4rem] items-center flex flex-col z-10 bg-black w-[70%] mx-auto">
            <h3 className="text-[3.4rem] min620:text-[2.5rem] text-white font-bold underline underline-offset-8 decoration-4 decoration-secondary">
              {t("home.reviews")}
            </h3>
          </div>
          <div className="elfsight-app-27de0d42-b15b-40d4-9421-fe3cde1bc549"></div>
          <div className="relative w-[70%] h-20 -top-20 -mb-[10rem] mx-auto bg-black z-[99999]"></div>
        </div>
      </div>
    </a>
  );
};
export default Reviews;
