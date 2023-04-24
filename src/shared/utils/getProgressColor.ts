export const getProgressColor = (value: number) => {
    const percent = value - 0.2
    const hue = ((percent < 0 ? 0 : percent) * 130).toString(10)
    return ['hsl(', hue, ',100%,50%)'].join('')
}
