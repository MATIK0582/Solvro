import getProductInfo from '../../database/getProductInfo.js'
import doesObjectExists from '../validation/doesObjectExists.js'

const addProduct = async (array, itemId, itemQuantity) => {

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

export default addProduct