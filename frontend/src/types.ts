export interface Member {
  id: string
  firstName: string
  lastName: string
  email: string
  type: string
  faculty?: string
  studentNumber?: number
  watIAM?: string | null
  mainInstrument: string
  otherInstruments?: string
  shirtSize?: string
  other?: string
}