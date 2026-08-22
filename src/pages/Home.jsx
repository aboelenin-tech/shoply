// import React from 'react'
import hero from '../assets/hero.png'


function Home() {


    return (
        <>
            <div className='container-fluid d-flex align-items-center'style={{ height: "100vh" }}>
                <div className='row g-4'>

                    <div className=' col-sm-6 col-md-8 col-lg-8'>
                      <h1 className='display-2 fw-bold'>Everything you love, <span className='text-primary'>delivered fast.</span></h1>
                      <p className='col-sm-6 col-md-8 col-lg-8'>Discover thousands of curated products across beauty, tech, home and fashion — with honest pricing and free delivery on orders over $50.</p>
                        <div class="d-grid gap-2 d-md-block py-3">
                             <button class="btn btn-primary mx-2" type="button">Shop Now</button>
                              <button class="btn btn-outline-primary gap-2" type="button">Browse best seller</button>
                                </div>
                                <div className='d-flex justify-content-start flex-wrap my-3'>
                                <div className="col-12 col-md-4 mb-4">
                                          <h2 className="display-5 fw-bold">10k+</h2>
                                          <p className="text-muted">Products</p>
                                    </div>
                                <div className="col-12 col-md-4 mb-4">
                                      <h2 className="display-5 fw-bold">4.8/5</h2>
                                            <p className="text-muted">Avg. rating</p>
                                                    </div>

                                                        <div className="col-12 col-md-4 mb-4">
                                                              <h2 className="display-5 fw-bold">24h</h2>
                                                                     <p className="text-muted">Dispatch</p>
                                                                                              </div>
                                                                                              </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-4'>
                        <img src={hero} alt="hero" />
                    </div>
                </div>
            </div>

            <hr />
            <div className="container-fluid">
  <div className="row g-4">

    <div className="col-sm-6 col-lg-3">
      <div className="border rounded-3 p-3 d-flex align-items-center gap-3">
        <i className="bi bi-arrow-90deg-left fs-1 text-primary"></i>
        <div>
          <h6 className="mb-1">Easy Returns</h6>
          <p className="mb-0 text-muted">Easy and fast returns</p>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-lg-3">
      <div className="border rounded-3 p-3 d-flex align-items-center gap-3">
        <i className="bi bi-truck fs-1 text-primary"></i>
        <div>
          <h6 className="mb-1">Free Shipping</h6>
          <p className="mb-0 text-muted">Fast and free delivery</p>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-lg-3">
      <div className="border rounded-3 p-3 d-flex align-items-center gap-3">
        <i className="bi bi-file-earmark-lock2 fs-1 text-primary"></i>
        <div>
          <h6 className="mb-1">Secure Payment</h6>
          <p className="mb-0 text-muted">100% secure payment</p>
        </div>
      </div>
    </div>

    <div className="col-sm-6 col-lg-3">
      <div className="border rounded-3 p-3 d-flex align-items-center gap-3">
        <i className="bi bi-file-earmark-plus-fill fs-1 text-primary"></i>
        <div>
          <h6 className="mb-1">Quality Products</h6>
          <p className="mb-0 text-muted">High quality products</p>
        </div>
      </div>
    </div>

  </div>
</div>
<hr />
<div className="container-fluid">
  <div className="row g-3">
    <h1>Shop by category</h1>

    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <a
        href="#"
        className="btn btn-outline-primary w-100 py-4"
      >
        <strong>Beauty</strong>
        <br />
        Explore
      </a>
    </div>

    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <a
        href="#"
        className="btn btn-outline-primary w-100 py-4"
      >
        <strong>Fragrances</strong>
        <br />
        Explore
      </a>
    </div>

    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <a
        href="#"
        className="btn btn-outline-primary w-100 py-4"
      >
        <strong>Furniture</strong>
        <br />
        Explore
      </a>
    </div>

    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <a
        href="#"
        className="btn btn-outline-primary w-100 py-4"
      >
        <strong>Groceries</strong>
        <br />
        Explore
      </a>
    </div>
    
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <a
        href="#"
        className="btn btn-outline-primary w-100 py-4"
      >
        <strong>Groceries</strong>
        <br />
        Explore
      </a>
    </div>
    
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <a
        href="#"
        className="btn btn-outline-primary w-100 py-4"
      >
        <strong>Groceries</strong>
        <br />
        Explore
      </a>
    </div>
    
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <a
        href="#"
        className="btn btn-outline-primary w-100 py-4"
      >
        <strong>Groceries</strong>
        <br />
        Explore
      </a>
    </div>
    
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <a
        href="#"
        className="btn btn-outline-primary w-100 py-4"
      >
        <strong>Groceries</strong>
        <br />
        Explore
      </a>
    </div>
    
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <a
        href="#"
        className="btn btn-outline-primary w-100 py-4"
      >
        <strong>Groceries</strong>
        <br />
        Explore
      </a>
    </div>


  </div>
</div>
<hr />


            



        </>
    )
}

export default Home