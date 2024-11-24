import AppHelper from "@/helpers/AppHelper";

import Image from "next/image";

import Link from "next/link";

import AddToCartButton from "./AddToCartButton";

interface IProps {
  product: IProduct;
}

const ProductItem = ({product}: IProps) => {
  return (
    <div
      key={product.id}
      className="card bg-base-100 transition-colors border-2 border-transparent hover:border-primary shadow-xl"
    >
      <Link href={`/${product.id}`} className="p-1.5rem">
        <figure className="relative aspect-video">
          <Image src={product.image} alt="Shoes" fill className="object-contain" />
        </figure>
      </Link>
      <div className="card-body border-t">
        <Link href={`/${product.id}`} className="card-title hover:text-primary">
          {AppHelper.sliceContent(product.title, 15)}

          <div className="badge badge-secondary">NEW</div>
        </Link>
        <p>{AppHelper.sliceContent(product.description, 50)}</p>
        <div className="card-actions justify-between mt-0.5rem items-center">
          <AddToCartButton product={product} />

          {/* <div className="badge badge-outline">{product.category}</div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
