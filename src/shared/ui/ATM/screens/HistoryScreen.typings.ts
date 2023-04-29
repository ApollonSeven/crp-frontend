interface Operation{
    id?:string
    shortName?:string
    operation?:string
    value?:string
}

interface HistoryDate{
    id?:string
    date?:string
    operations?:Operation[]
}


export interface Props {
    history?: HistoryDate[]
}