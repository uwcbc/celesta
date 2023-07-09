export interface Member {
  id: string
  first_name: string
  last_name: string
  email: string
  type: string
  faculty?: string
  studentNumber?: number
  watIAM?: string | null
  mainInstrument: string
  otherInstruments?: string
  shirt_size?: string
  other?: string
}