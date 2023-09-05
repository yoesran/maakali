import { features } from "../constants";

import FeatureItem from "./FeatureItem";

function Features() {
  return (
    <div className="w-full flex flex-wrap justify-center md:10">
      {features.map((feature) => (
        <FeatureItem key={feature.title} feature={feature} />
      ))}
    </div>
  );
}

export default Features;
