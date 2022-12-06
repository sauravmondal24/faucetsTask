import React from 'react';

const RequestHistory = () => {
	return (
		<div>
			<h4>Request History</h4>
			<div>
				<div
					class="btn-group"
					role="group"
					aria-label="Basic radio toggle button group"
				>
					<input
						type="radio"
						class="btn-check"
						name="btnradio"
						id="btnradio1"
						autocomplete="off"
						checked
					/>
					<label class="btn btn-outline-primary" for="btnradio1">
						ETH Transaction History
					</label>

					<input
						type="radio"
						class="btn-check"
						name="btnradio"
						id="btnradio3"
						autocomplete="off"
					/>
					<label class="btn btn-outline-primary" for="btnradio3">
						TestLink Transaction History
					</label>
				</div>
			</div>

			<div className="py-4">
				<table class="table table-bordered">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">First</th>
							<th scope="col">Last</th>
							<th scope="col">Handle</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default RequestHistory;
