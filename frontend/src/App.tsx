import { AppShell, Navbar, Header } from '@mantine/core'
import Heading from './components/Heading'
import MemberTable from './components/MemberTable'

function App() {
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
			<MemberTable />
		</AppShell>
	)
}

export default App
