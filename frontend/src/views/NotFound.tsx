import { Box, Text, Title } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import GhostSax from '../assets/ghost_sax.png'

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
				gap: '32px'
			}}
		>
			<Title align='center'>Oops! This page doesn't exist :(</Title>
			<img src={GhostSax} alt='Ghost playing saxophone' />
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
