import { useState } from "react";
import { useTranslation } from "react-i18next";
import PagesHeader from "../Shared/PagesHeader";
import Monday from "./Monday";
import Tuesday from "./Tuesday";
import Wednesday from "./Wednesday";
import Thursday from "./Thursday";
import Friday from "./Friday";

const Schedule = () => {
  const { t } = useTranslation();
  const { day, setDay } = useState(1);

  console.log(day);

  return (
    <>
      <section className="">
        <PagesHeader pageTitle="Schedule by Day" />

        {/* schedule */}
        <div className="container page-padding py-[10rem]">
          {/* fiter buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              type="button"
              onClick={() => setDay(1)}
              className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white "
            >
              Monday
            </button>

            <button
              type="button"
              onClick={() => setDay(2)}
              className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white "
            >
              Tuesday
            </button>

            <button
              type="button"
              onClick={() => setDay(3)}
              className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white "
            >
              Wednesday
            </button>

            <button
              type="button"
              onClick={() => setDay(4)}
              className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white "
            >
              Thursday
            </button>

            <button
              type="button"
              onClick={() => setDay(5)}
              className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] bg-[#ff0336] ease-in duration-200 hover:shadow-2xl text-white "
            >
              Friday
            </button>
          </div>
        </div>

        {day === 1 && <Monday />}
        {day === 2 && <Tuesday />}
        {day === 3 && <Wednesday />}
        {day === 4 && <Thursday />}
        {day === 5 && <Friday />}
      </section>
    </>
  );
};

export default Schedule;
