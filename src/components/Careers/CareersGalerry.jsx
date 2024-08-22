import React from "react";
import Group469744 from "../../assets/images/Group 469744.png";
import Group469745 from "../../assets/images/Group 469745.png";
import Group469746 from "../../assets/images/Group 469746.png";
import Group469742 from "../../assets/images/Group 469742.png";
import Group469741 from "../../assets/images/Group 469741.png";
import Rectangle1 from "../../assets/images/Rectangle 7522 (1).png";
import Rectangle2 from "../../assets/images/Rectangle 7522 (2).png";
import Rectangle3 from "../../assets/images/Rectangle 7522 (3).png";
import Rectangle4 from "../../assets/images/Rectangle 7522 (4).png";
import Rectangle5 from "../../assets/images/Rectangle 7522 (5).png";
import Rectangle6 from "../../assets/images/Rectangle 7522 (6).png";
import Rectangle7 from "../../assets/images/Rectangle 7522 (7).png";
import Rectangle8 from "../../assets/images/Rectangle 7522 (8).png";
import Rectangle9 from "../../assets/images/Rectangle 7522 (9).png";
import Rectangle10 from "../../assets/images/Rectangle 7522 (10).png";
import Rectangle11 from "../../assets/images/Rectangle 7522 (11).png";

// import Group469744 from '../../assets/images/Group 469744.png'

const CareersGalerry = () => {
  const GaleryImg = [
    {
      imgsrc: Rectangle1,
      des: "Creative Services",
      imgsrc2: Rectangle2,
      des2: "Video Services",
      imgsrc3: Rectangle3,
      des3: "Creative Excellence",
    },

    {
      imgsrc: Rectangle4,
      des: "Customer Enablement",
      imgsrc2: Rectangle5,
      des2: "Marketing",
      imgsrc3: Rectangle6,
      des3: "Sales",
    },
    {
      imgsrc: Rectangle7,
      des: "Customer Success",
      imgsrc2: Rectangle8,
      des2: "Operations Excellence",
      imgsrc3: Rectangle9,
      des3: "Tech Product and Design",
    },
    {
      imgsrc: Rectangle10,
      des: "Talent",
      imgsrc2: Rectangle11,
      des2: "Finance and Legal",
    },
  ];

  return (
    <div className="promotional-section py-28">
      <div className="max-w-7xl mx-auto lg:px-4 px-6">
        <div className="text-white max-w-5xl  pt-10">
          <h1 className="lg:text-6xl  text-5xl font-normal font-tek uppercase">
            get to know our teams
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Sed enim tincidunt etiam
            quis nulla pellentesque. Facilisis orci rhoncus adipiscing donec.
            Pellentesque sed sit lorem orci rutrum. Mi ac morbi convallis massa
            amet pelle
          </p>
        </div>
        <div className=" flex flex-col gap-y-20 py-14">
          {GaleryImg.map((item, ind) => {
            return (
              <div
                key={ind}
                className="flex gap-x-8 gap-y-10 border-b-[1px] pb-11 flex-wrap lg:flex-nowrap justify-center lg:justify-start"
              >
                <div key={ind} className=" ">
                  <img src={item.imgsrc} alt="" />
                  <span className="px-2 font-tek text-3xl italic font-bold">
                    {" "}
                    {item.des}
                  </span>
                </div>
                <div key={ind} className=" ">
                  <img src={item.imgsrc2} alt="" />
                  <span className="px-2 font-tek text-3xl italic font-bold">
                    {item.des2}
                  </span>
                </div>
                <div key={ind} className="">
                  <img src={item.imgsrc3} alt="" />
                  <span className="px-2 font-tek text-3xl italic font-bold">
                    {item.des3}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CareersGalerry;
