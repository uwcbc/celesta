import ActionCard from 'components/ActionCard'

// this is mobile first
const Landing = () => {
	const actions = [
		{
			title: 'Attendance',
			description: 'Sign in to rehearsal OR join the band!',
			image:
				'https://media.discordapp.net/attachments/535232819853656114/1161748942204174356/Band.jpeg',
			link: 'signin'
		},
		{
			title: 'Music',
			description: "View this term's sheet music!",
			image:
				'https://lifefromtheviolasection.com/wp-content/uploads/2022/10/sigmund-rMW9us4NCzU-unsplash-1024x683.jpg',
			link: 'music'
		}
	]
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '36px',
				alignItems: 'center'
			}}
		>
			{actions.map((action, index) => (
				<ActionCard
					key={index}
					title={action.title}
					description={action.description}
					image={action.image}
					link={action.link}
				/>
			))}
		</div>
	)
}

export default Landing
