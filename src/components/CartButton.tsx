"use client";

import React from "react";

import IconCart from "./icons/IconCart";

import {useAppStoreSelector} from "@/hooks/useAppStore";

import {useRouter} from "next/navigation";

const CartButton = () => {
  const router = useRouter();

  const cartCount = useAppStoreSelector((state) => state.cartSlice.cartCount);

  return (
    <div role="button" className="btn btn-ghost btn-circle" onClick={() => router.push("/cart")}>
      <div className="indicator">
        <IconCart />
        <span className="badge badge-sm indicator-item">{cartCount}</span>
      </div>
    </div>
  );
};

export default CartButton;
