import useCartStore from "../store/cartStore";
import { NavLink } from "react-router-dom";

function Card() {
    const cart = useCartStore((state) => state.cart);

    return (
        <>
            <div className="p-4">

                {/* Page Header */}
                <div className="border-bottom p-3 mb-5">
                    <h1 className="fw-bold">Shopping Cart</h1>

                    <p className="px-1 text-secondary">
                        {cart.length} items in your cart
                    </p>
                </div>


                <div className="container">
                    <div className="border shadow-sm p-4 mb-5 bg-body-tertiary rounded-4">

                        {/* Empty Cart */}
                        {cart.length === 0 ? (

                            <div className="d-flex flex-column align-items-center text-center py-5">

                                {/* Basket Image */}
                                <div
                                    className="d-flex justify-content-center align-items-center rounded-circle bg-primary bg-opacity-10 mb-4"
                                    style={{
                                        width: "140px",
                                        height: "140px",
                                    }}
                                >
                                    <img
                                        src="/images/empty-cart.png"
                                        alt="Empty shopping cart"
                                        style={{
                                            width: "90px",
                                            height: "90px",
                                            objectFit: "contain",
                                        }}
                                    />
                                </div>


                                {/* Title */}
                                <h3 className="fw-bold mb-2">
                                    Your cart is empty
                                </h3>


                                {/* Description */}
                                <p className="text-secondary mb-4">
                                    Looks like you haven't added anything yet.
                                    <br />
                                    Browse the catalogue and find something you love.
                                </p>


                                {/* Browse Button */}
                                <NavLink
                                    to="/products"
                                    className="btn btn-primary rounded-pill px-4 py-2"
                                >
                                    <i className="bi bi-bag me-2"></i>
                                    Browse Products
                                </NavLink>

                            </div>

                        ) : (

                            /* Cart Products */
                            <div>

                                {cart.map((item) => (

                                    <div
                                        key={item.id}
                                        className="border-bottom p-3"
                                    >

                                        <div className="row align-items-center">

                                            {/* Product Image */}
                                            <div className="col-md-2 text-center">

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

                                            </div>


                                            {/* Product Info */}
                                            <div className="col-md-6">

                                                <small className="text-primary fw-semibold text-uppercase">
                                                    {item.category}
                                                </small>

                                                <h5 className="fw-bold mt-1">
                                                    {item.title}
                                                </h5>

                                                <p className="text-secondary mb-1">
                                                    Quantity: {item.quantity}
                                                </p>

                                            </div>


                                            {/* Price */}
                                            <div className="col-md-2">

                                                <span className="fw-bold fs-5">
                                                    ${item.price}
                                                </span>

                                            </div>


                                            {/* Quantity */}
                                            <div className="col-md-2">

                                                <div className="d-flex align-items-center justify-content-center gap-2">

                                                    <button className="btn btn-outline-primary btn-sm">
                                                        -
                                                    </button>

                                                    <span className="fw-bold">
                                                        {item.quantity}
                                                    </span>

                                                    <button className="btn btn-outline-primary btn-sm">
                                                        +
                                                    </button>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        )}

                    </div>
                </div>

            </div>
        </>
    );
}

export default Card;