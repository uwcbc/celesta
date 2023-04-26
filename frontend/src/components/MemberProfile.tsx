import { useState } from 'react'
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
	member: Member | null
}

const types = [
	{ value: 'undergraduate', label: 'Undergraduate' },
	{ value: 'graduate', label: 'Graduate' },
	{ value: 'alumni', label: 'Alumni' },
	{ value: 'other', label: 'Other' }
]

const faculties = [
	{ value: 'arts', label: 'Arts' },
	{ value: 'engineering', label: 'Engineering' },
	{ value: 'environment', label: 'Environment' },
	{ value: 'health', label: 'Health' },
	{ value: 'math', label: 'Math' },
	{ value: 'science', label: 'Science' }
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
		value: 'Orange',
		label: 'Canadian tiger swallowtail butterfly'
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
		value: 'Pink',
		label: 'Hornbill, red-billed'
	},
	{
		value: 'Orange',
		label: "Squirrel, smith's bush"
	},
	{
		value: 'Indigo',
		label: 'Flicker, campo'
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
	const [firstName, setFirstName] = useState<string>(member?.firstName ?? '')
	const [type, setType] = useState<string | null>(member?.type ?? null)

	const UWStudentProfile = () => {
		return (
			<>
				<Select label='Faculty' data={faculties} withAsterisk />
				<Group grow>
					<TextInput label='Student Number' withAsterisk />
					<TextInput label='WatIAM' withAsterisk />
				</Group>
			</>
		)
	}

	return (
		<Modal
			opened={opened}
			onClose={onClose}
			title={member && member.firstName + ' ' + member.lastName}
			centered
		>
			<Stack spacing='xs'>
				<Group grow>
					<TextInput
						label='First Name'
						withAsterisk
						value={firstName}
						onChange={(e) => setFirstName(e.currentTarget.value)}
					/>
					<TextInput label='Last Name' withAsterisk />
				</Group>
				<TextInput label='Email' withAsterisk />
				<Select
					label='Type'
					data={types}
					withAsterisk
					value={type}
					onChange={setType}
				/>
				{(type === 'undergraduate' || type === 'graduate') && (
					<UWStudentProfile />
				)}
				<MultiSelect
					label='Instrument(s)'
					data={instruments}
					withAsterisk
					searchable
					creatable
					getCreateLabel={(query) => `Add ${query}`}
					//onCreate required
					maxDropdownHeight={400}
				/>
				<Select label='Shirt Size' data={sizes} w='50%' />
				<Textarea label='Other' />
				<Flex justify='flex-end'>
					<Button onClick={() => console.log('help', firstName)} mt={10}>
						Save Changes
					</Button>
				</Flex>
			</Stack>
		</Modal>
	)
}

export default MemberProfile
