import removeItem from "./removeItem.js"

const changeItemQuantity = (array, itemId, itemQuantity) => {

    if(Number(itemQuantity) === 0){
        return removeItem(array, itemId)
    }
    else if(Number(itemQuantity) >= 0){
        const items = array.filter(item => {
            if(item.productId === Number(itemId)){
                item.productQuantity = Number(itemQuantity)
                return item
            }
            else{
                return item
            }
        })

        return items
    }
    else{
        // @TODO: rozszerzyć komunikaty błędów
        console.log("Coś się popsuło");
        return array
    }
}

export default changeItemQuantity