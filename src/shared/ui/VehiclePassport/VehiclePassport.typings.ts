import { any, number } from "prop-types"

export interface Props {
    id?: number
    vehicleIdNumber?: string
    model?: string
    make?: string
    plateNumber?: string
    bodyTypeModel?:string
    fuel?: string
    buyDate?: string
    feesPaid?: string
    regDate?: string
    firstYearSold?: string
    mo?: string
    issueDate?:string
    owners:any
}
