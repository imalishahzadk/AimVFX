import React from "react";
import Button from "../Button/Button";
import Rectangle4 from "../../assets/images/Rectangle 7522.png";
import Rectangle5 from "../../assets/images/Rectangle 7575.png";
import Rectangle6 from "../../assets/images/Rectangle 7576.png";

const products = [
  {
    id: 1,
    imageSrc: Rectangle4,
    imageAlt: "Hand stitched, orange leather long wallet.",
    des: "Entertainment",
  },
  {
    id: 1,

    imageSrc: Rectangle5,
    imageAlt: "Hand stitched, orange leather long wallet.",
    des: "Advertising",
  },
  {
    id: 1,
    imageSrc: Rectangle6,
    imageAlt: "Hand stitched, orange leather long wallet.",
    des: "Marketing Videos",
  },
  // More products...
];

const Rateimage = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-0 lg:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className=" w-full overflow-hidden   ">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center hover:border-[1px] hover:border-[#5685c2] hover:rounded-[45px]"
                />
              </div>
              <div className="p-3 font-[300] text-[#fff]">
                <h1 className="font-[500] text-[30px]">{product.des}</h1>
                <p>
                  <span>+</span> Lorem ipsum dolor sit amet.
                </p>
                <p>
                  <span>+</span> Lorem ipsum dolor sit amet.
                </p>
                <p>
                  <span>+</span> Lorem ipsum dolor sit amet.
                </p>
                <p>
                  <span>+</span> Lorem ipsum dolor sit amet.
                </p>
                <p>
                  <span>+</span> Lorem ipsum dolor sit amet.
                </p>
                <p>
                  <span>+</span> Lorem ipsum dolor sit amet.
                </p>
                <p>
                  <span>+</span> Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Rateimage;
