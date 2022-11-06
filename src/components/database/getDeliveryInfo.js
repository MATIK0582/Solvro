import Deliverers from '../../../models/Deliverers.js'
import checkIfInt from '../basket/validation/checkIfInt.js'

const getDelivererInfo = async (delivererId) => {
    if(checkIfInt(delivererId)){
        const delivererInfo = await Deliverers.findOne({
        where: {
           id: delivererId
        }
    })

        if(delivererInfo !== null){
            return delivererInfo.dataValues
        }
    }

    console.log("Niepoprawne dane dostawcy")
    return {id: ''}
}

export default getDelivererInfo 