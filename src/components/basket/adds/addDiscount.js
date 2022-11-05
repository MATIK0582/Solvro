import getDiscountInfo from '../../database/getDiscountInfo.js'
import doesObjectExists from '../validation/doesObjectExists.js'

const addDiscount = async (discount, price) => {

    const discountInfo = await getDiscountInfo(discount.name)

    if(doesObjectExists(discountInfo)){
        if(discountInfo.type === "amount"){

            price -= discountInfo.value
            if(price < 0) price = 0
        }
        else if(discountInfo.type === "percentage"){

            price = (((100 - discountInfo.value) * price) / 100)
        }
    }

    return parseFloat((price).toFixed(2));
}

export default addDiscount