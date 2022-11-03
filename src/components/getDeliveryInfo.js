import Deliverers from "../../models/data/Deliverers.js";

const getDelivererInfo = async (array, delivererId) => {
    const delivererInfo = await Deliverers.findOne({
        where: {
           id: delivererId
        }
    })

    if(delivererId !== null){
        const {id, name, price} = delivererInfo.dataValues
        array.delivery = {id, name, price}
    }

    return array
}

export default getDelivererInfo 