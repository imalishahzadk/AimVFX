import React from "react";
import { FolderMinusIcon } from "@heroicons/react/24/outline";

const ProjectInfo = () => {
  return (
    <div className="max-w-6xl mx-auto text-white">
      <div className="px-9 py-9 flex-wrap gap-y-5  border-setting bg-[#0B1A2880] rounded-lg">
        <div className="w-full flex flex-wrap gap-y-5 pb-11 justify-between items-center">
          <div>
            <h1 className="font-tek lg:text-[50px] text-3xl leading-10 font-normal uppercase ">
              PROJECT BRIEF
            </h1>
            <p className="text-base  font-light">
              delivery date Oct 31, 2023 8:00 AM | 48+ hours project
            </p>
          </div>
          <p>Edit project brief</p>
        </div>
        <div className="flex flex-wrap gap-x-40">
          <h1 className="font-tek lg:text-[50px] pb-10 text-3xl leading-10 font-normal uppercase ">
            Please fill in this brief
          </h1>
          <div className="flex flex-col justify-between">
            <h2 className="text-xl font-bold  uppercase">
              resources
            </h2>
            <div className="flex items-center gap-3">
              <FolderMinusIcon className="h-6 w-6 text-white " />

              <p>Resources have not beed added yet.</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold  uppercase">
            project name
          </h2>
          <p>What should we name your project?</p>
          <h3 className="font-medium text-base pt-6">Lorem Ipsum</h3>
        </div>
        <div className="py-10">
          <h2 className="text-xl font-bold  uppercase">job</h2>
          <p>How can we help?</p>
          <p className="text-lg pt-4 font-medium ">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <h1 className="font-tek lg:text-[50px] pb-10 text-3xl leading-10 font-normal uppercase ">
          Creative Assets
        </h1>
        <div className="pb-10">
          <h2 className="text-xl font-bold  uppercase">
            New or edits
          </h2>
          <p>What best fits your assets needs?</p>
          <p className="text-lg pt-4 font-medium ">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <h1 className="font-tek lg:text-[50px] pb-10 text-3xl leading-10 font-normal uppercase">
          lets design new creative assets
        </h1>
        {/* --------------------    Goal SEction------------------------------*/}
        <div className="pb-10">
          <h2 className="text-xl font-bold  uppercase">Channels</h2>
          <p>What would make this project a win?</p>
          <p className="text-lg pt-4 font-medium ">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        {/* --------------------    chennal SEction------------------------------*/}
        <div className="pb-10">
          <h2 className="text-xl font-bold  uppercase">goals</h2>
          <p>Where do you want people to see your assets?</p>
          <p className="text-xl pt-4 font-medium ">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        {/* --------------------    target Audience SEction------------------------------*/}
        <div className="pb-10">
          <h2 className="text-xl font-bold  uppercase">
            target audience
          </h2>
          <p>
            Who are they and do they have any especial interests or pain points?
          </p>
          <p className="text-xl pt-4 font-medium ">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        {/* -------------------- describe the project SEction------------------------------*/}
        <div className="pb-10">
          <h2 className="text-xl font-bold  uppercase">
            Describe the project
          </h2>
          <p>
            Consideer providing context, challenges, requirements, playback
            duration, past work, preferences, scripts or instructions,
            references and links
          </p>
          <p className="text-xl pt-4 font-medium ">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        {/* -------------------- Formats, sizes or ad set SEction------------------------------*/}
        <div className="pb-10">
          <h2 className="text-xl font-bold  uppercase">
            Formats, sizes or ad set
          </h2>
          <p>
            Are there any specific requirements for assets formats, sizes or
            dimensions?
          </p>
          <p className="text-xl pt-4 font-medium ">
            Yes, I’ll provide the creative specs/chase list
          </p>
        </div>
        {/* -------------------- CopyWriting SEction------------------------------*/}
        <div className="pb-10">
          <h2 className="text-xl font-bold  uppercase">
            Copywriting
          </h2>
          <p>Would you like help with copywriting?</p>
          <p className="text-xl pt-4 font-medium ">Yes</p>
        </div>
        <h1 className="font-tek lg:text-[50px] pb-10 text-3xl leading-10 font-normal uppercase">
          Delivery
        </h1>
        {/* --------------------DEADLINE SEction------------------------------*/}
        <div className="pb-10">
          <h2 className="text-xl font-bold  uppercase">deadline</h2>
          <p>Would you like help with copywriting?</p>
        </div>
        {/* --------------------AI-enhanced [beta] SEction------------------------------*/}
        <div className="pb-10">
          <h2 className="text-xl font-bold  uppercase">
            AI-enhanced [beta]
          </h2>
          <p>
            Would you be open to us using AI for greater efficiences and boosted
            creativity?
          </p>
          <p className="text-xl pt-4 font-medium ">
            Yes, please feel free to use AI where it makes sense
          </p>
        </div>
        {/* --------------------Skip estimate approval SEction------------------------------*/}

        <div className="pb-10">
          <h2 className="text-xl font-bold  uppercase">
            Skip estimate approval
          </h2>
          <p>Would you like to skip estimate approval?</p>
          <p className="text-xl pt-4 font-medium ">
            No, I would like to skip the estimate approval, and start the
            project straight away
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProjectInfo;