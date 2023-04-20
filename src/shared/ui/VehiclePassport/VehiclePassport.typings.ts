interface Owner {
    id: string
    fullName: string
    address: string
    taxNumber: string
    month: string
    year: string
    regDate: string
}

export interface Props {
    id?: number
    vehicleIdNumber?: string
    model?: string
    make?: string
    plateNumber?: string
    bodyTypeModel?: string
    fuel?: string
    buyDate?: string
    feesPaid?: string
    regDate?: string
    firstYearSold?: string
    mo?: string
    issueDate?: string
    owners: Owner[]
}
