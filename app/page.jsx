
"use client";
// compoents
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-0 xl:pb-7 ">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-2xl">Software Developer</span>
            <h1 className="h1 mb-2">
              Hello I'm <br />
              <span className="text-accent">Royson Menezes</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various prgramming languages and technologies.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* <Button
                as="a" // Use the button as an anchor tag
                href="/assets/resume/Royson_Menezes_resume.pdf"
                download="Royson_Menezes_Resume.pdf"
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download C V</span>
                <FiDownload className="text-xl " />
              </Button> */}
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/assets/resume/Royson_Menezes_resume.pdf"; // Correct file path
                  link.download = "Royson_Menezes_Resume.pdf"; // Suggested file name
                  link.click();
                }}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl " />
              </Button>
              <div className="mb-3 xl;mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex 
                justify-center items-center text-accent text-base hover:bg-accent 
                hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
