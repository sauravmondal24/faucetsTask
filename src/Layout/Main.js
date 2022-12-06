import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';

const Main = () => {
	return (
		<div>
			<Header></Header>
			<Outlet>
				<Home></Home>
			</Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Main;
