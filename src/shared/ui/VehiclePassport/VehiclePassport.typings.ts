import { any } from "prop-types"

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
    yr1stSold?: string
    mo?: string
    issueDate?:string
    ownersList:any
}
