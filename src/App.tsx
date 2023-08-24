import './App.css';
import useRouteElements from './pages/useRouteElements';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const routeElement = useRouteElements();
	return (
		<div>
			{routeElement}
			<ToastContainer />
		</div>
	);
}

export default App;
