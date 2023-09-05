import { checkIcon } from "../assets/svgs";
import Button from "./Button";

function ProductCard({ product }) {
  return (
    <div className="p-8 bg-white rounded-md shadow-md flex flex-col gap-6 xl:self-baseline xl:items-center">
      <div className="font-semibold text-center">
        <p className="text-greenText">{product.title}</p>
        <p className="text-3xl">{product.price}</p>
        <p className="text-tertiary">{product.subTitle}</p>
      </div>

      {product.items.map((item) => (
        <div key={item} className="flex items-center gap-4">
          <img src={checkIcon} alt="check" />
          <p>{item}</p>
        </div>
      ))}

      <Button className="bg-greenBackground text-white font-bold">
        Get Started
      </Button>
    </div>
  );
}

export default ProductCard;
