const removeItem = (array, itemId) => {
    
    // @TODO: przypadek w którym nie ma takiego obiektu

    const items = array.filter(item => {
        return item.productId !== Number(itemId)
    })

    return items
}

export default removeItem