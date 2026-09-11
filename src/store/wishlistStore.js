import { create } from "zustand";
import { persist } from "zustand/middleware";
const useWishlistStore = create(
  persist((set) => ({
  wishlist: [],

  addToWishlist: (product) => {
    set((state) => {
      const exists = state.wishlist.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return state;
      }

      return {
        wishlist: [
          ...state.wishlist,
          {
            ...product,
            quantity: 1,
          },
        ],
      };
    });
  },

  removeFromWishlist: (productId) => {
    set((state) => ({
      wishlist: state.wishlist.filter(
        (item) => item.id !== productId
      ),
    }));
  },
}),
{name:"wishlist-storage"},
));

export default useWishlistStore;