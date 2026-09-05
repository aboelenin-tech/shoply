import { create } from "zustand";
import axios from "axios";

const useProductStore = create((set, get) => ({
    // States
    allProducts: [],
    products: [],
    categories: [],

    maxPrice: 0,
    selectedCategory: "all",
    rating: 0,
    search: "",

    loading: false,
    error: "",

    // Fetch Products
    fetchProducts: async () => {
        set({ loading: true, error: "" });

        try {
            const response = await axios.get(
                "https://dummyjson.com/products?limit=0"
            );

            set({
                allProducts: response.data.products,
                products: response.data.products,
                loading: false,
            });
        } catch (error) {
            set({
                error: "Failed to load products. Please try again.",
                loading: false,
            });
        }
    },

    // Fetch Categories
    fetchCategories: async () => {
        try {
            const response = await axios.get(
                "https://dummyjson.com/products/categories"
            );

            set({
                categories: response.data,
            });
        } catch (error) {
            console.log(error);
        }
    },

    // Filtering
    filterProducts: (price, category, rating) => {
        const { allProducts } = get();

        let filteredProducts = allProducts;

        // Category
        if (category !== "all") {
            filteredProducts = filteredProducts.filter(
                (product) => product.category === category
            );
        }

        // Price
        if (price > 0) {
            filteredProducts = filteredProducts.filter(
                (product) => product.price <= price
            );
        }

        // Rating
        if (rating > 0) {
            filteredProducts = filteredProducts.filter(
                (product) => product.rating >= rating
            );
        }

        set({
            products: filteredProducts,
            maxPrice: price,
            selectedCategory: category,
            rating: rating,
        });
    },

    // Category
    handleCategory: (category) => {
        const { maxPrice, rating, filterProducts } = get();

        filterProducts(maxPrice, category, rating);
    },

    // Price
    handlePrice: (price) => {
        const { selectedCategory, rating, filterProducts } = get();

        filterProducts(price, selectedCategory, rating);
    },

    // Rating
    handleRating: (rating) => {
        const { maxPrice, selectedCategory, filterProducts } = get();

        filterProducts(maxPrice, selectedCategory, rating);
    },

    // Search
    setSearch: (search) => {
        set({ search });
    },
    searchProducts: async (query) => {
        if (!query.trim()) {
            get().fetchProducts();
            return;
        }

        try {
            const response = await axios.get(
                `https://dummyjson.com/products/search?q=${query}`
            );

            set({
                products: response.data.products,
                search: query,
            });
        } catch (error) {
            console.log(error);
        }
    },

    // Sorting
    sortingPriceAs: () => {
        const { products } = get();

        set({
            products: [...products].sort((a, b) => a.price - b.price),
        });
    },

    sortingPriceDes: () => {
        const { products } = get();

        set({
            products: [...products].sort((a, b) => b.price - a.price),
        });
    },

    sortingRatingAs: () => {
        const { products } = get();

        set({
            products: [...products].sort((a, b) => a.rating - b.rating),
        });
    },

    sortingRatingDes: () => {
        const { products } = get();

        set({
            products: [...products].sort((a, b) => b.rating - a.rating),
        });
    },
}));

export default useProductStore;