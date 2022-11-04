const addDiscount = (discount, price) => {

    if(discount.value !== 0){
        if(discount.type === "amount"){

            price -= discount.value
            if(price < 0) price = 0
        }
        else if(discount.type === "percentage"){

            price = (((100 - discount.value) * price) / 100)
        }
    }

    return parseFloat((price).toFixed(2));
}

export default addDiscount