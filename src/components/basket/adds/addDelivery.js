import getDelivererInfo from '../../database/getDeliveryInfo.js'
import doesObjectExists from '../validation/doesObjectExists.js'

const addDelivery = async (id, price) => {

    const deliveryInfo = await getDelivererInfo(id)
    if(doesObjectExists(deliveryInfo)){
        return {"deliveryOption": deliveryInfo.name, "priceWithDeliveryCost": parseFloat((price + deliveryInfo.price).toFixed(2))}
    }
}

export default addDelivery