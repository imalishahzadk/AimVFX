import React from "react";
import Rectangle7580 from "../../assets/images/Rectangle 7580.png";
import Rectangle7581 from "../../assets/images/Rectangle 7581.png";
import Rectangle7582 from "../../assets/images/Rectangle 7582.png";
import Rectangle7583 from "../../assets/images/Rectangle 7583.png";
import Article from "../../assets/images/article.png";
import Button from "../Button/Button";
const Design3d = () => {
  const products = [
    {
      id: 1,
      imageSrc: Rectangle7580,
      imageAlt: "Hand stitched, orange leather long wallet.",
      des: "Measuring the ROI of Design and Your Design Partner",
      cart: "AR & 3D Design",
    },
    {
      id: 1,
      imageSrc: Rectangle7581,
      imageAlt: "Hand stitched, orange leather long wallet.",
      des: "Onboarding Best Practices: 4 Easy Steps to Getting Started With ...",
      cart: "Video Marketing",
    },
    {
      id: 1,
      imageSrc: Rectangle7582,
      imageAlt: "Hand stitched, orange leather long wallet.",
      des: "How Strong Design Partnerships Transform Brands ",
      cart: "Video Marketing",
    },
    // More products...
  ];
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-0">
        <div className="flex items-center gap-x-3 justify-between">
          <div className="flex items-center gap-x-3 justify-between ">
            <img src={Article} alt="" className="w-14 h-14" />
            <h3 className="lg:text-5xl text-3xl font-medium uppercase  leading-tight text-[#FFFFFf]">
              creative-as-a-service
            </h3>
          </div>
          <div>
            <Button className="px-8 lg:py-2.5 py-2 text-sm font-semibold border-2 text-white rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              SEE ALL
            </Button>
          </div>
        </div>

        <div className="mt-6 grid lg:grid-cols-3 grid-cols-1 gap-x-4 gap-y-14 sm:gap-x-6 md:grid-cols-2 md:gap-y-10 lg:gap-x-6">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className=" w-full overflow-hidden   ">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center "
                />
              </div>
              <div className="p-3  text-[#fff]">
                <span className="font-[400] text-[#00FFFF] text-[18px]">
                  {product.cart}
                </span>
                <p className="font-[700] text-[22px]">{product.des}</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Velit sollicitudin
                  cras pretium tellus sed. Fringilla sit eleifend tellus aliquet
                  ac.
                </p>
                <div className="flex gap-2 pt-3">
                  <span>
                    <img src={Rectangle7583} alt="" />
                  </span>
                  <span>
                    <span className="italic font-[700]">Dean Collins</span>
                    <p className="font-[300] text-[#00FFFF] text-[18px]">
                      Director of Brand Design
                    </p>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design3d;
