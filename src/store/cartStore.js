import React from "react";

import { create } from "zustand";

import { Link } from "react-router-dom";
const useCartStore = create((set) => ({
  cart: [],

  addToCart: (product) => {
    set((state) => ({
      cart: [
        ...state.cart,
        {
          ...product,
          quantity: 1,
        },
      ],
    }));
  },
}));

export default useCartStore;