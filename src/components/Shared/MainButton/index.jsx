import { Link } from "react-router-dom";
import "./index.css";
import { FaArrowRight } from "react-icons/fa6";

function MainButton({ color, bg, cN, arrowColor, hover, text, goTo }) {
  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <Link
      onClick={goTop}
      to={goTo}
      className={`text-[15px]  ${color || ""} ${bg || ""} ${
        cN || ""
      } text-center pt-[18px] font-[600] w-[20rem] h-[5.5rem] uppercase hero-cta relative ml-2 rounded-full ${
        hover || ""
      }`}
    >
      <div className="flex items-center justify-center">
        {text} &nbsp;
        <FaArrowRight
          className={`w-6 h-auto inline-block ${arrowColor || ""}`}
        />
      </div>
    </Link>
  );
}

export default MainButton;
