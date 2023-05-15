import React from "react";
import Class from "./ClassBox";

function Tuesday() {
  return (
    <>
      {/* boxes */}
      <div className="mt-[5rem]">
        {/* monday */}
        <div className="flex flex-col gap-3">
          {/* row */}
          <Class name="Judô" time="18:00 - 19:00" category="5 - 6 anos" />
          {/* row */}
          <Class name="Judô" time="19:00 - 20:00" category="7 - 11 anos" />
          {/* row */}
          <Class name="Judô" time="20:00 - 21:00" category="12 - 17 anos" />
        </div>
      </div>
    </>
  );
}

export default Tuesday;
