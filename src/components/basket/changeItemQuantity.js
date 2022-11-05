import removeItem from "./removeItem.js"

const changeItemQuantity = (array, itemId, itemQuantity) => {

    if(Number(itemQuantity) === 0){
        return removeItem(array, itemId)
    }
    else if(Number(itemQuantity) >= 0){

        array[array.findIndex(item => item.id === Number(itemId))].quantity = Number(itemQuantity)
        return array
    }
    else{
        // @TODO: rozszerzyć komunikaty błędów
        console.log("Coś się popsuło")
        return array
    }
}

export default changeItemQuantity