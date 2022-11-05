import Deliverers from '../../../models/Deliverers.js'

const getDelivererInfo = async (delivererId) => {
    const delivererInfo = await Deliverers.findOne({
        where: {
           id: delivererId
        }
    })

    if(delivererId !== null){
        return delivererInfo.dataValues
    }
}

export default getDelivererInfo 