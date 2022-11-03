const createBasket = (params) => {
    const basket = {   
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

    if(typeof params === 'undefined' || params === null){
        return basket
    }
    else{
        return params
    }
}

export default createBasket