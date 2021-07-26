export const addOpacityToColor = (color, opacity) => {
    const opacityHex = Math.round(opacity * 256).toString(16)
    return `${color}${opacityHex}`
}