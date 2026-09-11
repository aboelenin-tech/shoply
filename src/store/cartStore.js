import { create } from "zustand";
import { persist } from "zustand/middleware";
const useCartStore = create(
  persist((set, get) => ({
  cart: [],
  orders: [],

  addToCart: (product, quantity = 1) => {
    set((state) => {
      const existingProduct = state.cart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + quantity,
                }
              : item
          ),
        };
      }

      return {
        cart: [
          ...state.cart,
          {
            ...product,
            quantity: quantity,
          },
        ],
      };
    });
  },

  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter(
        (item) => item.id !== productId
      ),
    }));
  },

  increaseQuantity: (productId) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: Math.min(
                item.stock,
                item.quantity + 1
              ),
            }
          : item
      ),
    }));
  },

  decreaseQuantity: (productId) => {
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0),
    }));
  },

  calcSubtotal: () => {
    const { cart } = get();

    return cart.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  },

  calcShipping: () => {
    const subtotal = get().calcSubtotal();

    return subtotal >= 1000 ? 0 : 10;
  },

  calcTotal: () => {
    const subtotal = get().calcSubtotal();
    const shipping = get().calcShipping();

    return subtotal + shipping;
  },

  createOrder: () => {
    const {
      cart,
      calcSubtotal,
      calcShipping,
      calcTotal,
    } = get();

    if (cart.length === 0) {
      return null;
    }

    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      status: "Processing",
      items: [...cart],
      subtotal: calcSubtotal(),
      shipping: calcShipping(),
      total: calcTotal(),
    };

    set((state) => ({
      orders: [...state.orders, newOrder],
      cart: [],
    }));

    return newOrder;
  },
}),
{name:"cart-storade",}
  )
);

export default useCartStore;