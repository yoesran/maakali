import { features } from "../constants";

import FeatureItem from "./FeatureItem";

function Features() {
  return (
    <div className="w-full p-10 flex flex-wrap justify-center">
      {features.map((feature) => (
        <FeatureItem key={feature.title} feature={feature} />
      ))}
    </div>
  );
}

export default Features;
