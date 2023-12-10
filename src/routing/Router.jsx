import { createBrowserRouter} from 'react-router-dom'
import Root from '../pages/Root'
import CreateEmployee from '../pages/CreateEmployee'
import CurrentEmployees from '../pages/CurrentEmployees'
import Error from '../pages/Error'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <CreateEmployee />,
			},
			{
				path: 'list',
				element: <CurrentEmployees />,
			},
		],
	},
])

export default router
