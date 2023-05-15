import React from "react";
import Class from "./ClassBox";

function Monday() {
  return (
    <>
      {/* boxes */}
      <div className="mt-[5rem]">
        {/* monday */}
        <div className="grid">
          {/* row */}
          <Class name={"Muay Thai"} time={"7:00 - 8:00"} category="Livre" />

          {/* row */}
          <Class name={"Muay Thai"} time={"19:30 - 20:30"} category="Livre" />

          {/* row */}
          <Class name={"Jiu-Jitsu"} time={"20:30 - 21:30"} category="Livre" />
        </div>
      </div>
    </>
  );
}

export default Monday;
