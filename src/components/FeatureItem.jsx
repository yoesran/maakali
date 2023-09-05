import { checkIcon } from "../assets/svgs";

function FeatureItem({ feature }) {
  return (
    <div className="flex-shrink-0 basis-full flex flex-col gap-4 bg-white rounded-md shadow-md p-10 m-3 lg:basis-5/12">
      <img src={checkIcon} alt="check" className="w-10 h-10" />
      <h3 className="text-2xl font-semibold">{feature.title}</h3>
      <p className="text-secondary ">{feature.content}</p>
    </div>
  );
}

export default FeatureItem;
