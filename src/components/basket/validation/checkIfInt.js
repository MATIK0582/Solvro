const checkIfInt = (object) => {
    const MAX_POSTGRES_INTEGER_VALUE = 2147483647
    const MIN_POSTGRES_INTEGER_VALUE = -2147483648

    return Number.isInteger(Number(object)) && Number(object) <= MAX_POSTGRES_INTEGER_VALUE && Number(object) >= MIN_POSTGRES_INTEGER_VALUE
}

export default checkIfInt