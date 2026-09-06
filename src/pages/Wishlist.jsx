import useWishlistStore from "../store/wishlistStore";
import useCartStore from "../store/cartStore";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";

function Wishlist() {
    const wishlist = useWishlistStore(
        (state) => state.wishlist
    );

    const removeFromWishlist = useWishlistStore(
        (state) => state.removeFromWishlist
    );

    const addToCart = useCartStore(
        (state) => state.addToCart
    );

    // Remove product
    const handleRemove = (id) => {
        removeFromWishlist(id);
        toast.success("Removed from wishlist");
    };

    // Add product to cart
    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success(
            `${product.title} added to cart!`
        );
    };

    return (
        <div className="p-4">

            {/* Header */}
            <div className="border-bottom p-3 mb-5">
                <h1 className="fw-bold">
                    My Wishlist
                </h1>

                <p className="px-1 text-secondary">
                    {wishlist.length} saved items
                </p>
            </div>

            <div className="container">

                <div className="border shadow-sm p-4 mb-5 bg-body-tertiary rounded-4">

                    {/* ================= EMPTY WISHLIST ================= */}
                    {wishlist.length === 0 ? (

                        <div className="d-flex flex-column align-items-center text-center py-5">

                            <div
                                className="d-flex justify-content-center align-items-center rounded-circle bg-primary bg-opacity-10 mb-4"
                                style={{
                                    width: "140px",
                                    height: "140px",
                                }}
                            >
                                <i className="bi bi-heart fs-1 text-primary"></i>
                            </div>

                            <h3 className="fw-bold mb-2">
                                Your wishlist is empty
                            </h3>

                            <p className="text-secondary mb-4">
                                Looks like you haven't saved anything yet.
                                <br />
                                Browse the products and add your favorites.
                            </p>

                            <NavLink
                                to="/products"
                                className="btn btn-primary rounded-pill px-4 py-2"
                            >
                                <i className="bi bi-bag me-2"></i>
                                Browse Products
                            </NavLink>

                        </div>

                    ) : (

                        /* ================= WISHLIST PRODUCTS ================= */
                        <div>

                            {wishlist.map((item) => (

                                <div
                                    key={item.id}
                                    className="border-bottom p-3"
                                >

                                    <div className="row align-items-center g-3">

                                        {/* ================= IMAGE ================= */}
                                        <div className="col-12 col-md-2 text-center">

                                            <NavLink
                                                to={`/products/${item.id}`}
                                            >
                                                <img
                                                    src={item.thumbnail}
                                                    alt={item.title}
                                                    className="img-fluid"
                                                    style={{
                                                        height: "100px",
                                                        width: "100px",
                                                        objectFit: "contain",
                                                    }}
                                                />
                                            </NavLink>

                                        </div>

                                        {/* ================= PRODUCT INFO ================= */}
                                        <div className="col-12 col-md-4">

                                            <small className="text-primary fw-semibold text-uppercase">
                                                {item.category}
                                            </small>

                                            <h5 className="fw-bold mt-1">

                                                <NavLink
                                                    to={`/products/${item.id}`}
                                                    className="text-decoration-none text-dark"
                                                >
                                                    {item.title}
                                                </NavLink>

                                            </h5>

                                            {/* Rating */}
                                            <div className="mb-2">

                                                {[1, 2, 3, 4, 5].map(
                                                    (star) => (

                                                        <i
                                                            key={star}
                                                            className={`bi ${
                                                                star <=
                                                                Math.round(
                                                                    item.rating
                                                                )
                                                                    ? "bi-star-fill text-warning"
                                                                    : "bi-star text-secondary"
                                                            }`}
                                                        ></i>

                                                    )
                                                )}

                                                <small className="text-muted ms-2">
                                                    ({item.rating})
                                                </small>

                                            </div>

                                            {/* Stock */}
                                            <small
                                                className={
                                                    item.stock > 10
                                                        ? "text-success"
                                                        : "text-danger"
                                                }
                                            >
                                                <i className="bi bi-box-seam me-1"></i>

                                                {item.stock > 10
                                                    ? `${item.stock} in stock`
                                                    : `Only ${item.stock} left`}
                                            </small>

                                        </div>

                                        {/* ================= PRICE ================= */}
                                        <div className="col-6 col-md-2">

                                            <span className="fw-bold fs-5">
                                                ${item.price}
                                            </span>

                                        </div>

                                        {/* ================= ADD TO CART ================= */}
                                        <div className="col-6 col-md-2">

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleAddToCart(item)
                                                }
                                                className="btn btn-primary btn-sm rounded-pill px-3"
                                            >
                                                <i className="bi bi-bag-plus me-1"></i>
                                                Add to Cart
                                            </button>

                                        </div>

                                        {/* ================= REMOVE ================= */}
                                        <div className="col-12 col-md-2 text-md-end">

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleRemove(item.id)
                                                }
                                                className="btn btn-outline-danger btn-sm rounded-pill px-3"
                                            >
                                                <i className="bi bi-trash me-1"></i>
                                                Remove
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    )}

                </div>

            </div>

        </div>
    );
}

export default Wishlist;