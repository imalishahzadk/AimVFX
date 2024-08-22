import Camada from "../../assets/images/Camada_1.png";
import Capa from "../../assets/images/Capa.png";
import Capa1 from "../../assets/images/Capa_1.png";
import Layer from "../../assets/images/Layer.png";
import Vector from "../../assets/images/Vector.png";
import Arrow from "../../assets/images/Arrow.png";

const people = [
  {
    image: Camada,
  },
  {
    image: Capa,
  },
  {
    image: Capa1,
  },
  {
    image: Layer,
  },
  {
    image: Layer,
  },
  {
    image: Vector,
  },
];

export default function Promotional1() {
  return (
    <div className="promotional-section">
      <div className="text-center text-[#fff]">
        <h1 className="font-tek font-[400] text-[40px] sm:text-[50px] md:text-[60px] lg:text-[111px]">
          PROMOTIONAL VIDEOS services
        </h1>
      </div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-6 sm:px-12 md:px-24 lg:px-64"
      >
        {people.map((person, ind) => (
          <li key={ind} className="col-span-1 flex flex-col">
            <div className="	">
              <div className="flex flex-1 flex-col p-4 sm:p-6 md:p-8 bg-slate-800 rounded-[34px] border-[4px] sm:border-[6px] md:border-[8px] border-sky-700">
                <img
                  className="mx-auto h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32"
                  src={person.image}
                  alt=" im cannot export"
                />
              </div>
              <div className="px-4 sm:px-5 md:px-7 cursor-pointer">
                <div className="flex flex-1 justify-between px-4 sm:px-5 py-2 sm:py-3 md:py-4 rounded-full bg-slate-800 border-[#15B8C7] border-[1px] font-bold text-[#E4E4E4] relative bottom-4 sm:bottom-5 md:bottom-6 hover:bg-gray-700">
                  <button>Ad design</button>
                  <span>
                    <img src={Arrow} alt="" />
                  </span>
                </div>
              </div>
              <div>
                <p className="px-4 sm:px-5 md:px-7 font-Rubik font-light text-sm sm:text-base md:text-base text-[#E4E4E4] py-4 sm:py-5 md:py-6">
                  Lorem ipsum dolor sit amet consectetur. Accumsan nisl vitae
                  eget tempus donec pellentesque vivamus felis.
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
