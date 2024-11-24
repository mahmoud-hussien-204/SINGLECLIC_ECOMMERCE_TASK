"use client";

import IconCart from "@/components/icons/IconCart";

import {useAppStoreDispatch} from "@/hooks/useAppStore";

import {cartSliceActions} from "@/store/cartSlice";

interface IProps {
  product: IProduct;
}
const AddToCartButton = ({product}: IProps) => {
  const dispatch = useAppStoreDispatch();

  return (
    <button
      onClick={() => dispatch(cartSliceActions.addToCart({...product, quantity: 1}))}
      type="button"
      className="capitalize text-sm btn btn-primary btn-sm rounded-full"
    >
      <IconCart />
      add to cart
    </button>
  );
};

export default AddToCartButton;
