import { useContext } from 'react';
import { FaUserCircle, FaWallet } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ValueProvider } from '../../App';
import img1 from '../../assets/img/MetaMask.551edf10.svg';
import img2 from '../../assets/img/WalletConnect.d0b10794.svg';

const Navbar = () => {
	const { setData } = useContext(ValueProvider);
	const values = [
		'Ethereum Kovan',
		'Arbitrum Rinkeby',
		'Avalanche Fuji',
		'BNB Chain Testnet',
		'Ethereum Rinkeby',
		'Fantom Testnet',
		'Harmony Testnet',
		'POA Network Sokol',
		'Polygon Mumbai'
	];

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light py-3 bg-white">
				<div className="container">
					<Link className="navbar-brand text-purple-200" to="/">
						<h3 className="fw-bold" style={{ color: '#9B1FE9' }}>
							Faucets
						</h3>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarTogglerDemo02"
						aria-controls="navbarTogglerDemo02"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
						<div className="d-flex">
							<div className="mx-3">
								<form>
									<select
										className="form-select"
										aria-label="Default select example"
										onChange={(e) => setData(e.target.value)}
									>
										{values.map((value, i) => (
											<option key={i}>{value}</option>
										))}
									</select>
								</form>
							</div>

							<div className="mx-2">
								<button
									style={{ color: '#9B1FE9' }}
									type="button"
									className="btn btn-outline-primary"
									data-bs-toggle="modal"
									data-bs-target="#exampleModal"
								>
									<span className="px-2">
										<FaWallet></FaWallet>
									</span>
									Connect wallet
								</button>

								<div
									className="modal fade"
									id="exampleModal"
									tabIndex="-1"
									aria-labelledby="exampleModalLabel"
									aria-hidden="true"
								>
									<div className="modal-dialog">
										<div className="modal-content">
											<div className="modal-header">
												<h2 className="modal-title" id="exampleModalLabel">
													Connect your wallet
												</h2>
												<button
													type="button"
													className="btn-close"
													data-bs-dismiss="modal"
													aria-label="Close"
												></button>
											</div>
											<div className="modal-body">
												<div className="d-flex text-center justify-content-center align-items-center mx-2">
													<div className=" p-5 me-2  bg-light">
														<img className="img-fluid" src={img1} alt="" />
														<h4>MetaMask</h4>
													</div>
													<div className=" p-5 me-2 bg-light">
														<img className="img-fluid" src={img2} alt="" />
														<h4>WalletConnect</h4>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="dropdown mx-2">
								<Link
									style={{ color: '#9B1FE9' }}
									className=" border-0 dropdown-toggle fs-4"
									href="#"
									role="button"
									id="dropdownMenuLink"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<FaUserCircle></FaUserCircle>
								</Link>

								<ul
									className="dropdown-menu"
									aria-labelledby="dropdownMenuLink"
								>
									<li>
										<Link to="/login" className="dropdown-item">
											Login
										</Link>
									</li>
									<li>
										<Link to="/signup" className="dropdown-item">
											SignUp
										</Link>
									</li>
									<li>
										<Link to="/faq" className="dropdown-item" href="#">
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
