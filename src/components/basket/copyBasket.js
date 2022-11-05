import doesObjectExists from '../basket/validation/doesObjectExists.js'
import JSURL from 'jsurl'

const copyBasket = (link) => {
    
    const basket = JSURL.parse(link)
    if(doesObjectExists(basket)){
        return basket
    }
}

export default copyBasket