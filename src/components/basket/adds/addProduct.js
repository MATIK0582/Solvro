import getProductInfo from '../../database/getProductInfo.js'
import doesObjectExists from '../validation/doesObjectExists.js'
import checkIfInt from '../validation/checkIfInt.js'

const addProduct = async (array, itemId, itemQuantity) => {

    if(checkIfInt(itemId)){
        if(itemQuantity >= 1 && checkIfInt(itemQuantity)){
            if(array.findIndex(item => item.id === Number(itemId)) !== -1){
    
                array[array.findIndex(item => item.id === Number(itemId))].quantity += Number(itemQuantity)          
                return array
            }
            else{
        
                if(doesObjectExists(await getProductInfo(itemId))){
                    return [...array, {"id": Number(itemId), "quantity": Number(itemQuantity)}]
                }
                else{
                    console.log("Nie ma tekiego produktu")
                    return array
                }
            }
        }
    }

    return array
}

export default addProduct