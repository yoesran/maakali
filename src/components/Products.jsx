import { products } from "../constants";

import ProductCard from "./ProductCard";

function Products() {
  return (
    <div className="flex flex-col items-center gap-6 p-12">
      <div className="flex flex-col gap-3 text-center">
        <p className="text-greenText font-semibold">Product</p>
        <h2 className="text-3xl font-semibold">What we offer</h2>
        <p className="text-tertiary">
          14 day free trial for any plan, no credit card needed
        </p>
      </div>

      <div className="flex flex-col gap-6 xl:flex-row">
        {products.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
