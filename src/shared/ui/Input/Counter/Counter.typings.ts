import {InputProps} from "shared/ui/Input/Input.typings";
import {ReactNode} from "react";

export interface Props extends InputProps<number> {
    children?: ReactNode
    styles?: Record<string, string>
}
