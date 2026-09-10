import useCartStore from "../store/cartStore";
import { NavLink } from "react-router-dom";

function Cart() {
    const cart = useCartStore((state) => state.cart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const increaseQuantity = useCartStore((state) => state.increaseQuantity);
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity)
    const calcSubtotal = useCartStore((state) => state.calcSubtotal);
    const calcShipping = useCartStore((state) => state.calcShipping);
    const calcTotal = useCartStore((state) => state.calcTotal)
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

                                {/* Basket Icon */}
                                <div
                                    className="d-flex justify-content-center align-items-center rounded-circle bg-primary bg-opacity-10 mb-4"
                                    style={{
                                        width: "140px",
                                        height: "140px",
                                    }}
                                >
                                    <i className="bi bi-basket3 fs-1 text-primary"></i>
                                </div>

                                <h3 className="fw-bold mb-2">
                                    Your cart is empty
                                </h3>

                                <p className="text-secondary mb-4">
                                    Looks like you haven't added anything yet.
                                    <br />
                                    Browse the catalogue and find something you love.
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

                            /* Cart Products */
                            <div>

                                {cart.map((item) => (

                                    <div
                                        key={item.id}
                                        className="border-bottom p-3"
                                    >

                                        <div className="row align-items-center g-3">

                                            {/* Product Image */}
                                            <div className="col-12 col-md-2 text-center">
                                                <NavLink
                                                    to={`/products/${item.id}`}
                                                >  <img
                                                        src={item.thumbnail}
                                                        alt={item.title}
                                                        className="img-fluid"
                                                        style={{
                                                            height: "100px",
                                                            width: "100px",
                                                            objectFit: "contain",
                                                        }}
                                                    /></NavLink>


                                            </div>


                                            {/* Product Info */}
                                            <div className="col-12 col-md-4">

                                                <small className="text-primary fw-semibold text-uppercase">
                                                    {item.category}
                                                </small>

                                                <h5 className="fw-bold mt-1">
                                                    {item.title}
                                                </h5>

                                                <p className="text-secondary mb-0">
                                                    Quantity: {item.quantity}
                                                </p>

                                            </div>


                                            {/* Price */}
                                            <div className="col-6 col-md-2">

                                                <span className="fw-bold fs-5">
                                                    ${item.price}
                                                </span>

                                            </div>


                                            {/* Quantity */}
                                            <div className="col-6 col-md-2">

                                                <div className="d-flex align-items-center justify-content-center gap-2">

                                                    <button
                                                        className="btn btn-outline-primary btn-sm"
                                                        onClick={() => decreaseQuantity(item.id)}
                                                    >
                                                        -
                                                    </button>

                                                    <span className="fw-bold">
                                                        {item.quantity}
                                                    </span>

                                                    <button
                                                        className="btn btn-outline-primary btn-sm"
                                                        onClick={() => increaseQuantity(item.id)}
                                                    >
                                                        +
                                                    </button>

                                                </div>

                                            </div>


                                            {/* Remove */}
                                            <div className="col-12 col-md-2 text-center">

                                                <button
                                                    onClick={() =>
                                                        removeFromCart(item.id)
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

                                <div className="car  border-0 shadow-sm rounded-4 p-4 mt-4">
                                    <h4 className="fw-bold mb-4">Order Summary</h4>

                                    <div className="d-flex justify-content-between mb-3">
                                        <span className="text-muted">Subtotal</span>
                                        <span className="fw-semibold">{calcSubtotal().toFixed(2)}</span>
                                    </div>

                                    <div className="d-flex justify-content-between mb-3">
                                        <span className="text-muted">Shipping</span>
                                        <span className="fw-semibold">{calcShipping().toFixed(2)}</span>
                                    </div>

                                    <hr />

                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <span className="fs-5 fw-bold">Total</span>
                                        <span className="fs-4 fw-bold text-primary">{calcTotal().toFixed(2)}</span>
                                    </div>


                                    <NavLink
                                        to="/checkout"
                                        className="btn btn-primary w-100 py-2 rounded-3"
                                    >
                                        <i className="bi bi-credit-card me-2"></i>
                                        Checkout
                                    </NavLink>

                                </div>
                            </div>



                        )}

                    </div>
                </div>

            </div>
        </>
    );
}

export default Cart;