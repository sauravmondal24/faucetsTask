import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import RequestHistory from '../RequestHistory/RequestHistory';

const PaymentSection = () => {
	return (
		<div className="p-3">
			<div style={{ backgroundColor: '#EEF2FE' }}>
				<p className="p-2">
					<span className="px-2">
						<FaExclamationTriangle></FaExclamationTriangle>
					</span>
					Your wallet is connected to Ethereum Kovan, so you are requesting
					Ethereum Kovan Link/ETH.
				</p>
			</div>
			{/* <h2 style={{ color: 'purple' }} className="">
				payment section
			</h2> */}
			<div className="w-50">
				<form class=" p-4">
					<div class="mb-3">
						<label for="exampleDropdownFormEmail2" class="form-label">
							Wallet Address
						</label>
						<input
							type="email"
							class="form-control"
							id="exampleDropdownFormEmail2"
							placeholder="Wallet Address....."
						/>
					</div>
					<div className="d-flex ">
						<div class="mb-3 w-50 me-3">
							<label for="exampleDropdownFormPassword2" class="form-label">
								Request Type
							</label>
							<input
								type="text"
								class="form-control"
								id="exampleDropdownFormPassword2"
								placeholder="20 Test Link"
								disabled
							/>
						</div>
						<div class="mt-4 pt-2 w-50">
							{/* <label for="exampleDropdownFormPassword2" class="form-label">
								Password
							</label> */}
							<input
								type="text"
								class="form-control"
								id="exampleDropdownFormPassword2"
								placeholder="0.5 ETH"
								disabled
							/>
						</div>
					</div>
					<div class="mb-3">
						<div class="form-check">
							<input
								type="checkbox"
								class="form-check-input"
								id="dropdownCheck2"
							/>
							<label class="form-check-label" for="dropdownCheck2">
								Remember me
							</label>
						</div>
					</div>
					<button type="submit" class="btn btn-primary">
						Send Request
					</button>
				</form>
				<RequestHistory></RequestHistory>
			</div>
		</div>
	);
};

export default PaymentSection;
