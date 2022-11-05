import doesObjectExists from './validation/doesObjectExists.js'

import JSURL from 'jsurl'

const getBasketLink = (basket) => {

    if(doesObjectExists(basket)){
        return JSURL.stringify(basket);
    }
}

export default getBasketLink