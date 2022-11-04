import calculateProductsValue from "./calculateProductsValue.js"
import addDiscount from "./addDiscount.js";
import doesBasketExists from "./validation/doesBasketExists.js";

const displayBasketInfo = (basket) => {

    if(doesBasketExists(basket)){

        const productsPrice = calculateProductsValue(basket.products)
        const price = addDiscount(basket.discountCode, productsPrice)
        
        let basketInfo = {...basket, "productPrice": productsPrice, "priceAfterDiscount": price}

        if(Number.isInteger(basket.delivery.id)){
            basketInfo = {...basketInfo, "priceWithDeliveryCost": parseFloat((price + basket.delivery.price).toFixed(2))}
        }

        return basketInfo
    }
    else{
        return "Nie masz jeszcze nic w koszyku"
    }
}

export default displayBasketInfo