import getProductInfo from '../database/getProductInfo.js'

const calculateProductsValue = async (products) => {
    let productsPrice = 0

    if(products.length == 0){
        console.log("Brak produktów w koszyku")
        return productsPrice
    }
    else{
        for (const product of products){
            
            const productData = await getProductInfo(product.id)
            productsPrice += (productData.price * product.quantity)
        }
        return parseFloat((productsPrice).toFixed(2));
    }
}

export default calculateProductsValue