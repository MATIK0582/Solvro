import Products from '../../../models/Products.js';

const getProductInfo = async (productId) => {
    
    if(Number.isInteger(Number(productId))){
        const productInfo = await Products.findOne({
            where: {
                id: productId
            }
        })
        
        if(productInfo !== null){
            const {id, name, price} = productInfo.dataValues
            let product = {id, name, price}
            
            return product
        }
    }
}

export default getProductInfo