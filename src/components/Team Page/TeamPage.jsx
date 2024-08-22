import ServivePageVideo from "../CustomVideo/ServicePageVideo";
import Button from "../../components/Button/Button";
import shape7 from "../../assets/video bubbles (1).png";
import shape2 from "../../assets/127_arrow_icon_logo_with_3d_modern_style copy 1 (1).png";

import "./team.css";
import Heading from "../Heading/Heading";
import LetsTalk from "./LetsTalk";
import FooterForm from "../Footer/Footer";
import GetToKnowUs from "../GetToKnowUs/GetToKnowUs";
import Location from "../Location/Location";
import bg1 from "../../assets/11 copy 3.png";
import LetsCreateFuture from "./LetsCreateFuture";
import FooterWithLetsTalk from "../Footer/FooterWithLetsTalk";
export const TeamPage = () => {
  const callouts = [
    {
      name: "Self-Improvement",
      description: "Journals and note-taking",
      imageSrc: shape2,
      imageAlt:
        "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
      href: "#",
    },
  ];

  return (
    <div className="solution-page ">
      <div className="flex items-center lg:flex-row flex-col pt-0 pb-16 px-3 lg:p-32 mx-auto max-w-7xl justify-center relative">
        <img
          src={bg1}
          alt="bg"
          className="absolute lg:inset-y-0 lg:-left-40 -z-10 opacity-30 top-40 right-14"
        />
        <div className="flex flex-col gap-y-3 lg:pt-60 lg:pb-40 pt-32 pb-12">
          <span className="team-hero-heading">Title text block</span>
          <div className="lg:w-96">
            <p className="text-white">
              JUST THE SUBHEAD HERE:
              <br />
              Freezing 2 times for two weeks a year If one video editor is not
              enough, then you need to buy another package. You need to pay
              monthly. You need to pay with monthly, quarterly and annual
              discounts.
            </p>
          </div>
          <div className="flex gap-y-5 mt-10">
            {/* <Button className="px-8 py-2.5 mr-3 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
               choice your plan
              </Button> */}
            <Button className="px-8 py-2.5 text-sm font-semibold text-gray-900 bg-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              choice your plan
            </Button>
          </div>
        </div>
        {/* ------------ Right Side Hero Section --------------- */}
        <div className="relative">
          {/* <img src={shape7} alt="img" className="" /> */}
          {/* <div className="absolute top-10"> */}
          <ServivePageVideo />
          {/* </div> */}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center lg:px-0 px-3">
        <h2
          id="details-heading"
          className="text-[60px] font-tek leading-tight  uppercase text-white"
        >
          who are us?
        </h2>
        <p className="font-light max-w-2xl text-sm text-white">
          Lorem ipsum dolor sit amet consectetur. Scelerisque habitant elementum
          lectus quis risus viverra. Commodo sit imperdiet consectetur fermentum
          non nunc. In et quam vehicula lectus sed leo hac lectus. Pretium et
          egestas nisi in.
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-10">
        <section className="flex lg:flex-row flex-col justify-center items-center  max-w-4xl mx-auto overflow-hidden gap-y-3">
          <div className="flex flex-col  justify-center lg:justify-end lg:-mr-40  lg:w-2/5">
            <h1 className="text-4xl uppercase text-white mb-4">Mission</h1>
            <p className="text-white text-sm font-light">
              Lorem ipsum dolor sit amet consectetur. Scelerisque habitant
              elementum lectus quis risus viverra. Commodo sit imperdiet
              consectetur fermentum non nunc. In et quam vehicula lectus sed leo
              hac lectus. Pretium et egestas nisi in.
            </p>
          </div>
          <div className="mx-4">
            <img
              src={shape2}
              alt="shape2"
              className="lg:h-[42rem] lg:w-[30rem] object-cover object-center z-10"
            />
          </div>
          <div className="flex flex-col  justify-start lg:-ml-2 lg:w-2/5">
            <h1 className="text-4xl uppercase text-white mb-4">Vision</h1>
            <p className="text-white text-sm font-light">
              Lorem ipsum dolor sit amet consectetur. Scelerisque habitant
              elementum lectus quis risus viverra. Commodo sit imperdiet
              consectetur fermentum non nunc. In et quam vehicula lectus sed leo
              hac lectus. Pretium et egestas nisi in.
            </p>
          </div>
        </section>
      </div>

      <GetToKnowUs />
      <Location />

      
        <LetsCreateFuture />
      

      <FooterWithLetsTalk/>
    </div>
  );
};
