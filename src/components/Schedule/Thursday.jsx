import React from "react";
import Class from "./ClassBox";

function Thursday() {
  return (
    <>
      {/* boxes */}
      <div className="mt-[5rem]">
        {/* monday */}
        <div className="flex flex-col gap-3">
          {/* row */}
          <Class name={"Judô"} time={"19:30 - 20:30"} />
        </div>
      </div>
    </>
  );
}

export default Thursday;
