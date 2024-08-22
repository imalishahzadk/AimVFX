import React from "react";
import Button from "../Button/Button";
import arrow11 from "../../assets/images/arrow11.png";
import Rectangle21 from "../../assets/images/Rectangle21.png";
import Rectangle7525 from "../../assets/images/Rectangle 7525.png";
import Rectangle7526 from "../../assets/images/Rectangle 7526.png";
import Creative from "./Creative";
import CreativeaAds from "./CreativeaAds";
import FooterForm from "../Footer/Footer";
import Clients from "../Clients/Clients";
import FooterWithLetsTalk from "../Footer/FooterWithLetsTalk";
const Compare = () => {
  const Rectangle = [
    {
      src: Rectangle21,
      title: "In house creativeteams",
      hed: "Pros:",
      text: "Lorem ipsum dolor sit amet consectetur. Sit vel dui lacus",
    },

    {
      src: Rectangle7525,
      title: "agencies",
      hed: "Pros:",
      text: "Lorem ipsum dolor sit amet consectetur. Sit vel dui lacus",
    },
    {
      src: Rectangle7526,
      title: "freelancers",
      hed: "Pros:",
      text: "Lorem ipsum dolor sit amet consectetur. Sit vel dui lacus",
    },
  ];

  return (
    <div className="solution-page text-white pt-28">
      <div className=" sm:max-w-7xl mx-auto grid sm:grid-cols-2 pb-6 gap-5">
        <div className="px-20 flex flex-col justify-center">
          <h1 className=" xl:text-6xl md:text-6xl text-5xl font-[Teko] uppercase">
            a comparison of cretive services
          </h1>
          <p className="py-8 font-tek text-xl font-light">
            Lorem ipsum dolor sit amet consectetur. Egestas id rhoncus morbi
            commodo auctor. Nulla imperdiet porttitor sollicitudin vitae varius
            semper in tortor integer. Quis nulla consequat ac ut consequat.
            Lorem sem lectus eu eros varius. Quis urna fringilla sed.
          </p>
          <div className="flex py-4	items-end gap-1 sm:gap-x-4 ">
            <span>
              <input
                type="email"
                name="email"
                placeholder="Your base Email"
                className="md:px-6 px-3 outline-none py-2.5 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] "
              />
            </span>
            <span>
              <Button className=" px-4 py-2.5 text-sm font-medium font-tek text-[#fff]  bg-[#2EABAF] rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                SEE OPENNINGS
              </Button>
            </span>
          </div>
        </div>
        <div className="xl:block hidden">
          <img src={arrow11} alt="" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl px-6 py-20">
          <h1 className="text-5xl font-[Teko] font-normal uppercase">
            creative is the key to differentiation and growth
          </h1>
          <p className="text-xl font-light font-tek">
            Lorem ipsum dolor sit amet consectetur. At quis nunc mus iaculis.
            Nunc id ut ipsum vel lectus maecenas. Sem in laoreet gravida etiam
            in amet sociis non at. Ut senectus nisl aliquet vivamus arcu
            pharetra at. Pharetra lacus nulla tellus mi lectus vitae nullam
            tellus.
          </p>
        </div>
        <div>
          <div className="px-6 pb-6 mx-auto max-w-6xl grid md:grid-cols-3 gap-3">
            {Rectangle.map((item) => {
              return (
                <div>
                  <img className="mx-auto" src={item.src} alt="" />
                  <h1 className="md:h-28 py-4 md:py-4 leading-[50px] text-[50px] font-[Teko] font-medium uppercase ">
                    {item.title}
                  </h1>
                  <div className="mx-auto py-6 flex flex-col justify-center ">
                    <ol className="list-disc md:px-12 px-6 ">
                      <li className="text-[#00ffff]">
                        {item.hed}
                        <p className="text-white">{item.text}</p>
                      </li>
                      <li> {item.text}</li>
                      <li>{item.text}</li>
                    </ol>
                    <ol className="list-disc md:px-12 px-6 py-10 ">
                      <li className="text-[#00ffff]">
                        {item.hed}
                        <p className="text-white">{item.text}</p>
                      </li>
                      <li> {item.text}</li>
                      <li>{item.text}</li>
                    </ol>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Creative />
      <CreativeaAds />
      <Clients />
      <FooterWithLetsTalk/>
    </div>
  );
};

export default Compare;
