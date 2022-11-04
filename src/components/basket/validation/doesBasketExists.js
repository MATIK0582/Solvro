const doesBasketExists = (basket) => {
    return typeof basket !== 'undefined' && basket !== null
}

export default doesBasketExists