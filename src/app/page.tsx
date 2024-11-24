import Breadcrumb from "@/components/BreadCrumb";

import Container from "@/components/Container";

import {Metadata} from "next";

import ProductItem from "./_components/ProductItem";

export const metadata: Metadata = {
  title: "Products List",
};

const breadcrumbItems = [{label: "Home", href: "/"}, {label: "Products List"}];

const HomePage = async () => {
  const productsRequest = await fetch("https://fakestoreapi.com/products");

  const productsList: IProduct[] = await productsRequest.json();

  return (
    <section className="py-2rem">
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <div className="grid mt-2rem md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1.5rem">
          {productsList && Array.isArray(productsList) && productsList.length ? (
            productsList.map((product) => <ProductItem key={product.id} product={product} />)
          ) : (
            <div className="col-span-full">Empty State</div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default HomePage;
