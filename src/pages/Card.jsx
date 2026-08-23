import { useState } from "react";
import { NavLink } from "react-router-dom";
function Card() {


    const [carts, setCarts] = useState([])
    return (<>
        <div className="p-4">
            <div className="border-bottom p-3 mb-5">
                <h1 className="fw-bold ">Shopping cart</h1>
                <p className=" px-1 text-secondary">{carts.length} items in your cart</p>
            </div>
            <div className="p-4">
                <div className="border shadow p-3 mb-5 bg-body-tertiary rounded  ">
                    {carts.length === 0 ? (<>
                        <div className="d-flex flex-column align-items-center p-5">
                            <div><i class="bi bi-bucket fs-1 text-primary   "></i></div>
                            <p className="text-black fs-4">Your cart is empty</p>
                            <p className="text-center text-secondary">Looks like you haven't added anything yet. Browse the <br /> catalogue and find something you love.</p>
                            <button className="btn bg-primary rounded-pill text-white"> <NavLink to="/products"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >Browse products</NavLink></button>
                        </div>
                    </>) : (
                        <p>You have items in your cart</p>
                    )}
                </div >
            </div>
        </div>
    </>
    );

}
export default Card