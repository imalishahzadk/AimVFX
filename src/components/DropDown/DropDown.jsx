import React from "react";
import chevron from "../../assets/images/chevron-right (1).png";
const DropDown = () => {
  const product = [
    {
      heading: "Promotional Videos",
      p1: "FB ad with 2D animation ",
      p2: "Commercial video with 2D animation",
      p3: "Corporate video with 2D animation",
      p4: "Brand film",
      p5: "TV Commercial",
      p6: "Commercial videos with 3D",
      p7: "3D Product video",
    },
    {
      heading: "Corporate Videos",
      p1: " Interview video Testimonial video Summary video with stock 2D animation Animation Corporate videos 3D 3D Engineering video",
    },
    {
      heading: "2D Animation",
      p1: "Commercial video with 2D animation Corporate video with 2D animation Whiteboard Animation Summary video with stock 2D animation Documentaries 2D Brand template for a video Infographics",
    },
    {
      heading: "Educational Videos",
      p1: "Online courses ELearning 2D animation ELearning video with slides ELearning 3D 3D Engineering video 3D Medical video Explainer video UI video Tutorial video",
    },
    {
      heading: "Social Media Videos",
      p1: "Vertical (Stories, Reels, Shorts) TikTok video YouTube video from your RAW footage YouTube video from stock footage Vlog video Resizing",
    },
    {
      heading: "Software/App Videos",
      p1: "Ad video Tutorial video UI video",
    },
    {
      heading: "Film & TV",
      p1: "TV Commercial ",
      p2: "Feature film",
      p3: " Series",
      p4: "Documentary",
      p5: "Music video",
      p6: "TV Show",
      p7: "Script",
      p8: "Storyboard",
      p9: "Video editing services",
      p10: "VFX  ",
      p12: "Color Correction",
      p13: " Sound design",
      p14: "Music",
      p15: " Voice over",
    },
    {
      heading: "3D Animation",
      p1: "Animation 3D Animation Corporate video 3D ELearning video 3D Commercial video with 3D 3D Engineering video 3D Product video 3D Medical video Motion Design AI video Character Creation Character Animation 3D Modeling Logo motion",
    },
    {
      heading: "Video Production",
      p1: "Film&TV Commercials Corporate video Music video Brand film Animation Educational video Production Service",
    },
    {
      heading: "Extras",
      p1: "Extra hours video editor - $25",
      p2: "Art director",
      p3: "Script",
      p4: "Storyboard",
      p5: "Original music",
      p6: "Sound design",
      p7: "Voice over ",
      p8: "AI Voice over (+30 minutes)",
      p9: " Logo motion",
      p10: " Character creation ",
      p12: " 3D Models",
      p13: " Illustrator",
      p14: "Animatic",

      p15: "Paid stock footages",

      P16: "        Multiple User Access",
    },
  ];

  return (
    <div className="solution-page text-white py-28">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 bg-[#0B1A28CC] p-5 gap-3 rounded-3xl">
        <div className="grid grid-cols-2 gap-3">
          {product.slice(0, 6).map((item, ind) => {
            return (
              <div
                key={ind}
                className="border-2  border-[#00ffff] p-2 px-3 rounded-2xl"
              >
                <div className="flex gap-1 py-2 ">
                  <span className="text-[#00FFFF] font-tek text-base font-bold ">
                    {item.heading}
                  </span>
                  <img src={chevron} alt="" className="" />
                </div>
                <p>{item.p1}</p>
                <p>{item.p2}</p>
                <p>{item.p3}</p>
                <p>{item.p4}</p>
                <p>{item.p5}</p>
                <p>{item.p6}</p>
                <p>{item.p7}</p>
              </div>
            );
          })}
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {product.slice(6, 10).map((item, ind) => {
            return (
              <div
                key={ind}
                className="border-2 border-[#00ffff] py-2 px-3 rounded-2xl"
              >
                <div className="flex gap-1 py-2">
                  <span className="text-[#00FFFF] font-tek text-base font-bold">
                    {item.heading}
                  </span>
                  <img src={chevron} alt="" className="" />
                </div>
                <p>{item.p1}</p>
                <p>{item.p2}</p>
                <p>{item.p3}</p>
                <p>{item.p4}</p>
                <p>{item.p5}</p>
                <p>{item.p6}</p>
                <p>{item.p7}</p>
                <p>{item.p8}</p>
                <p>{item.p9}</p>
                <p>{item.p10}</p>
                <p>{item.p11}</p>
                <p>{item.p12}</p>
                <p>{item.p13}</p>
                <p>{item.p14}</p>
                <p>{item.p15}</p>
                <p>{item.p16}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
