import AboutSection from "../../About/AboutSection";
import AboutCarts from "./AboutCarts";
import "./About.css";

function About() {
  return (
    <>
      <section className="flex flex-col justify-between pb-20 bg-slate-200">
        <div className="container page-padding">
          {/* about cards */}
          <div className="flex gap-10 -mt-[8.5rem] md1000:flex-col mb-[4rem]">
            <AboutCarts />
          </div>

          {/* about text */}
          <AboutSection />
        </div>
      </section>
    </>
  );
}

export default About;
