import { Button, Flex, Text, Title } from '@mantine/core'
import { useLocation } from 'react-router-dom'

const Heading = () => {
	const location = useLocation()

	return (
		<Flex gap='md' align='flex-end'>
			<Title>Celesta</Title>
			<Text mb={5} style={{ flex: 1 }}>
				by uw concert band club
			</Text>
			{location.pathname === '/' && (
				<Button variant='filled' color='teal'>
					Log In
				</Button>
			)}
		</Flex>
	)
}

export default Heading
