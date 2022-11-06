import removeItem from "./removeItem.js"
import checkIfInt from "./validation/checkIfInt.js"

const changeItemQuantity = (array, itemId, itemQuantity) => {

    if(checkIfInt(itemId) && checkIfInt(itemQuantity)){
        if(array.findIndex(item => item.id === Number(itemId)) !== -1){
            if(Number(itemQuantity) === 0){
                return removeItem(array, itemId)
            }
            else if(Number(itemQuantity) >= 0){
        
                array[array.findIndex(item => item.id === Number(itemId))].quantity = Number(itemQuantity)
                return array
            }
        }
    }

    return array
}

export default changeItemQuantity