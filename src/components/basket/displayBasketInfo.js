import addDelivery from './adds/addDelivery.js'
import addDiscount from './adds/addDiscount.js'
import calculateProductsValue from './calculateProductsValue.js'
import doesObjectExists from './validation/doesObjectExists.js'

import getProductInfo from '../database/getProductInfo.js'
import getDiscountInfo from '../database/getDiscountInfo.js'
import getDelivererInfo from '../database/getDeliveryInfo.js'

const displayBasketInfo = async (basket) => {

    if(doesObjectExists(basket)){

        let productData = []
        for(const product of basket.products){
            productData = [...productData, {... await getProductInfo(product.id), "quantity": product.quantity }]
        }

        const productsPrice = await calculateProductsValue(basket.products)
        const price = await addDiscount(basket.discountCode, productsPrice)
        
        let basketInfo = {
            "products": productData,
            "discountCode": await getDiscountInfo(basket.discountCode.name),
            "delivery": await getDelivererInfo(basket.delivery.id),
            "productPrice": productsPrice,
            "priceAfterDiscount": price}

        if(Number.isInteger(basket.delivery.id)){
            basketInfo = {...basketInfo, ...await addDelivery(basket.delivery.id, price)}
        }

        return basketInfo
    }

    return "Nie masz jeszcze nic w koszyku"
}

export default displayBasketInfo