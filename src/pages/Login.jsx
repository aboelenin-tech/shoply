import { NavLink } from "react-router-dom"
function Login() {
    return (
        <>
            <div className=" bg-dark">
                <nav className="p-3  border-bottom border-light border-opacity-10 d-flex justify-content-between">
                    <div className=" logo ">
                        <i className="bi bi-bag-heart-fill"></i>
                        Shoply
                    </div>
                    <div className="d-flex flex-row gap-4 px-5 ">
                        <NavLink to="/Home" className="nav-link text-white-50" >
                            Home
                        </NavLink>
                        <NavLink to="/Register" className="nav-link text-white-50 " >
                            Register
                        </NavLink>
                    </div>
                </nav>
                <div className=" row position-relative w-100 vh-100 d-flex justify-content-center align-items-center" >
                    <form className=" login-card col-9 col-lg-6 d-flex align-items-center flex-column gap-2">
            
                            <h1 className="text-white">Login</h1>
                            <div className=" w-100 d-flex flex-row justify-content-evenly my-3">
                                <span className="border border-light px-5  border-opacity-10 rounded text-white-50 "><i className="bi bi-google me-2 "></i> Google</span>
                                <span className="border border-light px-5 border-opacity-10 rounded text-white-50"><i className="bi bi-apple me-2"></i> Apple</span>
                            </div >

                            <div className="  w-100 d-flex align-items-center flex-column gap-2 ">
                                <label htmlFor="email" className="text-white w-75">Email</label>
                                <input type="email" id="email" className=" login-input form-control w-75 border border-light bg-transparent border-opacity-10 " placeholder="Enter your email" />
                                <label htmlFor="pass" className="text-white w-75">Password</label>
                                <input type="password" id="pass" className=" login-input form-control w-75 bg-transparent border border-light border-opacity-10" placeholder="Enter your password " />
                            </div>
                            <div className="w-75">
                                <input type="checkbox" id="remMe" className="form-check-input" />
                                <label htmlFor="remMe" className="text-white mx-2">Remember me</label>
                            </div>
                            <button type="submit" className="btn border border-light px-5  border-opacity-10 rounded text-white-50 w-75">submit</button>
                        
                    </form>

                </div>
            </div>
        </>
    )
}
export default Login