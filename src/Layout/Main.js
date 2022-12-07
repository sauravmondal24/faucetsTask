import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';

const Main = () => {
	const [data, setData] = useState();

	return (
		<div>
			<Header setData={setData}></Header>
			<Outlet>
				<Home data={data}></Home>
			</Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Main;
