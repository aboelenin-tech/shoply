// import React from 'react'
import hero from '../assets/hero.png'


function Home() {


    return (
        <>
            <div className='container-fluid'>
                <div className='row g-4'>

                    <div className=' col-sm-6 col-md-6 col-lg-6'>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam necessitatibus error rerum, reiciendis explicabo eos molestias unde repellat ut earum vero magni ea consectetur neque a accusamus adipisci quas illo.</h2>
                        <button>click</button>
                        <button>Click</button>
                    </div>
                    <div className='col-sm-6 col-md-6 col-lg-6'>
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
<div className='container-fluid'>
    <div className='row g-4'>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button>
            
            </button>
            <button>

            </button>

    </div>
</div>


            



        </>
    )
}

export default Home