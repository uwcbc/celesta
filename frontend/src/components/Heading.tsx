import { Button, Flex, Text, Title } from '@mantine/core'
import { useLocation } from 'react-router-dom'

const Heading = ({ isInternal }: { isInternal: boolean }) => {
	const location = useLocation()

	return (
		<Flex
			gap='md'
			align='flex-end'
			style={{ margin: isInternal ? '0' : '0 10%' }}
		>
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
