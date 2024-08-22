import { useState } from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Solution from "./pages/Solution/Solution";
import {TeamPage} from "./components/Team Page/TeamPage";
import  Navbar  from "./components/Navbar/Navbar";
import AboutUsPage from "./components/About Us Page/AboutUsPage";
import Signin from "./components/Auth/Signin/Signin";
import Signup from "./components/Auth/Signup/Signup";
import SignUpCompanyInfo from "./components/Auth/Signup/SignUpCompanyInfo";
import SignUpTalentInfo from "./components/Auth/Signup/SignUpTalentInfo";
import FindYourTeam from "./components/Dashboard/OnBoard/FindYourTeam/FindYourTeam";
import CreateNewProject from "./components/Dashboard/OnBoard/CreateNewProject/CreateNewProject";
import BriefProject from "./components/Dashboard/OnBoard/BriefProject/BriefProject";
import BriefProject2 from "./components/Dashboard/OnBoard/BriefProject2/BriefProject2";
import BlogPost from "./components/BlogPost/BlogPost";
import Promotional from "./components/PromationalAbout/Promotional";
import Blog from "./components/Blog/Blog";
import ForStartup from "./components/ForStratup/ForStartup";
import BookCall from "./components/Book Call/BookCall";
import HelpCenter from "./components/HelpCenter/HelpCenter";
import HelpCatogry from "./components/HelpCategory/HelpCategory";
import HelpTutorial from "./components/HelpCategoryPage28/HelpTutorial";
import Careers from "./components/Careers/Careers";
import ContactUs from "./components/ContactUs/ContactUs";
import StoryPage from "./components/SotryPage/StoryPage";
import SucessStories from "./components/SucessSroeries/SucessStories";
import ControlFreelancer from "./components/ControlFreelancer/ControlFreelancer";
import Compare from "./components/Campare/Compare";
import BookConsulation from "./components/BookConsulation/BookConsulation";
import OurWorks from "./components/OurWorks/OurWorks";
import Pricing from "./components/Pricing/Pricing";
import Setting from "./components/Setting/Setting";
import Reviews from "./components/Reviews/Reviews";
import Panel from "./components/Panel/Panel";
import HowitWorksPage33 from "./components/HowitWorksPage33/HowitWorksPage33";
import CheckOut from "./components/CheckOut/CheckOut";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import ProjectInfo from "./components/ProjectPage/ProjectInfo";
import Messages from "./components/ProjectPage/Message";
import Designs from "./components/ProjectPage/Designs";
import ProjectBrief from "./components/ProjectBrief/ProjectBrief";
import DropDown from "./components/DropDown/DropDown";
import Company from "./components/Company/Company";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        {window.location.pathname !== "/findyourteam" &&
        window.location.pathname !== "/create-new-project" &&
        window.location.pathname !== "/brief-project" &&
        window.location.pathname !== "/book-call" &&
        window.location.pathname !== "/brief-project2" ? (
          <Navbar />
        ) : (
          ""
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/drop-down" element={<DropDown />} />

          <Route path="/company" element={<Company />} />
          <Route path="/company/team-page" element={<TeamPage />} />

          <Route path="/solutions" element={<Solution />} />
          <Route path="/about-us-page" element={<AboutUsPage />} />
          <Route path="/our-works" element={<OurWorks />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup-companyinfo" element={<SignUpCompanyInfo />} />
          <Route path="/signup-talentinfo" element={<SignUpTalentInfo />} />
          <Route path="/findyourteam" element={<FindYourTeam />} />
          <Route path="/create-new-project" element={<CreateNewProject />} />
          <Route path="/brief-project" element={<BriefProject />} />
          <Route path="/brief-project2" element={<BriefProject2 />} />
          <Route path="/blogpost" element={<BlogPost />} />
          <Route path="/promotional-page" element={<Promotional />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/forstartup" element={<ForStartup />} />
          <Route path="/book-call" element={<BookCall />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/help-category" element={<HelpCatogry />} />
          <Route path="/help-tutorial" element={<HelpTutorial />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/story-page" element={<StoryPage />} />
          <Route path="/success-story" element={<SucessStories />} />
          <Route path="/control-freelancer" element={<ControlFreelancer />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/book-consultation" element={<BookConsulation />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/panel" element={<Panel />} />

          <Route path="/howitworks" element={<HowitWorksPage33 />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/projectpage" element={<ProjectPage />}>
            <Route index element={<ProjectInfo />}></Route>
            <Route path="messages" element={<Messages />} />
            <Route path="projectinfo" element={<ProjectInfo />} />
            <Route path="designs" element={<Designs />} />
          </Route>
          <Route path="/project-brief" element={<ProjectBrief />} />
          {/* <Route path="/drop-down" element={<DropDown />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
