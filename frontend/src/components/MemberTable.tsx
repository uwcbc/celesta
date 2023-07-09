import { useState } from 'react'
import { Box, Flex, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import MemberProfile from './MemberProfile'
import { Member } from 'types'
import MemberEntry from './MemberEntry'

const data = [
	{
		id: '8',
		first_name: 'Nester',
		last_name: 'Preddle',
		email: 'npreddle0@nih.gov',
		type: 'undergraduate',
		studentNumber: 21783203,
		watIAM: 'Awaradam',
		mainInstrument: '',
		shirt_size: 'MW'
	},
	{
		id: '4',
		first_name: 'Edward',
		last_name: 'Duchenne',
		email: 'educhenne1@marriott.com',
		type: 'undergraduate',
		studentNumber: 28213544,
		watIAM: 'Bentota',
		mainInstrument: '',
		shirt_size: 'RQ'
	},
	{
		id: '263',
		first_name: 'Cynthia',
		last_name: 'Cornthwaite',
		email: 'ccornthwaite2@prweb.com',
		type: 'undergraduate',
		studentNumber: 25405594,
		watIAM: 'Malmö',
		mainInstrument: '',
		shirt_size: 'UI'
	},
	{
		id: '21097',
		first_name: 'Bernita',
		last_name: 'Markwelley',
		email: 'bmarkwelley3@un.org',
		type: 'undergraduate',
		studentNumber: 27762875,
		watIAM: 'Liangping',
		mainInstrument: '',
		shirt_size: 'EA'
	},
	{
		id: '19',
		first_name: 'Rebecca',
		last_name: 'McNally',
		email: 'rmcnally4@webnode.com',
		type: 'graduate',
		studentNumber: 25796776,
		watIAM: 'Kekaha',
		mainInstrument: '',
		shirt_size: 'QE'
	},
	{
		id: '22',
		first_name: 'Ada',
		last_name: 'Lafflina',
		email: 'alafflina5@goo.ne.jp',
		type: 'graduate',
		studentNumber: 28382715,
		watIAM: 'Lehu',
		mainInstrument: '',
		shirt_size: 'KL'
	},
	{
		id: '29',
		first_name: 'Maxi',
		last_name: 'Shiel',
		email: 'mshiel6@xinhuanet.com',
		type: 'alumni',
		studentNumber: 23363880,
		watIAM: 'Ashley',
		mainInstrument: '',
		shirt_size: 'QE'
	},
	{
		id: '6',
		first_name: 'Buddie',
		last_name: 'Jewell',
		email: 'bjewell7@aboutads.info',
		type: 'alumni',
		studentNumber: 29634676,
		watIAM: 'Georgetown',
		mainInstrument: '',
		shirt_size: 'CS'
	},
	{
		id: '1',
		first_name: 'Caroljean',
		last_name: 'Menzies',
		email: 'cmenzies8@amazonaws.com',
		type: 'other',
		studentNumber: 23355570,
		watIAM: 'Terapo Mission',
		mainInstrument: '',
		shirt_size: 'KC'
	},
	{
		id: '203',
		first_name: 'Callida',
		last_name: 'Gabbot',
		email: 'cgabbot9@ucsd.edu',
		type: 'other',
		studentNumber: 20895476,
		watIAM: 'Ratanakiri',
		mainInstrument: '',
		shirt_size: 'HE'
	}
]

interface MemberListProps {
	member_list : []
}

const MemberTable = ({member_list}: MemberListProps) => {
	const [opened, { open, close }] = useDisclosure(false)
	const [openMember, setOpenMember] = useState<Member | null>(null)

	return (
		<>
			<Title order={3} mb={10}>
				Members
			</Title>
			<Flex justify='flex-start' gap='xs' wrap='wrap' direction='row'>
				{member_list.map((member: Member) => (
					<Box
						key={member.id}
						onClick={() => {
							open()
							setOpenMember(member)
						}}
					>
						<MemberEntry member={member} />
					</Box>
				))}
			</Flex>
			{openMember && (
				<MemberProfile opened={opened} onClose={close} member={openMember} />
			)}
		</>
	)
}

export default MemberTable
