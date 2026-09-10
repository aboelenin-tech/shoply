import  { useState } from "react";
import OrderSummary from "../components/OrderSummary";
import useCartStore from "../store/cartStore";

function Checkout() {
    const { cart } = useCartStore();
    const [paymentMethod, setPaymentMethod] = useState("cash");

    return (
        <div className="bg-light min-vh-100 py-5">
            <div className="container">

                {/* Header */}
                <div className="text-center mb-5">
                    <div
                        className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                        style={{
                            width: "65px",
                            height: "65px",
                            backgroundColor: "#0d6efd",
                        }}
                    >
                        <i className="bi bi-bag-check-fill text-white fs-3"></i>
                    </div>

                    <h1 className="fw-bold text-primary mb-2">
                        Checkout
                    </h1>

                    <p className="text-muted mb-0">
                        Complete your order securely
                    </p>
                </div>

                <div className="row justify-content-center g-4">

                    {/* Checkout Form */}
                    <div className="col-12 col-lg-7">
                        <div className=" border-0 shadow-sm rounded-4">
                            <div className="card-body p-4 p-md-5">

                                {/* Contact */}
                                <h4 className="fw-bold mb-4">
                                    <i className="bi bi-person-circle text-primary me-2"></i>
                                    Contact Information
                                </h4>

                                <div className="mb-4">
                                    <label className="form-label fw-semibold">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <hr className="my-4" />

                                {/* Shipping */}
                                <h4 className="fw-bold mb-4">
                                    <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                                    Shipping Address
                                </h4>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Address
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your address"
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-semibold">
                                            City
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="City"
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-semibold">
                                            ZIP Code
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="ZIP Code"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-semibold">
                                        Phone Number
                                    </label>

                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Enter your phone number"
                                    />
                                </div>

                                <hr className="my-4" />

                                {/* Payment */}
                                <h4 className="fw-bold mb-4">
                                    <i className="bi bi-credit-card-fill text-primary me-2"></i>
                                    Payment Method
                                </h4>

                                <div
                                    className={`p-3 rounded-3 mb-3 ${paymentMethod === "cash"
                                            ? "border border-primary bg-primary bg-opacity-10"
                                            : "border"
                                        }`}
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setPaymentMethod("cash")}
                                >
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="payment"
                                            value="cash"
                                            checked={paymentMethod === "cash"}
                                            onChange={(e) =>
                                                setPaymentMethod(e.target.value)
                                            }
                                        />

                                        <label className="form-check-label fw-semibold">
                                            Cash on Delivery
                                        </label>
                                    </div>
                                </div>

                                <div
                                    className={`p-3 rounded-3 ${paymentMethod === "card"
                                            ? "border border-primary bg-primary bg-opacity-10"
                                            : "border"
                                        }`}
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setPaymentMethod("card")}
                                >
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="payment"
                                            value="card"
                                            checked={paymentMethod === "card"}
                                            onChange={(e) =>
                                                setPaymentMethod(e.target.value)
                                            }
                                        />

                                        <label className="form-check-label fw-semibold">
                                            Credit / Debit Card
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="col-12 col-lg-5">
                        <div className="position-sticky" style={{ top: "90px" }}>
                            <OrderSummary cart={cart} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Checkout;