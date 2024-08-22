import React, { useState, useEffect } from "react";
import client, { urlFor, assetUrlFor } from "../sanity";
import { useNavigate, Link } from "react-router-dom"; 
import shape1 from "../assets/127_arrow_icon_logo_with_3d_modern_style copy 2.png";
import shape2 from "../assets/127_arrow_icon_logo_with_3d_modern_style copy 3.png";
import shape3 from "../assets/1.png";
import shape4 from "../assets/5.png";
import shape5 from "../assets/holographic_fluid_drop_shapes_illustration_02 copy 3.png";
import shape6 from "../assets/holographic_fluid_drop_shapes_illustration_02 copy 3.png";
import creativity from "../assets/Creativity.png";
import excellence from "../assets/EXCELLENCE.png";
import shape7 from "../assets/127_arrow_icon_logo_with_3d_modern_style copy 1.png";
import Button from "../components/Button/Button";
import videobgImg from "../assets/holographic_fluid_drop_shapes_illustration_02 copy 5.png";
import shape10 from "../assets/holographic_fluid_drop_shapes_illustration_02 copy 2.png";
import LogoBars from "../components/LogoBars/LogoBars";
import BackgroundText from "../components/BackgroundText/BackgroundText";
import CustomVideo from "../components/CustomVideo/CustomVideo";
import CustomVideo1 from "../components/CustomVideo/CustomVideo1";

import Heading from "../components/Heading/Heading";
import spectularFrame from "../assets/ORH85K1 copy 1 (1).png";
import spectuarBackgroud from "../assets/11 copy 3.png";
import robot from "../assets/Vector.png";
import ServicesCards from "../components/ServiceCards/ServiceCards";
import ServicesList from "../components/ServiceCards/ServicesList";

import CustomServiceCard from "../components/CustomServiceCard/CustomServiceCard";
import HomeGallery from "../components/HomeGallery/HomeGallery";
import WorkStreamline from "../components/WorkStreamline/WorkStreamline";
import customVideoPoster from "../assets/Screenshot 2024-01-29 at 12.00 1.png";
import HomePortfolioVideo from "../components/HomePortfolioVideo/HomePortfolioVideo";
import HomeTestimoal from "../components/HomeTestimonals/HomeTestimonals";
import { FaStar, FaTrophy, FaPercent } from "react-icons/fa";
import WorkHistory from "../components/WorkHistory/WorkHistory";

import FaqSection from "../components/FAQ/FAQ";

import howitworks from "../assets/Rectangle 130 (1).png";
import FooterForm from "../components/Footer/FooterForm";
import Footer from "../components/Footer/Footer";
import FooterWithForm from "../components/Footer/FooterWithForm";
import PopupForDate from "../components/PopUpForDate/PopupForDate";
import { FaSpinner } from 'react-icons/fa'; 

import vector1 from "../assets/Group 469319.png";
import vector2 from "../assets/Group 469320.png";
import vector3 from "../assets/Vector (1).png";
import vector4 from "../assets/Vector (2).png";
import cardImage1 from "../assets/video.jpg";
import cardImage2 from "../assets/ORH85K1 copy 1 (1).png";
import cardImage3 from "../assets/Screenshot 2024-01-29 at 12.00 1.png";
import cardImage4 from "../assets/Rectangle 7522 (1).png";
import cardImage5 from "../assets/ORH85K1 copy 1 (1).png";
import cardImage6 from "../assets/ORH85K1 copy 1 (1).png";
import cardImage7 from "../assets/Rectangle 7522.png";
import videoSrc from "../assets/linkleads.mp4";
import thumbnailSrc from "../assets/Screenshot 2024-01-29 at 12.00 1.png";

