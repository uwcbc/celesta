import { Center, Loader } from '@mantine/core'

const LoadingScreen = () => {
	return (
		<Center style={{ height: '90vh' }}>
			<Loader color='teal' type='bars' size={50} />
		</Center>
	)
}

export default LoadingScreen
