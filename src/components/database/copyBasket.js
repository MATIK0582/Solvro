import Shared from '../../../models/users/Shared.js'

const copyBasket = async (link) => {

    const basketInfo = await Shared.findOne({
        where: {
            link: link
        }
    })

    if(basketInfo !== null){

        const {basketObject} = basketInfo.dataValues
        return basketObject
    }
}

export default copyBasket