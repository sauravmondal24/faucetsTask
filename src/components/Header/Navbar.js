import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img1 from '../../assets/img/MetaMask.551edf10.svg';
import img2 from '../../assets/img/WalletConnect.d0b10794.svg';

const Navbar = () => {
	return (
		<div>
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<div class="container">
					<Link class="navbar-brand text-purple-200" to="/">
						<h3 className="fw-bold" style={{ color: '#9B1FE9' }}>
							Faucets
						</h3>
					</Link>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarTogglerDemo02"
						aria-controls="navbarTogglerDemo02"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
						<div class="d-flex">
							<div className="mx-3">
								<select class="form-select" aria-label="Default select example">
									<option selected>Ethereum Kovan</option>
									<option value="1">Arbitrum Rinkeby</option>
									<option value="2">Avalanche Fuji</option>
									<option value="3">BNB Chain Testnet</option>
									<option value="4">Ethereum Rinkeby</option>
									<option value="5">Fantom Testnet</option>
									<option value="6">Harmony Testnet</option>
									<option value="7">POA Network Sokol</option>
									<option value="8">Polygon Mumbai</option>
								</select>
							</div>

							<div className="mx-2">
								<button
									type="button"
									class="btn btn-outline-primary"
									data-bs-toggle="modal"
									data-bs-target="#exampleModal"
								>
									Connect wallet
								</button>

								<div
									class="modal fade"
									id="exampleModal"
									tabindex="-1"
									aria-labelledby="exampleModalLabel"
									aria-hidden="true"
								>
									<div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-header">
												<h2 class="modal-title" id="exampleModalLabel">
													Connect your wallet
												</h2>
												<button
													type="button"
													class="btn-close"
													data-bs-dismiss="modal"
													aria-label="Close"
												></button>
											</div>
											<div class="modal-body">
												<div className="row g-4">
													<div className="col-md-6 p-5 bg-light">
														<img className="img-fluid" src={img1} alt="" />
														<h4>MetaMask</h4>
													</div>
													<div className="col-md-6 p-5 bg-light">
														<img className="img-fluid" src={img2} alt="" />
														<h4>WalletConnect</h4>
													</div>
												</div>
											</div>
											{/* <div class="modal-footer">
												<button
													type="button"
													class="btn btn-secondary"
													data-bs-dismiss="modal"
												>
													Close
												</button>
												<button type="button" class="btn btn-primary">
													Save changes
												</button>
											</div> */}
										</div>
									</div>
								</div>
							</div>

							<div class="dropdown mx-2">
								<Link
									class="btn btn-secondary dropdown-toggle"
									href="#"
									role="button"
									id="dropdownMenuLink"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<FaUserCircle></FaUserCircle>
								</Link>

								<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
									<li>
										<Link to="/login" class="dropdown-item">
											Login
										</Link>
									</li>
									<li>
										<Link to="/signup" class="dropdown-item">
											SignUp
										</Link>
									</li>
									<li>
										<Link to="/faq" class="dropdown-item" href="#">
											FAQ
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
