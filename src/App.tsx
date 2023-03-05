import './App.css';
import useRouteElements from './pages/useRouteElements';

function App() {
	const routeElement = useRouteElements();
	return <div>{routeElement}</div>;
}

export default App;
