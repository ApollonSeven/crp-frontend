export function mergeStyles<T extends Record<string, unknown>>(
    defaultStyles: T,
    styles: T | undefined
): T {
    if (!styles) return defaultStyles
    return {
        ...defaultStyles,
        ...styles,
    }
}
