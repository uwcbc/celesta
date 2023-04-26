import { useState } from 'react'
import { Table } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import MemberProfile from './MemberProfile'
import { Member } from 'types'

const data = [
	{
		id: '3339e10f-e8b1-4980-8e80-7bdaa4da46d4',
		firstName: 'Alexander',
		lastName: 'Goodenough',
		type: 'PF',
		email: 'agoodenough0@engadget.com'
	},
	{
		id: '0e842341-d9dc-4aae-8f29-d4c1be6056d5',
		firstName: 'Adrianna',
		lastName: 'Arrandale',
		type: 'IN',
		email: 'aarrandale1@prnewswire.com'
	},
	{
		id: 'a0d84122-92f8-4efc-9f52-8c3acd7e43d7',
		firstName: 'Natividad',
		lastName: 'Lornsen',
		type: 'TR',
		email: 'nlornsen2@geocities.com'
	},
	{
		id: '8a0906ba-a7c0-4112-a5d7-9c8c2a6a2b63',
		firstName: 'Erika',
		lastName: 'Izat',
		type: 'US',
		email: 'eizat3@stumbleupon.com'
	},
	{
		id: '7e8d4430-726e-4fed-a5a7-e8fc968a818b',
		firstName: 'Bertine',
		lastName: 'Audrey',
		type: 'FJ',
		email: 'baudrey4@umn.edu'
	},
	{
		id: 'bb9cfdfc-2789-4271-a81f-9012ce83fae5',
		firstName: 'Zoe',
		lastName: 'Fitzsymon',
		type: 'US',
		email: 'zfitzsymon5@jalbum.net'
	},
	{
		id: 'c9a1b44d-071c-476d-8d15-ed7d2e811102',
		firstName: 'Gussie',
		lastName: 'Duham',
		type: 'BW',
		email: 'gduham6@issuu.com'
	},
	{
		id: '5846580a-fb1f-4b10-ad94-609f059ec5c6',
		firstName: 'Dominik',
		lastName: 'Rodnight',
		type: 'CN',
		email: 'drodnight7@oakley.com'
	},
	{
		id: 'beec6515-3edf-4da5-96a5-8b5fd0da0934',
		firstName: 'Betti',
		lastName: 'Gages',
		type: 'CA',
		email: 'bgages8@themeforest.net'
	},
	{
		id: '32c34874-da8d-4c3d-be21-2985811d88b0',
		firstName: 'Barrie',
		lastName: 'Calladine',
		type: 'US',
		email: 'bcalladine9@businessinsider.com'
	}
]

const MemberTable = () => {
	const [opened, { open, close }] = useDisclosure(false)
	const [openMember, setOpenMember] = useState<Member | null>(null)

	return (
		<>
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
				<MemberProfile opened={opened} onClose={close} member={openMember} />
			</Table>
		</>
	)
}

export default MemberTable
