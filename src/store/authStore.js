import { create } from "zustand";
import axios from "axios";

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
      let message = "Login failed";

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
    localStorage.removeItem("user");
    localStorage.removeItem("token");

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