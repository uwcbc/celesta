import { Card, Image, Text } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

interface ActionCardProps {
	title: string
	description: string
	image: string
	link: string
}

const ActionCard = ({ title, description, image, link }: ActionCardProps) => {
	const navigate = useNavigate()

	return (
		<Card
			shadow='sm'
			padding='lg'
			radius='md'
			withBorder
			sx={{
				width: '100%',
				':hover': {
					cursor: 'pointer'
				}
			}}
			onClick={() => navigate(link)}
		>
			<Card.Section>
				<Image src={image} height={225} />
			</Card.Section>
			<Text size='xl' fw={500} mt='lg' mb='md'>
				{title}
			</Text>
			<Text size='md' c='dimmed'>
				{description}
			</Text>
		</Card>
	)
}

export default ActionCard
