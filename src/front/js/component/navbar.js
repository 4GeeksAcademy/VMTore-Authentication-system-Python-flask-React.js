import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	const logged = sessionStorage.getItem("token");
	const navigate = useNavigate();
	
	if(logged){
		return (
			<nav className="navbar navbar-dark bg-transparent">
				<div className="container">
					<Link to="/" className="navbar-brand mb-0 h1 text-decoration-none">
						Authentication system
					</Link>
					<div className="ms-auto">
							<button className="btn btn-danger" 
							onClick={()=> {
								sessionStorage.removeItem("token")
								navigate("/login");
							}}>Logout</button>
					</div>
				</div>
			</nav>);
		}else{
			return (
				<nav className="navbar navbar-dark bg-transparent">
					<div className="container">
						<Link to="/" className="navbar-brand mb-0 h1 text-decoration-none">
							Authentication system
						</Link>
						<div className="ms-auto">
								<button className="btn btn-warning me-2" onClick={()=>navigate("/register")} >Register</button>
								<button className="btn btn-success" onClick={()=>navigate("/login")}>Login</button>
						</div>
					</div>
				</nav>
			);
		}
};
