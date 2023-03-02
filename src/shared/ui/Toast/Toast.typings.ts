import React from "react";

export type Props = {
    variant?: 'Info' | 'Warning' | 'Error' | 'Success'
    icon?: JSX.Element;
    styles: Record<string, string>
    children?: React.ReactNode
};
