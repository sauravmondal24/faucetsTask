import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaInstagram } from 'react-icons/fa';
import '../Login/Login.css';

const SignUp = () => {
	return (
		<div style={{ backgroundColor: '#EEF2FE' }} className=" py-5">
			<div className="m-auto mt-5 card p-5 login">
				<h2 className="text-center">Sign Up</h2>
				<form className=" ">
					<div className="mb-3">
						<label
							htmlFor="exampleDropdownFormEmail2"
							className="form-label fw-bold"
						>
							Email
						</label>
						<input
							type="email"
							className="form-control"
							id="exampleDropdownFormEmail2"
							placeholder="Enter Your Email"
						/>
					</div>
					<div className="mb-3">
						<label
							htmlFor="exampleDropdownFormPassword2"
							className="form-label fw-bold"
						>
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="exampleDropdownFormPassword2"
							placeholder="Enter your Password"
						/>
					</div>

					<button type="submit" className="btn btn-primary w-100 mt-3 fw-bold">
						Sign Up
					</button>
				</form>
				<div className="py-2 text-center">
					<p>
						Already have an account? <Link to="/login">Log in</Link>
					</p>
					<h5>Or</h5>
				</div>
				<div className="d-flex justify-content-around align-items-center w-25 m-auto">
					<FaGoogle></FaGoogle>
					<FaFacebook></FaFacebook>
					<FaInstagram></FaInstagram>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
