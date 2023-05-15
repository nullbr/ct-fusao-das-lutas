import { Link } from "react-router-dom";

const ClassBox = ({ name, time, trainer = "Danilo Ribeiro", category }) => {
  return (
    <Link
      to="/contact"
      className="grid grid-flow-col justify-center items-center w-full text-center bg-[#f2f2f2]"
    >
      {/* class name */}
      <div className="p-8">
        <p className="text-[14px] font-medium text-[#a0a0a0]">Aula</p>
        <p className="text-[18px] text-black font-bold mt-3">{name}</p>
      </div>
      {/* time */}
      <div className="p-8 text-center">
        <p className="text-[14px] font-medium text-[#a0a0a0]">Horário</p>
        <p className="text-[18px] text-black font-bold mt-3">{time}</p>
      </div>
      {/* trainer */}
      <div className="p-8 text-center min800:hidden">
        <p className="text-[14px] font-medium text-[#a0a0a0]">Professor</p>
        <p className="text-[18px] text-black font-bold mt-3">{trainer}</p>
      </div>
      {/* category */}
      <div className="p-8">
        <p className="text-[14px] font-medium text-[#a0a0a0]">Categoria</p>
        <p className="text-[18px] text-black font-bold mt-3">{category}</p>
      </div>
    </Link>
  );
};
export default ClassBox;
