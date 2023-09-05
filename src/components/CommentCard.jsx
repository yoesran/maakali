import { moreIcon } from "../assets/svgs";
import { getRandomGradient } from "../constants";

function CommentCard({ img, name, content }) {
  return (
    <div
      className={`flex-shrink-0 basis-52 p-px bg-gradient-to-br ${getRandomGradient()} rounded-md lg:basis-auto`}
    >
      <div className="p-4 bg-grayBackground rounded-md flex flex-col items-center gap-4 lg:flex-row">
        <img src={img} alt="avatar" className="w-20 h-20 rounded-full" />

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <p className="font-bold">{name}</p>
            <img src={moreIcon} alt="more" />
          </div>
          <p>"{content}"</p>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
