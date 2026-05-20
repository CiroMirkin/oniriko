
export const formatPrice = (value: number) => {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARG',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value)
}
