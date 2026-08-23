import { NavLink } from "react-router-dom"
function Register() {
    return (
        <>
            <div className=" login-page pb-5">
                <nav className="p-3 mb-5 border-bottom border-light border-opacity-10 d-flex justify-content-between fixed">
                    <div className=" logo ">
                        <i className="bi bi-bag-heart-fill"></i>
                        Shoply
                    </div>
                    <div className="d-flex flex-row gap-4 px-5 ">
                        <NavLink to="/Home" className="nav-link text-white-50" >
                            Home
                        </NavLink>
                        <NavLink to="/login" className="nav-link text-white-50 " >
                            Login
                        </NavLink>
                    </div>
                </nav>
                <div className=" row position-relative w-100  d-flex justify-content-center align-items-center" >
                    <form className=" login-card col-9 col-lg-6 d-flex align-items-center flex-column gap-2">

                        <h1 className="text-white">Create account</h1>
                        <div className=" w-75 d-flex flex-row justify-content-evenly my-3 gap-3">
                            <button className=" btn border border-light px-5  border-opacity-10 rounded text-white-50 w-50"><i className="bi bi-google me-2 "></i> Google</button>
                            <button className="btn border border-light px-5 border-opacity-10 rounded text-white-50 w-50 "><i className="bi bi-apple me-2"></i> Apple</button>
                        </div >
                        <div className="w-100 d-flex flex-row justify-content-evenly my-3">
                            <div className="d-flex flex-column ">
                                <label htmlFor="Fname" className="text-white">First name</label>
                                <input type="text" id="Fname" className=" login-input form-control  border border-light bg-transparent border-opacity-10 w-100 " name="Fname"  placeholder="....." />
                            </div>
                            <div className="d-flex flex-column ">
                                <label htmlFor="Lname" className="text-white">Last name</label>
                                <input type="text" id="Lname" className=" login-input form-control  border border-light bg-transparent border-opacity-10 w-100 " name="Lname" placeholder="....." />
                            </div>
                        </div>


                        <div className="  w-100 d-flex align-items-center flex-column gap-2 ">
                            <label htmlFor="email" name="Email" className="text-white w-75">Email</label>
                            <input type="email" id="email" className=" login-input form-control w-75 border border-light bg-transparent border-opacity-10 " placeholder="Enter your email" />
                            <label htmlFor="pass" className="text-white w-75 mt-3">Password</label>
                            <input type="password" id="pass" name="pass" className=" login-input form-control w-75 bg-transparent border border-light border-opacity-10" placeholder="Enter your password " />
                            <label htmlFor="Cpass" className="text-white w-75 mt-3">Confirm Password</label>
                            <input type="password" id="Cpass" name="Cpass" className=" login-input form-control w-75 bg-transparent border border-light border-opacity-10" placeholder="Repeat your password " />
                        </div>
                        <div className="w-75 mt-3">
                            <input type="checkbox" id="agree" className="form-check-input" />
                            <label htmlFor="agree" className="text-white-50 mx-2">i agree to Shoply's <span className="text-primary">Terms of Service</span> and <span className="text-primary">Privacy Policy</span></label>
                        </div>
                        <button type="submit" className="btn border border-light px-5  border-opacity-10 rounded text-white-50 w-75">submit</button>

                    </form>

                </div>
            </div>
        </>
    )
}
export default Register