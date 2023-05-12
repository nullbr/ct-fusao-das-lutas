import React from "react";
import Class from "./ClassBox";

function Monday() {
  return (
    <>
      {/* boxes */}
      <div className="mt-[5rem]">
        {/* monday */}
        <div className="flex flex-col gap-3">
          {/* row */}
          <Class name={"Muay Thai"} time={"7:00 - 8:00"} />

          {/* row */}
          <Class name={"Muay Thai"} time={"19:30 - 20:30"} />

          {/* row */}
          <Class name={"Jiu-Jitsu"} time={"20:30 - 21:30"} />
        </div>
      </div>
    </>
  );
}

export default Monday;
