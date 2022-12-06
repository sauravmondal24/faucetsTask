import Login from '../Auth/Login/Login';
import SignUp from '../Auth/SignUp/SignUp';
import Faq from '../components/FAQ/Faq';
import Home from '../components/Home/Home';
import Main from '../Layout/Main';

const { createBrowserRouter } = require('react-router-dom');

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element: <Home></Home>
			},
			{
				path: '/login',
				element: <Login></Login>
			},
			{
				path: '/signup',
				element: <SignUp></SignUp>
			},
			{
				path: '/faq',
				element: <Faq></Faq>
			}
		]
	}
]);
