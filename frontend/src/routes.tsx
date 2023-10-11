import { Suspense, lazy } from 'react'
import LoadingScreen from './components/LoadingScreen'
import type { RouteObject } from 'react-router'
import Layout from 'components/Layout'
import MemberTable from 'components/MemberTable'
import NotFound from 'components/NotFound'

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
		children: [
			{
				path: 'signin',
				element: <SignIn />
			}
		]
	},
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
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
