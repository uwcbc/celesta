import { Box, Flex, Group, Image, Text } from '@mantine/core'
import { Member } from 'types'

interface MemberEntryProps {
	member: Member
	image?: string
}

// TODO: link member.mainInstrument to instrument assets, and add created time
const MemberEntry = ({ member, image }: MemberEntryProps) => {
	return (
		<Group miw={300}>
			<Box bg='black' w={100} h={100}>
				<Image src='https://cdn.shopify.com/s/files/1/1692/7321/products/Steinhoff-Advanced-Student-Bb-Trumpet-Gold-KSO-TR10-GLD_b1515a67-cfb4-4dc3-bf9c-c1141fd69a35_1400x.jpg?v=1674040157' />
			</Box>
			<Flex direction='column'>
				<Text fz='sm' fw={700}>
					{member.firstName + ' ' + member.lastName}
				</Text>
				<Text fz='sm'>{member.mainInstrument}</Text>
				<Text fz='sm'>{member.email}</Text>
				<Text fz='sm'>{member.studentNumber}</Text>
				<Text fz='sm'>2010-10-28 15:24:00</Text>
			</Flex>
		</Group>
	)
}

export default MemberEntry
