import * as uuid from 'uuid'
import Shared from '../../../models/users/Shared.js'
import doesBasketExists from '../basket/validation/doesBasketExists.js'

const getBasketLink = async (basket) => {

    if(doesBasketExists){
        
        console.log(basket);

        const link = uuid.v4()
        await Shared.create({
            basketObject: basket,
            link: link
        })

        return link
    }
}

export default getBasketLink