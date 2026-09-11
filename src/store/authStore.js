import { create } from "zustand";
import axios from "axios";
import useCartStore from "./cartStore";
import useWishlistStore from "./wishlistStore";

const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token"),

  loading: false,
  error: null,

  login: async (username, password) => {
    set({
      loading: true,
      error: null,
    });

    const registeredUsers =
      JSON.parse(
        localStorage.getItem("registeredUsers")
      ) || [];

    const localUser = registeredUsers.find(
      (user) =>
        user.username === username &&
        user.password === password
    );

    if (localUser) {
      const localToken = `local-token-${localUser.id}`;

      localStorage.setItem(
        "user",
        JSON.stringify(localUser)
      );

      localStorage.setItem(
        "token",
        localToken
      );

      set({
        user: localUser,
        token: localToken,
        isAuthenticated: true,
        loading: false,
        error: null,
      });

      return {
        success: true,
        user: localUser,
      };
    }

    try {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        {
          username,
          password,
          expiresInMins: 30,
        }
      );

      const data = response.data;

      localStorage.setItem(
        "user",
        JSON.stringify(data)
      );

      localStorage.setItem(
        "token",
        data.accessToken
      );

      set({
        user: data,
        token: data.accessToken,
        isAuthenticated: true,
        loading: false,
        error: null,
      });

      return {
        success: true,
        user: data,
      };
    } catch (error) {
      let message = "Invalid credentials";

      if (error.response?.status === 429) {
        message =
          "Too many requests. Please wait and try again.";
      } else if (error.response?.data?.message) {
        message = error.response.data.message;
      }

      set({
        loading: false,
        error: message,
        isAuthenticated: false,
      });

      return {
        success: false,
        error: message,
      };
    }
  },

  logout: () => {
    // Clear authentication
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    // Clear cart
    useCartStore.getState().clearCart();

    // Clear wishlist
    useWishlistStore.getState().clearWishlist();

    // Clear persisted cart and wishlist
    localStorage.removeItem("cart-storage");
    localStorage.removeItem("wishlist-storage");

    set({
      user: null,
      token: null,
      isAuthenticated: false,
      error: null,
    });
  },

  clearError: () => {
    set({
      error: null,
    });
  },
}));

export default useAuthStore;