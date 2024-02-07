import { Button, Flex, Stack, Text, TextInput, Title } from '@mantine/core'
import { useState } from 'react'

// this page was designed mobile-first
const SignIn = () => {
	const [isNewMember, setIsNewMember] = useState<boolean>(false)

	const [firstName, setFirstName] = useState<string>('')
	const [lastName, setLastName] = useState<string>('')
	const [email, setEmail] = useState<string>('')

	const date = new Date()
	const latestRehearsal =
		date.getDay() === 2 ? date : 'last tuesday algorithm here'

	const handleNewMember = () => {
		setIsNewMember(true)
	}

	const handleSubmission = () => {
		console.log(
			firstName,
			lastName,
			email,
			'is signing into rehearsal on',
			latestRehearsal
		)
	}

	return (
		<div>
			<Title order={2} mb={20}>
				{isNewMember ? 'Join the band!' : 'Sign in to Rehearsal'}
			</Title>
			{latestRehearsal === date ? (
				<Text mb={20}>You are signing in to today's rehearsal!</Text>
			) : (
				<Text mb={20}>
					There is no rehearsal today!
					<br />
					You are signing in for rehearsal that was on{' '}
					<strong>latestRehearsal</strong>.
				</Text>
			)}
			{isNewMember === false && (
				<Text
					c='teal'
					mb={20}
					sx={{ ':hover': { textDecoration: 'underline', cursor: 'pointer' } }}
					onClick={handleNewMember}
				>
					Are you a new member?
				</Text>
			)}

			<Stack mb={40}>
				<TextInput
					label='First Name'
					withAsterisk
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<TextInput
					label='Last Name'
					withAsterisk
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
				<TextInput
					label='Email'
					withAsterisk
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</Stack>
			<Flex direction='row-reverse'>
				<Button variant='filled' color='teal' onClick={handleSubmission}>
					Sign In
				</Button>
			</Flex>
		</div>
	)
}

export default SignIn
