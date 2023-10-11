import { Suspense, lazy } from 'react'
import LoadingScreen from './components/LoadingScreen'
import type { RouteObject } from 'react-router'
import MemberTable from 'components/MemberTable'
import NotFound from 'views/NotFound'
import InternalLayout from 'components/Layout/Internal'
import ExternalLayout from 'components/Layout/External'
import Landing from 'views/Landing'

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
	(
		<Suspense fallback={<LoadingScreen />}>
			<Component {...props} />
		</Suspense>
	)

const SignIn = Loadable(lazy(() => import('./views/SignIn')))

const routes: RouteObject[] = [
	{
		path: '/',
		element: <ExternalLayout />,
		children: [
			{ index: true, element: <Landing /> },
			{
				path: 'signin',
				element: <SignIn />
			}
		]
	},
	{
		path: '/',
		element: <InternalLayout />,
		children: [
			{
				path: 'home',
				element: <MemberTable />
			}
		]
	},
	{
		path: '*',
		element: <NotFound />
	}
]

export default routes
