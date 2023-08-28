import { useState, useEffect } from 'react'
import {
	Button,
	Flex,
	Group,
	Modal,
	MultiSelect,
	Select,
	Stack,
	Textarea,
	TextInput
} from '@mantine/core'
import { Member } from 'types'

interface MemberProfileProps {
	opened: boolean
	onClose: () => void
	member: Member
}

const types = ['Undergraduate', 'Graduate', 'Alumni', 'Other']

const faculties = [
	'Arts',
	'Engineering',
	'Environment',
	'Health',
	'Math',
	'Science'
]

const instruments = [
	{
		value: 'Crimson',
		label: 'Woodcock, american'
	},
	{
		value: 'Green',
		label: 'Goanna lizard'
	},
	{
		value: 'Aquamarine',
		label: 'Common wombat'
	},
	{
		value: 'Indigo',
		label: 'Ocelot'
	},
	{
		value: 'Pink',
		label: 'Banded mongoose'
	},
	{
		value: 'Orange',
		label: "Squirrel, smith's bush"
	},
	{
		value: 'Yellow',
		label: 'Lizard, collared'
	}
]

const sizes = [
	{ value: 'xs', label: 'XS' },
	{ value: 's', label: 'S' },
	{ value: 'm', label: 'M' },
	{ value: 'l', label: 'L' },
	{ value: 'xl', label: 'XL' }
]

const MemberProfile = ({ opened, onClose, member }: MemberProfileProps) => {
	const [firstName, setFirstName] = useState<string>('')
	const [lastName, setLastName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [type, setType] = useState<string | null>('')
	const [mainInstrument, setMainInstrument] = useState<string | null>()
	const [instrument, setInstrument] = useState<string[]>([]) // TODO: disable "main instrument" option in secondary instrument list

	useEffect(() => {
		setFirstName(member.first_name)
		setLastName(member.last_name)
		setEmail(member.email)
		setType(types[member.member_type - 1])
	}, [member])

	const UWStudentProfile = () => {
		const [faculty, setFaculty] = useState<string | null>('')
		const [studentNumber, setStudentNumber] = useState<number>()
		const [watIAM, setWatIAM] = useState<string>()

		useEffect(() => {
			if (member.faculty !== undefined && typeof member.faculty === 'number')
				setFaculty(faculties[member.faculty - 1])
			setStudentNumber(member.studentNumber ?? undefined)
			setWatIAM(member.watIAM ?? undefined)
		}, [])

		return (
			<>
				<Select
					label='Faculty'
					data={faculties}
					withAsterisk
					value={faculty}
					onChange={setFaculty}
				/>
				<Group grow>
					<TextInput
						label='Student Number'
						withAsterisk
						value={studentNumber}
						onChange={(e) => setStudentNumber(Number(e.target.value))}
					/>
					<TextInput
						label='WatIAM'
						withAsterisk
						value={watIAM}
						onChange={(e) => setWatIAM(e.target.value)}
					/>
				</Group>
			</>
		)
	}

	return (
		<Modal
			opened={opened}
			onClose={onClose}
			title={member.first_name + ' ' + member.last_name}
			centered
		>
			<Stack spacing='xs'>
				<Group grow>
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
				</Group>
				<TextInput
					label='Email'
					withAsterisk
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Select
					label='Type'
					data={types}
					withAsterisk
					value={type}
					onChange={(value) => setType(value || null)}
				/>
				{(type === 'Undergraduate' || type === 'Graduate') && (
					<UWStudentProfile />
				)}
				<Select
					label='Main Instrument'
					data={instruments}
					withAsterisk
					searchable
					creatable
					getCreateLabel={(query) => `Add ${query}`}
					//onCreate required
					value={mainInstrument}
					onChange={setMainInstrument}
				/>
				<MultiSelect
					label='Other Instruments'
					data={instruments}
					searchable
					creatable
					getCreateLabel={(query) => `Add ${query}`}
					//onCreate required
					value={instrument}
					onChange={setInstrument}
				/>
				<Select label='Shirt Size' data={sizes} w='50%' />
				<Textarea label='Other' />
				<Flex justify='flex-end'>
					<Button onClick={() => console.log('inst', instrument)} mt={10}>
						Save Changes
					</Button>
				</Flex>
			</Stack>
		</Modal>
	)
}

export default MemberProfile
