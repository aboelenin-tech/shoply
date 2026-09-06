import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cart: [],

  addToCart: (product) => {
    set((state) => {
      const existingProduct = state.cart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        cart: [
          ...state.cart,
          {
            ...product,
            quantity: 1,
          },
        ],
      };
    });
  },

  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    }));
  },

  
increaseQuantity: (productId) => {
  set((state) => ({
    cart: state.cart.map((item) =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ),
  }));
},

decreaseQuantity: (productId) => {
  set((state) => ({
    cart: state.cart.map((item) =>{
      return item.id === productId
        ? { ...item, quantity: item.quantity -1 }
        : item
    }
    ).filter((item)=>item.quantity>0)
    ,
  }));
},

calcSubtotal: () => {
  const { cart } = get();

  return cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
},

calcShipping: () => {
  const subtotal = get().calcSubtotal();

  return subtotal >= 1000? 0 : 10;
},
calcTotal: () => {
  const subtotal = get().calcSubtotal();
  const shipping = get().calcShipping();

  return subtotal + shipping;
},


}));


export default useCartStore;