import React from "react";
import man from "../images/IMG_20221206_195430-removebg-preview.png";
import Progress from "./Progress"; // Assuming this is a custom component you've created
import jerry from "../images/jerry.png";
import harsha from "../images/harsha.png";
import Twin from "../images/Twin.png";
import ContactForm from "./ContactForm";

export const Home = () => {
  return (
    <div className="overflow-y-auto h-screen">
      <div className="pt-16">
        <h1 className="mt-48 pl-36 text-2xl font-semibold font-serif text-blue-950">
          Freelance
        </h1>
        <h2 className="pl-36 text-2xl font-semibold font-serif text-red-700 animate-moveInRight">
          Developer
        </h2>
        <div className="flex justify-center items-center">
          <div className="mr-8">
            <img
              src={man}
              className="rounded-full w-64 h-64 object-cover bg-gradient-to-bl from-indigo-400"
              style={{ clipPath: "circle()" }}
              alt="Man"
            />
          </div>
          <div className="bg-gray-200 ml-11 p-4 w-96 rounded-lg">
            <h3 className="text-blue-950 font-bold">Hello, I am Abu Mohamad</h3>
            <p>
              I am a Btech Final Year Student in JNUTH jagtial, Belongs to a CS
              background, Looking For opportunities. Love to work in startups.
            </p>
          </div>
        </div>
        <div className="m-0 pl-0 pt-8 bg-slate-50">
          <div className="relative">
            <div className="p-10 flex">
              <img
                src={man}
                className="w-60 h-60 bg-pink-400"
                alt="About Me"
                style={{
                  clipPath:
                    "polygon(12% 0, 86% 0, 100% 14%, 100% 80%, 75% 100%, 14% 100%, 0 86%, 0 14%)",
                }}
              />
              <div className="ml-10">
                <h3 className="text-blue-950 font-bold m-3">About Me</h3>
                <div className="m-3 pr-0">
                  <h4 className="text-black font-lg">Better Design</h4>
                  <h4 className="text-black font-lg">Better Experience</h4>
                  <p className="text-sm">
                    I design and build digital Products, My skills are
                  </p>
                  <span>Html</span>
                  <Progress className="p-10 pb-10" percentage={80} />
                  <span>JavaScript</span>
                  <Progress className="p-10 pb-10" percentage={60} />
                  <span>React</span>
                  <Progress className="p-10 pb-10" percentage={86} />
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="m-0 pl-0 pt-8 bg-slate-50">
          <h1 className="text-blue-950 font-bold m-3 flex justify-center">
            Team
          </h1>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <div>
                <img
                  src={jerry}
                  className="rounded-full w-64 h-64 object-cover hover:bg-blue-500 transition-colors duration-300"
                  style={{ clipPath: "circle(50% at 50% 50%)" }}
                  alt="Jerry"
                />
                <span className="flex justify-center">(Sreeja)</span>
                <div className="flex justify-center">Figma</div>
              </div>
              <div>
                <img
                  src={harsha}
                  className="rounded-full w-64 h-64 object-cover ml-4 hover:bg-blue-500 transition-colors duration-300"
                  style={{ clipPath: "circle(50% at 50% 50%)" }}
                  alt="Harsha"
                />
                <span className="flex justify-center">(Harsha)</span>
                <div className="flex justify-center">React Dev</div>
              </div>
              <div>
                <img
                  src={man}
                  className="rounded-full w-64 h-64 object-cover ml-4 hover:bg-blue-500 transition-colors duration-300"
                  style={{ clipPath: "circle(50% at 50% 50%)" }}
                  alt="Man"
                />
                <span className="flex justify-center">(Abu)</span>

                <div className="flex justify-center">React Dev</div>
              </div>
              <div>
                <img
                  src={Twin}
                  className="rounded-full w-64 h-64 object-cover ml-4 hover:bg-blue-500 transition-colors duration-300"
                  style={{ clipPath: "circle(50% at 50% 50%)" }}
                  alt="Twin"
                />
                <span className="flex justify-center">(Akhila)</span>
                <div className="flex justify-center">MERN Stack</div>
              </div>
            </div>
          </div>
          <div>
            <div className="m-0 pl-0 pt-8 bg-slate-50">
              <h1 className="text-blue-950 font-bold m-3 flex justify-center">
                OURS TEAM PROJECT
              </h1>
              <div className="flex justify-center ml-11 p-4">
                <p className="text-center line-clamp-3">
                  We've collectively developed a range of projects, utilizing
                  various technologies tailored to each project's specific
                  requirements. We've collaboratively constructed multiple
                  platforms, each providing enriching experiences and leveraging
                  diverse technologies suited to their unique demands.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>{/* <ContactForm /> */}</div>
        <div className="flex justify-center items-center mt-4">
          <div className="text-center">
            <h3 className="text-blue-950 font-bold"></h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
