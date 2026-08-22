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


        </>
    )
}

export default Home