import { features } from "../constants";

import Container from "../components/Container";
import FeatureItem from "../components/FeatureItem";

function AboutPage() {
  return (
    <Container>
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-medium my-10">About Us</h1>

        <div className="w-full flex flex-wrap justify-center">
          {features.map((feature) => (
            <FeatureItem key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default AboutPage;