const Home = () => {
  const [heroSectionData, setHeroSectionData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const navigate = useNavigate();

const serviceList = [
  {
    id: 1,
    title: "Educational videos",
    description:
      "We offer comprehensive web development services,\n including front-end and back-end development\n using the latest technologies.",
    icon: vector1,
    image: cardImage1,
    link: "/promotional-page", 
  },
  {
    id: 2,
    title: "AI video",
    description:
      "Our team specializes in developing high-quality\n mobile applications for both iOS and Android platforms.",
    icon: vector2,
    image: cardImage2,
    link: "/promotional-page", 
  },
  {
    id: 3,
    title: "Post Production",
    description:
      "We provide creative graphic design solutions\n tailored to meet your business needs,\n from logos to marketing materials.",
    icon: vector4,
    image: cardImage3,
    link: "/promotional-page",
  },
  {
    id: 4,
    title: "Social Media Videos",
    description:
      "We provide creative graphic design solutions\n tailored to meet your business needs,\n from logos to marketing materials.",
    icon: vector4,
    image: cardImage4,
    link: "/promotional-page", 
  },
  {
    id: 5,
    title: "Post Production",
    description:
      "We provide creative graphic design solutions\n tailored to meet your business needs,\n from logos to marketing materials.",
    icon: vector4,
    image: cardImage5,
    link: "/promotional-page", 
  },
  {
    id: 6,
    title: "Social Media Videos",
    description:
      "We provide creative graphic design solutions\n tailored to meet your business needs,\n from logos to marketing materials.",
    icon: vector4,
    image: cardImage6,
    link: "/promotional-page",
  },
  {
    id: 7,
    title: "Social Media Videos",
    description:
      "We provide creative graphic design solutions\n tailored to meet your business needs,\n from logos to marketing materials.",
    icon: vector4,
    image: cardImage7,
    link: "/promotional-page",
  },
];

  const [activeService, setActiveService] = useState(serviceList[0]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(`*[_type == "heroSection"][0]`);
        setHeroSectionData(data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
        <p className="ml-2">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500">
          Error loading data. Please try again later.
        </p>
      </div>
    );
  }

  if (!heroSectionData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>No data found.</p>
      </div>
    );
  }

  const videoUrl = assetUrlFor(heroSectionData.customVideo1);
  const posterUrl = urlFor(heroSectionData.videoPoster1).url();
// console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);

  const handleCardClick = (service) => {
    setActiveService(service);
  };

  const handleSeeMoreClick = () => {
    if (activeService && activeService.link) {
      navigate(activeService.link); 
    }
  };
  return (
    <>
      <div className="home-page">
        <div className="hero-section">
          {/* <img src={shape1} alt="Image 2" class="image2 hidden md:block" /> */}
          <img src={shape2} alt="Image 2" class="image2 hidden md:block" />
          <img src={shape3} alt="Image 3" class="image3 hidden md:block" />
          <img src={shape4} alt="Image 4" class="image4 hidden md:block" />
          <img src={shape5} alt="Image 5" class="image5 hidden md:block" />
          <img src={shape6} alt="Image 6" class="image6 hidden md:block" />
          <img
            src={creativity}
            alt="Image 7"
            class="creativityText hidden md:block"
          />
          <img
            src={excellence}
            alt="Image 8"
            class="excellenceText hidden md:block"
          />
          <img src={shape7} alt="Image 9" class="image7 hidden md:block" />

          <p className="hero-section-heading">
            {heroSectionData.heroHeading}

            {/* Where Creativity Meets Visual Excellence on a Monthly Basis */}
          </p>
          <p className="hero-section-description font-sans text-white/70">
            {heroSectionData.heroDescription}

            {/* Unleash the creative potential of your videos through our monthly
            subscription model, powered by AIM VFX a video production agency
            proficient in video editing, motion graphics, branding, and VFX. */}
          </p>
          <div className="hero-section-buttons flex flex-col gap-y-5 z-[1000]">
            <Link to="/pricing" className="inline-block">
              <Button className="w-full px-8 py-2.5 text-sm font-semibold text-black rounded-full bg-gradient-to-r from-[#15B8C7] to-[#8CE1EC] hover:from-[#13A6B2] hover:to-[#74D1DE] border-2 border-cyan-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                Pricing
              </Button>
            </Link>

            <Button
              onClick={() => setIsOpen(true)}
              className="px-8 py-2.5 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-white focus:shadow-outline-gray active:border-white active:bg-gray-700 transition duration-150 ease-in-out uppercase"
            >
              book a call
            </Button>

            <PopupForDate open={isOpen} setOpen={setIsOpen} />
            <div className="lg:hidden sm:block pt-6">
              <LogoBars />
            </div>
          </div>
          <div className="logoBars hidden sm:flex flex-col items-center">
            <LogoBars />
          </div>
        </div>

        {/* Video Section  */}
        <div className="home-video-section ">
          <img
            src={videobgImg}
            alt="Logos"
            className="video-bg-image1  md:block"
          />
          <img
            src={videobgImg}
            alt="Logos"
            className="video-bg-image2  md:block"
          />
          <div className="relative w-full ">
            <BackgroundText className="flex items-center justify-center lg:text-[400px] text-[120px] uppercase font-tek show-reels overflow-hidden">
              <span className="space-right">Show</span>
              <span>Reel</span>
            </BackgroundText>

            <div className="absolute pt-[20%] md:pt-0 lg:pt-0 inset-0 sm:top-44 flex items-center justify-center">
              <CustomVideo videoSrc={videoSrc} thumbnailSrc={thumbnailSrc} />
            </div>
          </div>
        </div>

        {/* Spectular Service Section */}
        <div className="mx-auto mt-16 px-4">
          <div className="flex flex-col items-center justify-center">
            <Heading className="uppercase lg:text-7xl text-6xl text-white font-tek text-center">
              <span> {heroSectionData.our} </span>{" "}
              <span className="text-[#2EABAF]">
                {heroSectionData.spectacular}
              </span>{" "}
              <span>{heroSectionData.services}</span>
            </Heading>
            <p className="text-white lg:text-sm text-xs text-center">
              {heroSectionData.dummyPara}
            </p>
          </div>
          {/* Section 4 */}
          <div className="relative overflow-hidden ">
            <img src={shape7} alt="Image 4" className="spectular-bg-image" />
            <div className="hidden lg:absolute lg:-top-40 lg:right-0 z-0">
              <img src={spectuarBackgroud} alt="Image" />
            </div>
            <div className="spectularImage flex justify-center items-center px-5">
              <div
                className="image-container overflow-hidden flex flex-col lg:flex-row-reverse justify-between w-full max-w-7xl"
                style={{ height: "650px" }}
              >
                <div className="block lg:block">
                  <img
                    src={activeService.image}
                    alt="Service Image"
                    className="lg:max-w-2xl sm:object-cover sm:object-center"
                  />
                </div>
                {activeService && (
                  <div className="flex mt-14 lg:mt-[10%] lg:gap-y-4 gap-y-2 flex-col items-start lg:pl-10 pl-2.5 w-full h-full overflow-auto">
                    <img
                      src={activeService.icon}
                      alt="logo"
                      className="w-6 h-6 md:w-12 md:h-12 lg:w-16 lg:h-16"
                    />
                    <p className="text-[#2EABAF] text-[20px] font-tek md:text-[40px] lg:text-[60px] xl:text-[80px]">
                      {activeService.title}
                    </p>
                    <p
                      className="text-white text-[10px] sm:text-sm md:text-base lg:text-lg"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {activeService.description}
                    </p>
                    <button
                      className="mt-2 lg:px-10 lg:py-2 px-4 py-1 lg:text-[16px] text-[16px] font-semibold text-black border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase md:px-8"
                      style={{
                        background:
                          "linear-gradient(to right, #15B8C7, #8CE1EC)",
                      }}
                      onClick={handleSeeMoreClick}
                    >
                      see more
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* section 05 */}
          <div className="flex flex-col lg:gap-y-12 gap-y-6 items-center justify-center mt-8 z-0">
            <div className="overflow-x-auto w-full hide-scrollbar px-4">
              <ServicesCards
                serviceList={serviceList}
                handleCardClick={handleCardClick}
                activeService={activeService}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-20">
          {/* Services Section 06 */}
          <Heading className="text-white font-tek lg:text-[60px] text-4xl uppercase text-center lg:w-2/5 leading-tight">
            Why it's better to delegate video editing
            {/* {heroSectionData.section6Heading} */}
          </Heading>
          <p className="text-white text-sm lg:w-2/5 text-center">
            By delegating video editing, you can harness the expertise of
            professionals, save time, improve quality, and ultimately deliver
            outstanding videos that leave a lasting impression on your audience.
            {/* {heroSectionData.section6Para} */}
          </p>

          <div className="w-full px-4">
            {" "}
            {/* Added to ensure proper width and padding */}
            <ServicesList />
          </div>

          <div className="pt-10 flex gap-x-4">
            <Link to="/pricing" className="inline-block">
              <Button className="px-10 py-2.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-[#15B8C7] to-[#8CE1EC] hover:from-[#13A6B2] hover:to-[#74D1DE] border-2 border-cyan-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                Pricing
              </Button>
            </Link>

            <Button
              onClick={() => setIsOpen(true)}
              className="px-8 py-2.5 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-white focus:shadow-outline-gray active:border-white active:bg-gray-700 transition duration-150 ease-in-out uppercase"
            >
              book a call
            </Button>
          </div>
        </div>

        {/* Gallery Section 07 */}
        <div className="mx-auto lg:px-10 lg:max-w-7xl w-full py-20">
          <div className="flex flex-col lg:gap-y-2 gap-y-4 lg:items-end items-center">
            <HomeGallery />
          </div>
        </div>

        {/* Work Streamline section 08 */}
        <div className=" ml-10 mr-10 flex flex-col items-center justify-center gap-y-10">
          <div className=" lg:w-2/4 flex flex-col items-center text-white text-center gap-y-3">
            <Heading className="lg:text-[70px] text-[50px] font-tek  leading-tight uppercase">
              {/* Streamline Your Process: Never Worry About VIDEO Editing Again
              with These Simple Steps. */}
              {heroSectionData.section8Head}
            </Heading>
            <span className="text-sm lg:w-2/3">
              {/* AIM VFX offers a faster, more cost-effective alternative, saving
              you time and money, instead of hiring, retaining, and overhead
              expenses. */}
              {heroSectionData.section8Head1}
            </span>
          </div>
          <div className="py-10 ">
            <div className="flex items-center flex-col gap-y-20 justify-center">
              <WorkStreamline />
            </div>
          </div>
        </div>

        {/* How it works  section 09 */}
        <div className="flex flex-col gap-y-6 items-center justify-center py-20">
          <div className="flex flex-col items-center justify-center">
            <Heading className="text-[60px] font-tek text-white uppercase leading-tight">
              {/* How it <span className="text-[#2EABAF]">works</span> */}
              {heroSectionData.section9Head}{" "}
              <span className="text-[#2EABAF]">
                {heroSectionData.section9Head1}
              </span>
            </Heading>
            <p className="text-sm text-white w-2/3 text-center">
              {/* Enjoy peace of mind as we handle the entire video editing process
              after you submit your footage. */}
              {heroSectionData.section9Para}
            </p>
          </div>
          <CustomVideo1 videoSrc={videoSrc} thumbnailSrc={thumbnailSrc} />

          <div className="flex items-center justify-center gap-x-4 ">
            <Button className="px-10 py-2.5 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              Read More
            </Button>
            <Button className="px-8 py-2.5 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              Choose a Plan
            </Button>
          </div>
        </div>

        {/* Portfolio section 10 */}
        <div className="flex flex-col gap-y-7 items-center justify-center lg:py-20 mt-20 py-44 home-page-portfolio">
          <div className="flex flex-col items-center justify-center">
            <Heading className="text-[60px] font-tek text-white uppercase leading-tight">
              {/* Portfolio */}
              {heroSectionData.section10Head}
            </Heading>
            <p className="text-sm text-white  text-center lg:px-0 px-6">
              {/* Uncover Our Rich Array of Work: Browse Categories Ranging from
              eLearning to Hollywood-style Productions. */}
              {heroSectionData.section10Para}
            </p>
          </div>
          <div className="pt-6 pb-10 lg:px-0 px-2">
            <HomePortfolioVideo />
          </div>
        </div>

        {/* Testimonals  section 11*/}
        <div className="flex flex-col gap-y-7 items-center justify-center py-20 mt-20">
          <div className="flex flex-col items-center justify-center">
            <Heading className="text-[60px] font-tek text-white uppercase leading-tight">
              {/* Testimonals */}
              {heroSectionData.section11Head}
            </Heading>
            <p className="text-sm text-white  text-center">
              {/* A Collection of Client Testimonials That Speak Volumes. */}
              {heroSectionData.section11Para}
            </p>
          </div>
          <div className="pt-8 pb-10 lg:px-0 px-3">
            <HomeTestimoal />
          </div>
        </div>

        {/* Awards  section 12*/}
        <div className="flex items-center justify-center ">
          <div className="flex flex-col md:flex-row gap-x-8 border border-[#15B8C7] px-8 md:px-20 pt-6 md:pt-10 pb-6 rounded-[35px]">
            <div className="flex flex-col gap-y-6 ">
              <Heading className="uppercase text-2xl md:text-4xl font-bold italic text-[#15B8C7]">
                {/* Upword Activity */}
                {heroSectionData.section12Head}
              </Heading>

              <div className="flex flex-col md:flex-row md:gap-x-20">
                <div className="flex flex-col text-white">
                  <span className="text-gray-300">
                    {heroSectionData.section12Span1}
                  </span>
                  <span className="font-bold">
                    {heroSectionData.section12Span2}
                  </span>
                </div>
                <div className="flex flex-col text-white">
                  <span className="text-gray-300">
                    {heroSectionData.section12Span3}
                  </span>
                  <span className="font-bold">
                    {heroSectionData.section12Span4}
                  </span>
                </div>
                <div className="flex flex-col text-white">
                  <span className="text-gray-300">
                    {heroSectionData.section12Span5}
                  </span>
                  <span className="font-bold">
                    {heroSectionData.section12Span6}
                  </span>
                </div>
              </div>
            </div>
            <div className="hidden md:block h-32 w-0.5 bg-gray-500"></div>{" "}
            {/* Hidden on smaller screens */}
            <div className="flex flex-col gap-y-4 mt-6 md:mt-0">
              {" "}
              {/* Added margin top for smaller screens */}
              <Heading className="uppercase text-xl md:text-2xl font-bold italic text-[#15B8C7] leading-tight">
                Awards
              </Heading>
              <div className="flex flex-col gap-y-3 -mt-2">
                <div className="flex flex-col text-white text-sm">
                  <span className="flex items-center gap-x-1.5">
                    <FaStar />
                    Cannes Lions
                  </span>
                  <span className="flex items-center gap-x-1.5">
                    <FaStar />
                    Red Apple
                  </span>
                </div>
                <div className="flex flex-col text-[#15B8C7]">
                  <span className="flex items-center gap-x-1.5">
                    <FaTrophy />
                    100% success rate
                  </span>
                  <span className="flex items-center gap-x-1.5">
                    <FaPercent />
                    Top Rated
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <WorkHistory />
        <FaqSection />

        <FooterWithForm />
      </div>
    </>
  );
};

export default Home;
