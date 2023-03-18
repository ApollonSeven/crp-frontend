export interface DriverLicenseProps {
    state: string
    id: string
    expireDate: string
    firstName: string
    lastName: string
    street: string
    birthDate: string
    photoURL: string
    donor: boolean
    sex?: 'M' | 'F'
    height: string
    hair?: string
    weight: number
    eyes?: string
    issued: string
    docDiscriminator: string
    signature: string
    restrictions: string
    driverClass: string
    endorsements: string
}
