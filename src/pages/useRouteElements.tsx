import { useRoutes } from 'react-router-dom';
import RegisterLayout from 'src/layouts/RegisterLayout';
import Login from './Login';
import ProductList from './ProductList';
import Register from './Register';

const useRouteElements = () => {
	const routeElements = useRoutes([
		{
			path: '/',
			element: <ProductList />
		},
		{
			path: '/login',
			element: (
				<RegisterLayout>
					<Login />
				</RegisterLayout>
			)
		},
		{
			path: '/register',
			element: (
				<RegisterLayout>
					<Register />
				</RegisterLayout>
			)
		}
	]);
	return routeElements;
};

export default useRouteElements;
