import { useState } from 'react'
import { Table, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import MemberProfile from './MemberProfile'
import { Member } from 'types'

const data = [
	{
		id: '8',
		firstName: 'Nester',
		lastName: 'Preddle',
		email: 'npreddle0@nih.gov',
		type: 'undergraduate',
		studentNumber: 21783203,
		watIAM: 'Awaradam',
		mainInstrument: '',
		shirtSize: 'MW'
	},
	{
		id: '4',
		firstName: 'Edward',
		lastName: 'Duchenne',
		email: 'educhenne1@marriott.com',
		type: 'undergraduate',
		studentNumber: 28213544,
		watIAM: 'Bentota',
		mainInstrument: '',
		shirtSize: 'RQ'
	},
	{
		id: '263',
		firstName: 'Cynthia',
		lastName: 'Cornthwaite',
		email: 'ccornthwaite2@prweb.com',
		type: 'undergraduate',
		studentNumber: 25405594,
		watIAM: 'Malmö',
		mainInstrument: '',
		shirtSize: 'UI'
	},
	{
		id: '21097',
		firstName: 'Bernita',
		lastName: 'Markwelley',
		email: 'bmarkwelley3@un.org',
		type: 'undergraduate',
		studentNumber: 27762875,
		watIAM: 'Liangping',
		mainInstrument: '',
		shirtSize: 'EA'
	},
	{
		id: '19',
		firstName: 'Rebecca',
		lastName: 'McNally',
		email: 'rmcnally4@webnode.com',
		type: 'graduate',
		studentNumber: 25796776,
		watIAM: 'Kekaha',
		mainInstrument: '',
		shirtSize: 'QE'
	},
	{
		id: '22',
		firstName: 'Ada',
		lastName: 'Lafflina',
		email: 'alafflina5@goo.ne.jp',
		type: 'graduate',
		studentNumber: 28382715,
		watIAM: 'Lehu',
		mainInstrument: '',
		shirtSize: 'KL'
	},
	{
		id: '29',
		firstName: 'Maxi',
		lastName: 'Shiel',
		email: 'mshiel6@xinhuanet.com',
		type: 'alumni',
		studentNumber: 23363880,
		watIAM: 'Ashley',
		mainInstrument: '',
		shirtSize: 'QE'
	},
	{
		id: '6',
		firstName: 'Buddie',
		lastName: 'Jewell',
		email: 'bjewell7@aboutads.info',
		type: 'alumni',
		studentNumber: 29634676,
		watIAM: 'Georgetown',
		mainInstrument: '',
		shirtSize: 'CS'
	},
	{
		id: '1',
		firstName: 'Caroljean',
		lastName: 'Menzies',
		email: 'cmenzies8@amazonaws.com',
		type: 'other',
		studentNumber: 23355570,
		watIAM: 'Terapo Mission',
		mainInstrument: '',
		shirtSize: 'KC'
	},
	{
		id: '203',
		firstName: 'Callida',
		lastName: 'Gabbot',
		email: 'cgabbot9@ucsd.edu',
		type: 'other',
		studentNumber: 20895476,
		watIAM: 'Ratanakiri',
		mainInstrument: '',
		shirtSize: 'HE'
	}
]

const MemberTable = () => { // TODO: replace basic table with horizontal cards
	const [opened, { open, close }] = useDisclosure(false)
	const [openMember, setOpenMember] = useState<Member | null>(null)

	return (
		<>
			<Title order={3} mb={10}>
				Members
			</Title>
			<Table highlightOnHover>
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Type</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{data.map((member: Member) => (
						<tr
							key={member.id}
							onClick={() => {
								open()
								setOpenMember(member)
								console.log('i am sending this member:', member)
							}}
						>
							<td>{member.firstName}</td>
							<td>{member.lastName}</td>
							<td>{member.type}</td>
							<td>{member.email}</td>
						</tr>
					))}
				</tbody>
			</Table>
			{openMember && (
				<MemberProfile opened={opened} onClose={close} member={openMember} />
			)}
		</>
	)
}

export default MemberTable
