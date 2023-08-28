export interface Member {
	id: string
	first_name: string
	last_name: string
	email: string
	member_type: number
	faculty?: string
	studentNumber?: number
	watIAM?: string | null
	mainInstrument: string
	otherInstruments?: string
	shirt_size?: string
	other?: string
}
