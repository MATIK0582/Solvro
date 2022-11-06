import DiscountCodes from '../../../models/DiscountCodes.js';

const getDiscountInfo = async (discountCode) => {
    const discountInfo = await DiscountCodes.findOne({
        where: {
            name: discountCode
        }
    })

    if(discountInfo !== null){
        return discountInfo.dataValues
    }

    console.log("Niepoprawny kod rabatowy");
    return {name: ''}
}

export default getDiscountInfo