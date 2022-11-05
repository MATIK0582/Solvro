import addDelivery from './adds/addDelivery.js'
import addDiscount from './adds/addDiscount.js'
import calculateProductsValue from './calculateProductsValue.js'
import doesObjectExists from './validation/doesObjectExists.js'

const displayBasketInfo = async (basket) => {

    if(doesObjectExists(basket)){

        const productsPrice = await calculateProductsValue(basket.products)
        const price = await addDiscount(basket.discountCode, productsPrice)
        
        let basketInfo = {...basket, "productPrice": productsPrice, "priceAfterDiscount": price}

        if(Number.isInteger(basket.delivery.id)){
            basketInfo = {...basketInfo, ...await addDelivery(basket.delivery.id, price)}
        }

        return basketInfo
    }
    else{
        return "Nie masz jeszcze nic w koszyku"
    }
}

export default displayBasketInfo