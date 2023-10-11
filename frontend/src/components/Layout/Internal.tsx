import { AppShell, Navbar, Header } from '@mantine/core'
import Heading from '../Heading'
import { Outlet } from 'react-router-dom'

const InternalLayout = () => {
	return (
		<AppShell
			padding='md'
			navbar={
				<Navbar width={{ base: 300 }} p='xs'>
					<p>a happy little navbar will go here when it is created ^_^</p>
				</Navbar>
			}
			header={
				<Header height={80} p='lg'>
					<Heading />
				</Header>
			}
		>
			<Outlet />
		</AppShell>
	)
}

export default InternalLayout
