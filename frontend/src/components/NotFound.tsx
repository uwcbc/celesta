import { Box, Text, Title } from '@mantine/core'
import { useHover } from '@mantine/hooks'
import { Link } from 'react-router-dom'

const NotFound = () => {
	const { hovered, ref } = useHover()
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
			<div ref={ref}>
				<Link to='' style={{ textDecoration: 'none' }}>
					<Text
						c='teal'
						style={{ textDecoration: hovered ? 'underline' : 'none' }}
					>
						← Head back home
					</Text>
				</Link>
			</div>
		</Box>
	)
}

export default NotFound
