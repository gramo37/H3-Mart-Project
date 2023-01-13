export function convert(type, num) {
    switch (type) {
        case "billion":
            return (parseFloat(num) / 1000000000).toFixed(2) + 'b'
        case "million":
            return (parseFloat(num) / 1000000).toFixed(2) + 'm'
        default:
            return parseFloat(num).toFixed(2)
    }
}