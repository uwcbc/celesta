import ActionCard from 'components/ActionCard'

const Landing = () => {
	const actions = [
		{
			title: 'Attendance',
			description: 'Sign in to rehearsal!',
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
				gap: '15%',
				height: '70vh',
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
