import { useState } from "react";
import { useTranslation } from "react-i18next";
import PagesHeader from "../Shared/PagesHeader";
import Monday from "./Monday";
import Tuesday from "./Tuesday";
import Wednesday from "./Wednesday";
import Thursday from "./Thursday";
import Friday from "./Friday";

const DayButton = ({ day, setDay, text, dayNum }) => {
  return (
    <button
      type="button"
      onClick={() => setDay(dayNum)}
      className={`${
        day === dayNum ? "bg-secondary text-white" : "bg-[#f2f2f2]"
      } text-[15px] font-bold py-[9px] px-[32px] rounded-full hover:bg-secondary ease-in duration-200 shadow-xl hover:text-white`}
    >
      {text}
    </button>
  );
};

const Schedule = () => {
  const { t } = useTranslation();
  const [day, setDay] = useState(1);

  return (
    <>
      <section>
        <PagesHeader pageTitle="Agenda de Aulas" />

        <main className="w-screen max-w-[100vw] pb-10">
          {/* schedule */}
          <div className="container page-padding pt-20 min620:pt-10">
            {/* fiter buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <DayButton
                day={day}
                setDay={setDay}
                text={t("defaults.days.monday")}
                dayNum={1}
              />

              <DayButton
                day={day}
                setDay={setDay}
                text={t("defaults.days.tuesday")}
                dayNum={2}
              />

              <DayButton
                day={day}
                setDay={setDay}
                text={t("defaults.days.wednesday")}
                dayNum={3}
              />

              <DayButton
                day={day}
                setDay={setDay}
                text={t("defaults.days.thursday")}
                dayNum={4}
              />

              <DayButton
                day={day}
                setDay={setDay}
                text={t("defaults.days.friday")}
                dayNum={5}
              />
            </div>
          </div>

          {day === 1 && <Monday />}
          {day === 2 && <Tuesday />}
          {day === 3 && <Wednesday />}
          {day === 4 && <Thursday />}
          {day === 5 && <Friday />}
        </main>
      </section>
    </>
  );
};

export default Schedule;
