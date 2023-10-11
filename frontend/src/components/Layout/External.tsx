import { AppShell, Header } from '@mantine/core'
import Heading from '../Heading'
import { Outlet } from 'react-router-dom'

const ExternalLayout = () => {
	return (
		<AppShell
			padding='md'
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

export default ExternalLayout