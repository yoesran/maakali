import Button from "../components/Button";
import Container from "../components/Container";
import Products from "../components/Products";

function ProductsPage() {
  return (
    <div>
      <Container>
        <Products />
      </Container>

      <div className="bg-lightGreenBackground">
        <Container>
          <div className="flex flex-col justify-center items-center gap-4 py-40 text-center xl:px-60">
            <p className="text-greenText font-bold">Full stack</p>
            <h2 className="font-bold text-2xl">
              Build full-stack web and mobile apps in hours. Easy to start, easy
              to scale
            </h2>
            <p className="text-secondary">
              Are you tired of settling for mediocre websites that fail to
              captivate your audience? Look no further! we’re here to save the
              day and create a digital masterpiece tailored to your every need.
            </p>
            <Button className="bg-greenBackground text-white font-bold">
              Get Started
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ProductsPage;
