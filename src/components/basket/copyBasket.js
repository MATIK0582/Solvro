import getProductInfo from '../database/getProductInfo.js'
import getDelivererInfo from '../database/getDeliveryInfo.js'
import getDiscountInfo from '../database/getDiscountInfo.js'

import doesObjectExists from '../basket/validation/doesObjectExists.js'
import checkIfInt from './validation/checkIfInt.js'
import JSURL from 'jsurl'

const copyBasket = async (link) => {
    
    const basket = JSURL.parse(link)

    if(doesObjectExists(basket)){

        let productData = []
        for(const product of basket.products){

            const productInfo = await getProductInfo(product.id)
            if(doesObjectExists(productInfo) && checkIfInt(product.quantity)){
                productData = [...productData, {"id": productInfo.id, "quantity": product.quantity }]
            }
        }
        basket.products = productData

        if(basket.delivery.id !== ''){
            const deliveryInfo = await getDelivererInfo(basket.delivery.id)
            if(doesObjectExists(deliveryInfo)){
                basket.delivery.id = deliveryInfo.id
            }
            else{
                basket.delivery.id = ''
            }
        }

        if(basket.discountCode.name !== ''){
            const discountInfo = await getDiscountInfo(basket.discountCode.name)
            if(doesObjectExists(discountInfo)){
                basket.discountCode.name = discountInfo.name
            }
            else{
                basket.discountCode.name= ''
            }
        }

        return basket
    }
}

export default copyBasket