import doesBasketExists from "./validation/doesBasketExists.js"

const createBasket = (basket) => {
    const basketObj = {   
        "products":[],
        "discountCode": {
            "id": '',
            "name": '',
            "value": '',
            "type": ''
        },
        "delivery": {
            "id": '',
            "name": '',
            "price": ''
        }
    }
    
    if(doesBasketExists(basket)){
        return basket
    }
    else{
        return basketObj
    }
}

export default createBasket