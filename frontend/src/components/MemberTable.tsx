import { Box, Flex, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import MemberProfile from './MemberProfile'
import { Member } from 'types'
import axios from 'axios'
import { useEffect, useState } from 'react'
import MemberEntry from './MemberEntry'

const MemberTable = () => {
	const [opened, { open, close }] = useDisclosure(false)
	const [openMember, setOpenMember] = useState<Member | null>(null)

	const [memberList, setMemberList] = useState([])

	useEffect(() => {
		axios.get('http://localhost:8000/api/students/').then((response) => {
			setMemberList(response.data)
		})
	}, [])

	return (
		<>
			<Title order={3} mb={10}>
				Members
			</Title>
			<Flex justify='flex-start' gap='xs' wrap='wrap' direction='row'>
				{memberList.map((member: Member) => (
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
