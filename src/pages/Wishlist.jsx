// import React from 'react'
import { NavLink } from "react-router-dom"
import { useState } from "react"

function Wishlist() {
  const[wishProduct,setWishProduct]=useState([])
  return(
    <>
    
        <div className="p-4">
            <div className="border-bottom p-3 mb-5">
                <h1 className="fw-bold ">My wishlist</h1>
                <p className=" px-1 text-secondary">{wishProduct.length} saved items</p>
            </div>
            <div className="p-4">
                <div className="border shadow p-3 mb-5 bg-body-tertiary rounded  ">
                    {wishProduct.length === 0 ? (<>
                        <div className="d-flex flex-column align-items-center p-5">
                            <div><i class="bi bi-bag-heart fs-1 text-primary "></i></div>
                            <p className="text-black fs-4">Your wish list is empty</p>
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
  )
}

export default Wishlist