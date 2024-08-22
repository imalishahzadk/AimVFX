import React from "react";
import CustomVideo from "../CustomVideo/CustomVideo";
import Heading from "../Heading/Heading";
import waiting from "../../assets/Vector (3).png";

const ServicePortfolioVideo = () => {
  const videoData = [
    {
      title: "Video 1",
      brandName: "Brand A",
      productionTime: "2:30",
      videoPoster:
        "https://s3-alpha-sig.figma.com/img/0b98/b46d/070526245f2c72bbf0e71d490968e85a?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PuTODtredIBIwp80CrudsRMiThxaru010VAJTwCu-bBEggvDAJnBn~a1BZLy630D9oKxb7~GgqzC9fAbsbZeAf2IJRODkIMSzMXnjSFyUiSD054CfXw7CyH2DC63Gts5jUPT8Ep~blyZw~~RYOjOoWSQTfJJpY2OlAVPMO77VA6~b7En~X1wH3Jiwr1GgSASrYujfl18Eyp2S8q3SrMJAZVivi8On~iBVqdTLG0DJh-BZt3zi5GPLyRg7XaGAHwFNg49aylzdARaIZx0v9JTgtRnDs7lZnR6tj~C0gWaafp5a6NgtPYUnlmlJxHnXG4BbkmtlCry3GYWOrGDgkkB9A__",
    },
    {
      title: "Video 2",
      brandName: "Brand B",
      productionTime: "3:15",
      videoPoster:
        "https://s3-alpha-sig.figma.com/img/7a8c/c807/10b06b42616048a257123198819d51f1?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPq~EGlOslQzdrWJx8IWxgGlHc419BR5fzIhuBrWki~zCxp1kgQv~HQ4oRXAfqIFpNmJMSm1k35z6qzy8RitpqfWNLZW4aT6CbKAcewhSeXr1Qo16hmEy3YVbrBUp4KJFvbaE6aMVxOB-Q~37IOoLZuTuQbwrLuOWliv0IYiCanT5FErlvAXOfEWfpmHy3fuN86UJ5o4ImV-M0KpBeJfbJQTySXgu94Yf8ODqLXrR5pOMAcC0hWmX7xikK5MFqucNLTZUhJYrwlQj8NyaqeUkCw1lyD-~qWkZ47DaY9k2WAlZ67JtIiWTA-5P8S28SEdd1ZBbixdOQrBzCh1uU2C2Q__",
    },
    {
      title: "Video 3",
      brandName: "Brand C",
      productionTime: "1:45",
      videoPoster:
        "https://s3-alpha-sig.figma.com/img/d6c3/3b53/b8d1d0cac0516a1dbf0657fc02f3a7d2?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SUxnDSMGdQx4spb3AgR7Yd-AAuducEx0MQ3DYDdRSX230YGaJS2-6uWK7KwuUVq~WaEyFk-79F8PmIuRFWffjfwer8oJI4r8g0r80l0va4c8h53kcuabPM7l9Nab2DwDTU0rx~Tf8Ro1JkJ2~lydNC5g7SGvWT7j9ad9uxVF1cIyA20OCqPGaPlqnNs2RK2VAFBqEMzxFmYPAQRCXjuFmNofwgA8FhqwhSLV7C-sR9GHlhn1U73tZtFQ0f5H52Xq~jFUM4pdUMKMok7vZHCJ~RbOcLUHUk9MYyLRMtSjZNI2g4b6fiGayRQAhK2iRA2XYKg8tiAntS3gC9DUivf3PQ__",
    },
    // {
    //   title: "Video 4",
    //   brandName: "Brand D",
    //   productionTime: "4:00",
    //   videoPoster:
    //     "https://s3-alpha-sig.figma.com/img/1078/c954/990160f5903e6e0a7208a904357fe349?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SW38OlET6IlHSJf0E06eAtn9u96B7KMQXRpNeTatI2gpbpteawFVgDW-ADKMMY3Tv342dneH-7MFSUyoi8zo4juz8UdbLEMi6UW3wH1QRSoT3pH~QqoNfuyGwcEcOX52qWnNy61aZojVNZSyQjFVn4duqwndN8fYf5B~cCjGjrwDw0KPWayizI3SrjpEKUiae3YKZies4JjTrlytbH21byLT9Wrmx4x3rZPQTmB7VXp8nqeMSKttYxL0alS4raoLID07xmiWX1gFh4j5Q4YU6yFNcgT8J20qWtfaqynF8xkC6cc9Uu4bsGam1umnXYHbUFS0jms5BV4tAJIyylOYgg__",
    // },
    // {
    //   title: "Video 5",
    //   brandName: "Brand E",
    //   productionTime: "2:10",
    //   videoPoster:
    //     "https://s3-alpha-sig.figma.com/img/0aaf/724d/5d9375a1192e83b583a4fcbc637995cf?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GFJsXJHLITPc315dzX3kCT3GzTbzA3VJ-SeqvM~JXZc-MuddHmdH-EMklKk-y28z6uy3ZszP9DMsDZX4oYrPCKzK3-obVjA-0Sce3IogQmIJE0RnjRbULdYVz3Zy~lcMkKljOU2m41eQaUAqVG2gqdv3nSTPs9sqca6CDFaMl00e5tzuHMX-Hz3d6oo00~zoyl4DLVy3ZNcowPHLbAsPvWVtxb~D0ozLoQsDUCSvJR7aPUwqZwbiOJwaHguC8-rtgErGjcFnz4JnVP9W-geL6fZjGST2yVXj7W4PJ5lSkBliLjQk0jktd34rgWBbVUCWsIv~BGtSxmNaqZ35WbWnKg__",
    // },
    // {
    //   title: "Video 6",
    //   brandName: "Brand F",
    //   productionTime: "3:45",
    //   videoPoster:
    //     "https://s3-alpha-sig.figma.com/img/2bee/50ef/99943eed34b8c761abded556ce9d0503?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BEPoUG8ZLm-3ePNYl1e2KynZLm7zK1MIFohm-x3O52Wipr3I5o4nFjQbz-WwCfLt6C5xOQuBsFqlMMgZIX8Q40FJK1zSvS5lL0cibyotWYRD~g9fQTAccW-sn2NNIUunZAKkqhQwO91jk1eUWeS02w5K4tgxzdQhLRTOR6GzFx1x~vZyDwmBNUGaFuIld2ExS9CrmLGJP-8h4J0MDI8XXN60f02jrFkinCmX~cEFfFbXbOUAj2ofqTKXiwQXm2fh5-GR9b8P0GQ57yMJgm7e0MgNQby8vGti1~NXAbfAoQTDQZfq2SOpyklE8yVuFtIlxSCwDHFcrOPKhHa9XSUP~A__",
    // },
  ];

  return (
    <>
      <div className="flex items-center justify-center gap-x-4 gap-y-6 ">
        {videoData.map((video, index) => (
          <div className="flex flex-col gap-y-1">
            <div className="service-video-portfolio">
              <video controls poster={video?.videoPoster}>
                <source src="your-video-file.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="play-button"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between px-7 text-white">
                <Heading className="text-base">{video.title}</Heading>
                <span>{video.productionTime}</span>
              </div>
              <div className="flex justify-between px-7 text-[#00FFFF]">
                <Heading className="text-base">{video.brandName}</Heading>
                <span className="flex gap-x-1 items-center">
                  <img src={waiting} className="w-5 h-5" />
                  12h
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicePortfolioVideo;
