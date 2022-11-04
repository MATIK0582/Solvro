const calculateProductsValue = (products) => {
    let productsPrice = 0

    if(products.length == 0){
        return productsPrice
    }
    else{
        products.forEach(element => {
            productsPrice += (element.price * element.quantity)
        });

        return parseFloat((productsPrice).toFixed(2));
    }

}

export default calculateProductsValue