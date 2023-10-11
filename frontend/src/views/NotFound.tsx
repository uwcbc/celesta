import { Box, Text, Title } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
	const navigate = useNavigate()

	return (
		<Box
			style={{
				height: '90vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '24px'
			}}
		>
			<Title>Oops! This page doesn't exist :(</Title>
			<Text
				c='teal'
				sx={{ ':hover': { textDecoration: 'underline', cursor: 'pointer' } }}
				onClick={() => navigate('/')}
			>
				← Head back home
			</Text>
		</Box>
	)
}

export default NotFound
