import { AppShell, Navbar, Header } from '@mantine/core'
import Heading from './components/Heading'
import MemberTable from './components/MemberTable'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
	const [post, setPost] = useState(null);

	useEffect(() => {
		axios.get('http://localhost:8000/api/students/').then((response) => {
		setPost(response.data);
		});
	}, []);

	if (!post) return null;

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
			<MemberTable member_list={post}/>
		</AppShell>
	)
}

export default App
