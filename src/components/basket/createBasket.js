import doesObjectExists from './validation/doesObjectExists.js'

const createBasket = (basket) => {
    
    if(doesObjectExists(basket)){
        return basket
    }
    else{
        const basketObj = {   
            "products":[],
            "discountCode": {
                "name": '',
            },
            "delivery": {
                "id": '',
            }
        }
        
        return basketObj
    }
}

export default createBasket