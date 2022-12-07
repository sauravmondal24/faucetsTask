import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routers/Routers';
import { createContext, useState } from 'react';

export const ValueProvider = createContext();

function App() {
	const [data, setData] = useState();

	const allValue = {
		data,
		setData
	};
	return (
		<ValueProvider.Provider value={allValue}>
			<RouterProvider router={router}></RouterProvider>
		</ValueProvider.Provider>
	);
}

export default App;
