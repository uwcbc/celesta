export interface Member {
  id: string
  firstName: string
  lastName: string
  type: string //'undergrad' | 'grad' | 'alum' | 'other'
  email: string
}