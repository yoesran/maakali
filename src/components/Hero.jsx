import { hero } from "../assets/imgs";

import Button from "./Button";

function Hero() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center">
        <h1 className="font-black text-4xl text-center my-5">
          We love quick{" "}
          <span className="bg-gradient-to-br from-green-400 via-blue-700 to-indigo-400 bg-clip-text text-transparent">
            MVP
          </span>{" "}
          & hate 🙅‍♂️ belated perfections
        </h1>

        <div className="w-1/3 h-px bg-teal-500 opacity-50 mb-10"></div>
      </div>

      <div className="flex flex-col items-center md:flex-row">
        <div className="flex flex-col justify-center items-center gap-4 p-4 text-center xl:p-28">
          <p className="text-greenText font-bold">Full stack</p>
          <h2 className="font-bold text-2xl">
            Build full-stack web and mobile apps in hours. Easy to start, easy
            to scale
          </h2>
          <p className="text-secondary">
            Are you tired of settling for mediocre websites that fail to
            captivate your audience? Look no further! we’re here to save the day
            and create a digital masterpiece tailored to your every need.
          </p>
          <Button className="bg-greenBackground text-white font-bold">
            Get Started
          </Button>
        </div>

        <img src={hero} alt="hero illustration" className="w-full md:w-1/2" />
      </div>
    </div>
  );
}

export default Hero;
